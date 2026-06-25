import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, LogOut, FileText, Trash2, Copy, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { blogService, storageService, authService } from "../services/supabase-config";
import type { BlogPost } from "../services/supabase-config";

// Reference template for styled blog content. Paste this (with your content)
// into ChatGPT/Claude to get formatted HTML, then paste the result into the
// "Full Blog Content" field below.
const BLOG_HTML_TEMPLATE = `<h2 class="text-3xl md:text-4xl font-bold text-primary mt-10 mb-8 text-start">
Flexible Path to Academic Excellence, Learning That Fits Your Family's Lifestyle
</h2>

<p class="text-base md:text-lg font-medium text-neutral-700 first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
A flexible, values-based online schooling approach designed for modern families seeking continuity, balance, and academic excellence within a supportive and well-structured learning environment.
</p>


<p class="mt-6">
Family life today comes in many forms. Work commitments, travel schedules, training routines, and personal circumstances all shape how learning fits into daily life. Online schooling offers families the flexibility to align education with their routines while maintaining clear academic goals and high standards.
</p>

<p>
Some families relocate for work or live across different regions. Others support children pursuing sports, creative arts, or specialised interests. Many families simply value a home-centred rhythm that allows learning to take place alongside meaningful family time. In each situation, online schooling provides continuity, structure, and adaptability while keeping learning purposeful and consistent.
</p>

<p>
Launching in January 2026, VizSchool offers a thoughtful approach to online schooling that blends academic rigour with family-friendly flexibility. As the virtual learning arm of HFSE International School, VizSchool extends the mission of being an International School for All, making quality education accessible to families wherever they are.
</p>

<h2 class="text-2xl font-bold text-primary mt-10 mb-4">Why Families Choose Online Schooling</h2>

<p>
Families choose online schooling because it supports continuity, personalisation, and a balanced learning pace. At VizSchool, the experience is intentionally designed. Lessons are planned by certified educators, interaction is purposeful, and student wellbeing is woven into daily schedules. Learning adapts to the learner while maintaining clear expectations and progression.
</p>

<p>
Online schooling at VizSchool supports families who value flexibility alongside structure, including:
</p>

<div class="space-y-3 my-6 ml-6">
  <p>Globally mobile families seeking continuity across locations</p>
  <p>Households with travel or variable work schedules</p>
  <p>Learners engaged in sports, performing arts, or specialised training</p>
  <p>Students who benefit from tailored pacing and focused learning blocks</p>
  <p>Parents who prioritise a family-centred, values-driven education</p>
</div>

<p>
Rather than fitting learning into a fixed routine, online schooling at VizSchool aligns with each family's rhythm while keeping academic outcomes clear and consistent.
</p>

<h2 class="text-2xl font-bold text-primary mt-10 mb-4">What Makes VizSchool's Online Schooling Distinct</h2>

<p>
Online schooling at VizSchool balances flexibility with care, guidance, and connection. Learners remain academically supported while developing independence and confidence. The HAPI values of Happy, Humble, Assertive, Appreciative, Productive, Proactive, Independent, and Interdependent guide both learning experiences and character development.
</p>

<p>
Certified HFSE educators deliver carefully sequenced lessons through a technology-enabled platform that encourages inquiry, discussion, and meaningful practice. Screen time is purposeful and interactive, ensuring that online schooling supports engagement, reflection, and deep understanding.
</p>

<h2 class="text-2xl font-bold text-primary mt-10 mb-4">Flexible Learning Pathways for Diverse Family Needs</h2>

<p>
VizSchool offers three pathways within a unified online schooling framework, allowing families to select the level of structure that suits them best.
</p>

<div class="space-y-6 my-8">
  <div class="bg-white border border-neutral-200 p-5 rounded-lg shadow-sm">
    <h3 class="text-xl font-bold text-primary mb-2">VizIndie Flexible Learning</h3>
    <p class="text-sm text-neutral-700">
      Designed for self-motivated learners who progress at their own pace through curated modules and assessments. Optional mentoring and quarterly check-ins provide guidance while preserving schedule flexibility.
    </p>
  </div>

  <div class="bg-white border border-neutral-200 p-5 rounded-lg shadow-sm">
    <h3 class="text-xl font-bold text-primary mb-2">VizFlex Blended Support</h3>
    <p class="text-sm text-neutral-700">
      A balanced pathway combining weekly learning plans, live teacher sessions, and regular feedback. This option suits families who value both independence and a steady learning rhythm.
    </p>
  </div>

  <div class="bg-white border border-neutral-200 p-5 rounded-lg shadow-sm">
    <h3 class="text-xl font-bold text-primary mb-2">VizLive Full-Time Virtual Classroom</h3>
    <p class="text-sm text-neutral-700">
      A structured pathway with daily live lessons, collaborative activities, and ongoing assessments led by experienced HFSE teachers.
    </p>
  </div>
</div>

<p>
Each pathway aligns with international benchmarks, ensuring online schooling remains structured, credible, and outcomes-focused.
</p>

<h2 class="text-2xl font-bold text-primary mt-10 mb-4">Academic Coverage and Curriculum</h2>

<p>
VizSchool delivers a complete academic journey from Primary One to Secondary Four, aligned with the Singapore curriculum and international standards. Core subjects include English, Mathematics, Science, and Mother Tongue Filipino. Enrichment subjects broaden learning through Computer Basics, ICT and Robotics, Financial Literacy, and Technology Innovation.
</p>

<p>
Short, focused live sessions are paired with self-paced tasks. This balance supports effective online schooling by allowing learners to manage time well while maintaining depth and clarity of understanding.
</p>

<h2 class="text-2xl font-bold text-primary mt-10 mb-4">Assessment That Reflects Meaningful Progress</h2>

<p>
Assessment at VizSchool is designed to show growth over time. Formative checks, quarterly evaluations, and performance-based tasks help students apply learning with confidence. Digital portfolios capture work samples, reflections, and milestones each term.
</p>

<p>
This approach makes online schooling transparent for families and supports smooth transitions within VizSchool, to on-site HFSE schooling, or to other international institutions.
</p>

<h2 class="text-2xl font-bold text-primary mt-10 mb-4">Community, Connection, and Belonging</h2>

<p>
Online schooling at VizSchool includes intentional opportunities for connection. Learners may participate in campus celebrations, clubs, competitions, and hybrid learning experiences throughout the year. These shared moments strengthen relationships, communication skills, and confidence within a wider school community.
</p>

<h2 class="text-2xl font-bold text-primary mt-10 mb-4">Designed for Real Life, Built for the Future</h2>

<p>
Education should support how families live and grow. Online schooling at VizSchool honours this by combining flexibility with structure and values with vision. Families gain the freedom to move, plan, and spend time together while maintaining academic consistency and purpose.
</p>

<p>
Launching in January 2026, VizSchool invites families worldwide to experience online schooling that adapts to real life and prepares learners for a future without borders.
</p>

<div class="bg-primary/5 border border-primary/20 p-6 rounded-xl my-8 text-center">
  <p class="text-base font-semibold text-primary mb-2">Ready to Get Started?</p>
  <p class="text-sm text-neutral-700 mb-4">
    For admissions and enquiries, contact our Admissions Team at
  </p>
  <p class="text-sm text-neutral-700 font-medium">
    <a href="tel:+6582000062" class="text-primary hover:underline">+65 8200 0062</a>
    to learn more about VizSchool and its online schooling programmes.
  </p>
</div>`;

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
  const [templateOpen, setTemplateOpen] = useState(false);
  const [templateCopied, setTemplateCopied] = useState(false);

  const handleCopyTemplate = async () => {
    try {
      await navigator.clipboard.writeText(BLOG_HTML_TEMPLATE);
      setTemplateCopied(true);
      setTimeout(() => setTemplateCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. non-HTTPS) — leave the template visible to copy manually
    }
  };

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

              {/* HTML Template Reference */}
              <div className="rounded-lg border border-neutral-200 bg-neutral-50">
                <div className="flex items-center justify-between gap-3 p-4">
                  <button
                    type="button"
                    onClick={() => setTemplateOpen((v) => !v)}
                    className="text-sm font-semibold text-gray-700 hover:text-gray-900"
                  >
                    {templateOpen ? "▾" : "▸"} Styled HTML Template (for ChatGPT / Claude)
                  </button>
                  <Button type="button" variant="outline" size="sm" onClick={handleCopyTemplate}>
                    {templateCopied ? (
                      <>
                        <Check className="mr-2 h-4 w-4" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" /> Copy template
                      </>
                    )}
                  </Button>
                </div>

                {templateOpen && (
                  <div className="border-t border-neutral-200 p-4">
                    <p className="mb-3 text-xs text-gray-600">
                      Copy this template, paste it into ChatGPT or Claude, then paste your plain blog text under it and ask it
                      to format your content using the same template. Paste the result into the “Full Blog Content” field above.
                    </p>
                    <pre className="max-h-80 overflow-auto rounded-md bg-neutral-900 p-4 text-xs leading-relaxed text-neutral-100 whitespace-pre-wrap">
                      {BLOG_HTML_TEMPLATE}
                    </pre>
                  </div>
                )}
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