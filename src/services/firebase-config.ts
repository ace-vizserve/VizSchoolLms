// Firebase Configuration and Setup
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  Timestamp,
} from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Firestore Collections
export const COLLECTIONS = {
  BLOGS: "blogs",
};

// Blog Type Definition
export interface BlogPost {
  id?: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  imagePublicId?: string;
  content: string;
  createdAt: Date | Timestamp;
  updatedAt: Date | Timestamp;
  published: boolean;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: string;
  };
}

// Blog Service
export const blogService = {
  // Create new blog
  async createBlog(
    blogData: Omit<BlogPost, "id" | "createdAt" | "updatedAt">
  ): Promise<string> {
    const docRef = await addDoc(collection(db, COLLECTIONS.BLOGS), {
      ...blogData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });

    return docRef.id;
  },

  // Update blog
  async updateBlog(id: string, blogData: Partial<BlogPost>): Promise<void> {
    const docRef = doc(db, COLLECTIONS.BLOGS, id);

    await updateDoc(docRef, {
      ...blogData,
      updatedAt: Timestamp.now(),
    });
  },

  // Delete blog
  async deleteBlog(id: string): Promise<void> {
    const docRef = doc(db, COLLECTIONS.BLOGS, id);
    await deleteDoc(docRef);
  },

  // Get blog by ID
  async getBlogById(id: string): Promise<BlogPost | null> {
    const docRef = doc(db, COLLECTIONS.BLOGS, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      } as BlogPost;
    }

    return null;
  },

  // Get blog by slug
  async getBlogBySlug(slug: string): Promise<BlogPost | null> {
    const q = query(
      collection(db, COLLECTIONS.BLOGS),
      where("slug", "==", slug),
      where("published", "==", true)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docData = querySnapshot.docs[0];

      return {
        id: docData.id,
        ...docData.data(),
      } as BlogPost;
    }

    return null;
  },

  // Get all blogs
async getAllBlogs(publishedOnly = true): Promise<BlogPost[]> {
  const q = publishedOnly
    ? query(collection(db, COLLECTIONS.BLOGS), where("published", "==", true))
    : query(collection(db, COLLECTIONS.BLOGS));

  const querySnapshot = await getDocs(q);

  const blogs = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as BlogPost[];

  // Sort manually (newest first) with proper Timestamp handling
  return blogs.sort((a, b) => {
    const aTime = a.createdAt instanceof Timestamp
      ? a.createdAt.toMillis()
      : new Date(a.createdAt).getTime();

    const bTime = b.createdAt instanceof Timestamp
      ? b.createdAt.toMillis()
      : new Date(b.createdAt).getTime();

    return bTime - aTime;
  });
},

  // Get latest blogs (for "Other Articles")
  async getLatestBlogs(limit: number = 3, excludeSlug?: string): Promise<BlogPost[]> {
    const allBlogs = await this.getAllBlogs(true);

    let filtered = allBlogs;

    if (excludeSlug) {
      filtered = filtered.filter((blog) => blog.slug !== excludeSlug);
    }

    return filtered.slice(0, limit);
  },
};