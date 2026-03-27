import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY || '';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  imagePublicId?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: string;
  };
}

// Blog Service
export const blogService = {
  // Get all blogs (with optional published filter)
  async getAllBlogs(publishedOnly: boolean = true): Promise<BlogPost[]> {
    let query = supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (publishedOnly) {
      query = query.eq('published', true);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }

    return data || [];
  },

  // Get blog by slug
  async getBlogBySlug(slug: string): Promise<BlogPost | null> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (error) {
      console.error('Error fetching blog by slug:', error);
      throw error;
    }

    return data;
  },

  // Get latest blogs (excluding current)
  async getLatestBlogs(limit: number = 2, excludeSlug?: string): Promise<BlogPost[]> {
    let query = supabase
      .from('blogs')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(limit + (excludeSlug ? 1 : 0));

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching latest blogs:', error);
      throw error;
    }

    let blogs = data || [];

    // Filter out the current blog if excludeSlug is provided
    if (excludeSlug) {
      blogs = blogs.filter(blog => blog.slug !== excludeSlug).slice(0, limit);
    }

    return blogs;
  },

 // Create new blog
async createBlog(blogData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  const { data, error } = await supabase
    .from('blogs')
    .insert({
      title: blogData.title,
      slug: blogData.slug,
      category: blogData.category,
      read_time: blogData.readTime,
      excerpt: blogData.excerpt,
      content: blogData.content,
      image: blogData.image,
      image_public_id: blogData.imagePublicId,
      published: blogData.published,
      seo: blogData.seo,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating blog:', error);
    throw error;
  }

  return data.id;
},

  // Update blog
// Update blog
async updateBlog(id: string, blogData: Partial<BlogPost>): Promise<void> {
  const updateData: any = {};
  
  if (blogData.title) updateData.title = blogData.title;
  if (blogData.slug) updateData.slug = blogData.slug;
  if (blogData.category) updateData.category = blogData.category;
  if (blogData.readTime) updateData.read_time = blogData.readTime;
  if (blogData.excerpt) updateData.excerpt = blogData.excerpt;
  if (blogData.content) updateData.content = blogData.content;
  if (blogData.image) updateData.image = blogData.image;
  if (blogData.imagePublicId) updateData.image_public_id = blogData.imagePublicId;
  if (blogData.published !== undefined) updateData.published = blogData.published;
  if (blogData.seo) updateData.seo = blogData.seo;
  
  updateData.updated_at = new Date().toISOString();

  const { error } = await supabase
    .from('blogs')
    .update(updateData)
    .eq('id', id);

  if (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
},

  // Delete blog
  async deleteBlog(id: string): Promise<void> {
    // First, get the blog to find the image
    const { data: blog } = await supabase
      .from('blogs')
      .select('image_public_id')
      .eq('id', id)
      .single();

    // Delete the image from storage if it exists
    if (blog?.image_public_id) {
      await supabase.storage
        .from('Assets')
        .remove([blog.image_public_id]);
    }

    // Delete the blog post
    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting blog:', error);
      throw error;
    }
  },
};

// Storage Service for images
export const storageService = {
  // Upload image to Supabase Storage
  async uploadImage(file: File): Promise<{ url: string; publicId: string }> {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
    const filePath = fileName;

    const { error: uploadError } = await supabase.storage
      .from('Assets')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) {
      console.error('Error uploading image:', uploadError);
      throw uploadError;
    }

    // Get public URL
    const { data } = supabase.storage
      .from('Assets')
      .getPublicUrl(filePath);

    return {
      url: data.publicUrl,
      publicId: filePath,
    };
  },

  // Delete image from Supabase Storage
  async deleteImage(publicId: string): Promise<void> {
    const { error } = await supabase.storage
      .from('Assets')
      .remove([publicId]);

    if (error) {
      console.error('Error deleting image:', error);
      throw error;
    }
  },
};

// Auth helpers
export const authService = {
  // Sign in
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    return data;
  },

  // Sign out
  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
  },

  // Get current user
  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  // Listen to auth changes
  onAuthStateChange(callback: (user: any) => void) {
    return supabase.auth.onAuthStateChange((_event, session) => {
      callback(session?.user || null);
    });
  },
};