import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { Plus, LogOut, FileText, Save, Trash2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { blogService } from "../services/firebase-config";
import type { BlogPost } from "../services/firebase-config";
import { cloudinaryService } from "../services/cloudinary-service";

function AdminDashboard() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  // Form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("Education");
  const [readTime, setReadTime] = useState("5 min read");
  const [metaDescription, setMetaDescription] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/admin/login");
      return;
    }
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const allBlogs = await blogService.getAllBlogs(false);
    setBlogs(allBlogs);
  };

  const handleLogout = async () => {
    await signOut(auth);
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
  };

  const handleSelectBlog = (blog: BlogPost) => {
    setIsCreating(false);
    setSelectedBlog(blog);
    setTitle(blog.title);
    setSlug(blog.slug);
    setCategory(blog.category);
    setReadTime(blog.readTime);
    setMetaDescription(blog.seo?.metaDescription || blog.excerpt);
    
    // Strip HTML tags from content for editing
    const textContent = blog.content.replace(/<[^>]*>/g, '\n').replace(/\n\n+/g, '\n\n');
    setContent(textContent);
    setImagePreview(blog.image);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateSlug = (text: string) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const formatContent = (text: string) => {
    // Convert markdown-style formatting to HTML matching your template
    let html = text;
    
    // Convert headings
    html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-primary mt-10 mb-4">$1</h2>');
    
    // Convert paragraphs
    html = html.split('\n\n').map(para => {
      if (para.startsWith('<h2')) return para;
      if (para.trim() === '') return '';
      return `<p class="mt-4">${para.trim()}</p>`;
    }).filter(p => p).join('\n\n');
    
    return html;
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      let imageUrl = imagePreview;
      let imagePublicId = selectedBlog?.imagePublicId;

      if (imageFile) {
        const uploadResult = await cloudinaryService.uploadImageClient(imageFile);
        imageUrl = uploadResult.secureUrl;
        imagePublicId = uploadResult.publicId;
      }

      const blogData = {
        category,
        readTime,
        title,
        excerpt: metaDescription,
        slug: slug || generateSlug(title),
        image: imageUrl,
        imagePublicId,
        content: formatContent(content),
        published: true,
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
      } else {
        await blogService.createBlog(blogData);
        alert("Blog created successfully!");
      }

      fetchBlogs();
      handleNewBlog();
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
      fetchBlogs();
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
                }`}>
                <div className="flex items-start gap-2">
                  <FileText className="h-4 w-4 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{blog.title}</p>
                    <p className="text-xs text-gray-500">{blog.category}</p>
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
          <h2 className="text-2xl font-bold mb-6">
            {isCreating ? "Create New Blog" : selectedBlog ? "Edit Blog" : "Select a blog or create new"}
          </h2>

          {(isCreating || selectedBlog) && (
            <div className="space-y-6">
              {/* Image Upload */}
              <div>
                <Label>Featured Image</Label>
                <Input type="file" accept="image/*" onChange={handleImageChange} className="mt-2" />
                {imagePreview && (
                  <img src={imagePreview} alt="Preview" className="mt-2 h-40 object-cover rounded" />
                )}
              </div>

              {/* SEO Title */}
              <div>
                <Label>SEO Title</Label>
                <Input
                  value={title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setTitle(e.target.value);
                    setSlug(generateSlug(e.target.value));
                  }}
                  placeholder="Your blog title"
                  className="mt-2"
                />
              </div>

              {/* Slug */}
              <div>
                <Label>Slug (URL)</Label>
                <Input 
                  value={slug} 
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSlug(e.target.value)} 
                  className="mt-2" 
                />
                <p className="text-xs text-gray-500 mt-1">URL: /blogs/{slug}</p>
              </div>

              {/* Category & Read Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Category</Label>
                  <Input 
                    value={category} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)} 
                    className="mt-2"
                    placeholder="Education" 
                  />
                </div>
                <div>
                  <Label>Read Time</Label>
                  <Input 
                    value={readTime} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReadTime(e.target.value)} 
                    className="mt-2"
                    placeholder="5 min read" 
                  />
                </div>
              </div>

              {/* Meta Description */}
              <div>
                <Label>Meta Description</Label>
                <Textarea 
                  value={metaDescription} 
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMetaDescription(e.target.value)} 
                  rows={3} 
                  className="mt-2"
                  placeholder="Short description for SEO (1-2 sentences)"
                />
              </div>

              {/* Content Editor */}
              <div>
                <Label>Content</Label>
                <Textarea
                  name="content"
                  value={content}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                  rows={20}
                  className="mt-2"
                  placeholder="Write your blog content here...

Use ## for headings
Double line breaks for paragraphs"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Tips: Use ## for headings, double line breaks for paragraphs
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <Button onClick={handleSave} disabled={loading} className="flex-1">
                  <Save className="mr-2 h-4 w-4" />
                  {loading ? "Saving..." : "Save Blog"}
                </Button>
                {selectedBlog && (
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