// Cloudinary Service for Image Upload
import { useState } from 'react';

export interface CloudinaryUploadResult {
  url: string;
  publicId: string;
  secureUrl: string;
}

export const cloudinaryService = {
  /**
   * Upload image from browser (client-side)
   * Uses unsigned upload preset
   */
  async uploadImageClient(
    file: File,
    uploadPreset: string = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  ): Promise<CloudinaryUploadResult> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('folder', 'vizschool/blogs');

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'Upload failed');
      }

      return {
        url: data.url,
        publicId: data.public_id,
        secureUrl: data.secure_url
      };
    } catch (error) {
      console.error('Client-side Cloudinary upload error:', error);
      throw new Error('Failed to upload image');
    }
  },

  /**
   * Delete image from Cloudinary (requires backend API)
   * Note: You'll need to create a backend endpoint for this
   */
  async deleteImage(publicId: string): Promise<void> {
    console.log('Delete image:', publicId);
    // Note: Deletion requires API secret, should be done from backend
    // For now, just log it
  }
};

// Client-side hook for React
export const useCloudinaryUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File): Promise<CloudinaryUploadResult | null> => {
    setUploading(true);
    setError(null);

    try {
      const result = await cloudinaryService.uploadImageClient(file);
      return result;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Upload failed';
      setError(message);
      return null;
    } finally {
      setUploading(false);
    }
  };

  return { uploadImage, uploading, error };
};