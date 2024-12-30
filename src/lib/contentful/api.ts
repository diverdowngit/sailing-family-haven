import { contentfulClient } from './client';
import type { BlogPost, GalleryImage, BlogPostSkeleton, GalleryImageSkeleton } from './types';
import { placeholderBlogPosts, placeholderGalleryImages } from './placeholders';

// Function to fetch blog posts from Contentful
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await contentfulClient.getEntries<BlogPostSkeleton>({
      content_type: 'blog',
      order: ['-fields.publishDate'],
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return placeholderBlogPosts;
  }
};

// Function to fetch gallery images from Contentful
export const fetchGalleryImages = async (): Promise<GalleryImage[]> => {
  try {
    const response = await contentfulClient.getEntries<GalleryImageSkeleton>({
      content_type: 'gallery',
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return placeholderGalleryImages;
  }
};