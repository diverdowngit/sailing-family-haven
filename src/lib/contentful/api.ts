import { contentfulClient } from './client';
import type { BlogPost, GalleryImage, BlogPostSkeleton, GalleryImageSkeleton } from './types';
import { placeholderBlogPosts, placeholderGalleryImages } from './placeholders';

// Function to fetch blog posts from Contentful
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await contentfulClient.getEntries<BlogPostSkeleton['fields']>({
      content_type: 'blog',
      order: ['-fields.publishDate'],
    });
    return response.items as unknown as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return placeholderBlogPosts;
  }
};

// Function to fetch gallery images from Contentful
export const fetchGalleryImages = async (): Promise<GalleryImage[]> => {
  try {
    const response = await contentfulClient.getEntries<GalleryImageSkeleton['fields']>({
      content_type: 'galleryImage',
    });
    return response.items as unknown as GalleryImage[];
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return placeholderGalleryImages;
  }
};