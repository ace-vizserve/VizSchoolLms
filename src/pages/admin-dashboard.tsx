import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, LogOut, FileText, Trash2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { blogService, storageService, authService } from "../services/supabase-config";
import type { BlogPost } from "../services/supabase-config";

function AdminDashboard() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toggleLoading, setToggleLoading] = useState(false);
  const navigate = useNavigate();

  // Form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("Education");
  const [readTime, setReadTime] = useState("5 min read");
  const [metaDescription, setMetaDescription] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [published, setPublished] = useState(false);

  useEffect(() => {
    checkAuth();
    fetchBlogs();
  }, []);

  const checkAuth = async () => {
    const user = await authService.getCurrentUser();
    if (!user) {
      navigate("/admin/login");
    }
  };

  const fetchBlogs = async () => {
    const allBlogs = await blogService.getAllBlogs(false);
    setBlogs(allBlogs);
  };

  const handleLogout = async () => {
    await authService.signOut();
    navigate("/admin/login");
  };

  const handleNewBlog = () => {
    setIsCreating(true);
    setSelectedBlog(null);
    setTitle("");
    setSlug("");
    setCategory("Education");
    setReadTime("5 min read");
    setMetaDescription("");
    setContent("");
    setImageFile(null);
    setImagePreview("");
    setPublished(false);
  };

  const handleSelectBlog = (blog: BlogPost) => {
    setIsCreating(false);
    setSelectedBlog(blog);
    setTitle(blog.title);
    setSlug(blog.slug);
    setCategory(blog.category);
    setReadTime(blog.readTime);
    setMetaDescription(blog.seo?.metaDescription || "");
    setPublished(blog.published ?? true);

    // Convert HTML back to readable format
    let textContent = blog.content;

    textContent = textContent.replace(/<blockquote[^>]*>(.*?)<\/blockquote>/g, '> $1');
    textContent = textContent.replace(/<h3[^>]*>(.*?)<\/h3>/g, '### $1');
    textContent = textContent.replace(/<h2[^>]*>(.*?)<\/h2>/g, '## $1');
    textContent = textContent.replace(/<strong>(.*?)<\/strong>/g, '**$1**');
    textContent = textContent.replace(/<b>(.*?)<\/b>/g, '**$1**');
    textContent = textContent.replace(/<em>(.*?)<\/em>/g, '*$1*');
    textContent = textContent.replace(/<i>(.*?)<\/i>/g, '*$1*');
    textContent = textContent.replace(/<\/p>\s*<p[^>]*>/g, '\n\n');
    textContent = textContent.replace(/<[^>]*>/g, '');
    textContent = textContent.replace(/&quot;/g, '"');
    textContent = textContent.replace(/&amp;/g, '&');
    textContent = textContent.replace(/&lt;/g, '<');
    textContent = textContent.replace(/&gt;/g, '>');
    textContent = textContent.replace(/\n{3,}/g, '\n\n');
    textContent = textContent.trim();

    setContent(textContent);
    setImagePreview(blog.image);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const generateSlug = (text: string) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const formatContent = (text: string) => {
    let html = text;

    html = html.replace(/^> (.+)$/gm, '<blockquote class="!border-l-4 !border-primary !pl-4 !italic !font-semibold !text-lg !text-neutral-800 !my-8">$1</blockquote>');
    html = html.replace(/^## (.+)$/gm, '<h2 class="!text-2xl !font-bold !text-primary !mt-10 !mb-4">$1</h2>');
    html = html.replace(/^### (.+)$/gm, '<h3 class="!text-xl !font-bold !text-primary !mb-2">$1</h3>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

    const paragraphs = html.split('\n\n');
    html = paragraphs
      .map((para, index) => {
        para = para.trim();
        if (!para) return '';

        if (para.startsWith('<h2') || para.startsWith('<h3') || para.startsWith('<blockquote')) {
          return para;
        }

        if (index === 0) {
          return `<p class="!text-base md:!text-lg !font-medium !text-neutral-700 first-letter:!text-5xl first-letter:!font-bold first-letter:!text-primary first-letter:!mr-2 first-letter:!float-left">${para}</p>`;
        }

        return `<p class="!mt-4">${para}</p>`;
      })
      .filter(Boolean)
      .join('\n\n');

    return html;
  };

  const handleTogglePublish = async () => {
    if (!selectedBlog?.id) {
      alert("Please save the blog first before changing publish status");
      return;
    }

    setToggleLoading(true);
    try {
      const newPublishedState = !published;
      await blogService.updateBlog(selectedBlog.id, { published: newPublishedState });

      setPublished(newPublishedState);
      setBlogs(blogs.map(b => b.id === selectedBlog.id ? { ...b, published: newPublishedState } : b));
      setSelectedBlog({ ...selectedBlog, published: newPublishedState });
    } catch (error) {
      console.error(error);
      alert("Error updating publish status");
    } finally {
      setToggleLoading(false);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      let imageUrl = imagePreview;
      let imagePublicId = selectedBlog?.imagePublicId;

      if (imageFile) {
        const uploadResult = await storageService.uploadImage(imageFile);
        imageUrl = uploadResult.url;
        imagePublicId = uploadResult.publicId;
      }

      // Generate excerpt from first 150 characters of content
      const plainText = content.replace(/[#*>]/g, '').trim();
      const excerpt = plainText.substring(0, 150) + (plainText.length > 150 ? '...' : '');

      const blogData = {
        category,
        readTime,
        title,
        excerpt,
        slug: slug || generateSlug(title),
        image: imageUrl,
        imagePublicId,
        content: formatContent(content),
        published,
        seo: {
          metaTitle: title,
          metaDescription: metaDescription,
          keywords: [],
          ogImage: imageUrl,
        }
      };

      if (selectedBlog?.id) {
        await blogService.updateBlog(selectedBlog.id, blogData);
        alert("Blog updated successfully!");
        const updatedBlog = { ...selectedBlog, ...blogData, updatedAt: new Date().toISOString() };
        setBlogs(blogs.map(b => b.id === selectedBlog.id ? updatedBlog : b));
        setSelectedBlog(updatedBlog);
      } else {
        const docId = await blogService.createBlog(blogData as any);
        alert("Blog created successfully!");
        await fetchBlogs();
        setIsCreating(false);
        const allBlogs = await blogService.getAllBlogs(false);
        const newlyCreatedBlog = allBlogs.find(b => b.id === docId);
        if (newlyCreatedBlog) {
          setSelectedBlog(newlyCreatedBlog);
          setPublished(newlyCreatedBlog.published ?? false);
        }
      }

      setImageFile(null);
    } catch (error) {
      console.error(error);
      alert("Error saving blog");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedBlog?.id) return;
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      await blogService.deleteBlog(selectedBlog.id);
      alert("Blog deleted successfully!");
      await fetchBlogs();
      handleNewBlog();
    } catch (error) {
      alert("Error deleting blog");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r overflow-y-auto">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">VizSchool Admin</h1>
          <Button onClick={handleLogout} variant="ghost" size="sm" className="mt-2 w-full">
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>

        <div className="p-4">
          <Button onClick={handleNewBlog} className="w-full mb-4">
            <Plus className="mr-2 h-4 w-4" /> New Blog
          </Button>

          <div className="space-y-2">
            <h2 className="font-semibold text-sm text-gray-500">All Blogs ({blogs.length})</h2>
            {blogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => handleSelectBlog(blog)}
                className={`p-3 rounded cursor-pointer border ${
                  selectedBlog?.id === blog.id ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-2">
                  <FileText className="h-4 w-4 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{blog.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs text-gray-500">{blog.category}</p>
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded ${
                          blog.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {blog.published ? '●' : '○'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Blog Editor</h2>
                <p className="text-sm text-gray-500 mt-1">
                  {isCreating ? "Create a new blog post" : selectedBlog ? "Edit existing blog post" : "Select or create a blog"}
                </p>
              </div>

              {selectedBlog?.id && (
                <div
                  className={`px-4 py-2 rounded-full font-semibold ${
                    published ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {published ? '● Published' : '○ Draft'}
                </div>
              )}
            </div>

            {isCreating && (
              <p className="text-sm text-gray-500 mt-2">
                Save once to enable publish toggle and delete options
              </p>
            )}
          </div>

          {(isCreating || selectedBlog) && (
            <div className="space-y-6">
              {/* Featured Image */}
              <div>
                <Label>Featured Image</Label>
                <Input type="file" accept="image/*" onChange={handleImageChange} className="mt-2" />
                {imagePreview && (
                  <img src={imagePreview} alt="Preview" className="mt-3 h-48 w-full object-cover rounded-lg shadow-sm" />
                )}
              </div>

              {/* SEO Title */}
              <div>
                <Label>Blog Title (SEO Title)</Label>
                <Input
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setSlug(generateSlug(e.target.value));
                  }}
                  placeholder="Enter blog title here"
                  className="mt-2"
                />
              </div>

              {/* Slug */}
              <div>
                <Label>Slug (URL)</Label>
                <Input value={slug} onChange={(e) => setSlug(e.target.value)} className="mt-2" />
                <p className="text-xs text-gray-500 mt-1">URL: /blogs/{slug || '[auto-generated]'}</p>
              </div>

              {/* Category & Read Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Category</Label>
                  <Input value={category} onChange={(e) => setCategory(e.target.value)} className="mt-2" placeholder="Education" />
                </div>
                <div>
                  <Label>Read Time</Label>
                  <Input value={readTime} onChange={(e) => setReadTime(e.target.value)} className="mt-2" placeholder="5 min read" />
                </div>
              </div>

              {/* Meta Description */}
              <div>
                <Label>Meta Description (for search engines)</Label>
                <Textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  rows={3}
                  className="mt-2"
                  placeholder="Short SEO summary (150–160 characters recommended)"
                />
              </div>

              {/* Content Editor */}
              <div>
                <Label>Full Blog Content</Label>
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={22}
                  className="mt-2 font-mono text-sm"
                  placeholder={`Start writing here...

First paragraph will get automatic drop-cap styling (big colorful first letter).

Use markdown for formatting:

## Main Heading
### Sub Heading

**Bold text**   *italic text*

> This is a blockquote

Double line breaks create new paragraphs.

Paste full HTML if you want exact control (headings, cards, etc.).`}
                />
                <p className="text-xs text-gray-500 mt-1">
                  First paragraph → automatic drop cap • ## → big heading • ### → subheading • ** → bold • &gt; → quote • Double Enter → new paragraph
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 pt-6 border-t">
                {selectedBlog?.id && (
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleTogglePublish}
                      disabled={toggleLoading}
                      className={`
                        relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                        ${published ? 'bg-green-500' : 'bg-gray-300'} disabled:opacity-50
                      `}
                    >
                      <span
                        className={`
                          inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                          ${published ? 'translate-x-6' : 'translate-x-1'}
                        `}
                      />
                    </button>
                    <Label className="cursor-pointer" onClick={handleTogglePublish}>
                      {toggleLoading ? "Updating..." : published ? "Published" : "Draft"}
                    </Label>
                  </div>
                )}

                <div className="flex-1" />

                {(isCreating || selectedBlog?.id) && (
                  <Button onClick={handleSave} disabled={loading}>
                    <FileText className="mr-2 h-4 w-4" />
                    {loading ? "Saving..." : isCreating ? "Create Blog" : "Save Changes"}
                  </Button>
                )}

                {selectedBlog?.id && (
                  <Button onClick={handleDelete} variant="destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;