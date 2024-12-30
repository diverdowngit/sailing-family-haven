import { contentfulClient } from './client';
import type { BlogPost, BlogPostFields, GalleryImage, GalleryImageFields } from './types';
import { placeholderBlogPosts, placeholderGalleryImages } from './placeholders';

// Function to fetch blog posts from Contentful
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  if (!contentfulClient) {
    console.warn('Using placeholder data: Contentful client not initialized');
    return placeholderBlogPosts;
  }

  try {
    const response = await contentfulClient.getEntries<BlogPostFields>({
      content_type: 'blog',
      order: ['-fields.publishDate'],
    });
    return response.items as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return placeholderBlogPosts;
  }
};

// Function to fetch gallery images from Contentful
export const fetchGalleryImages = async (): Promise<GalleryImage[]> => {
  if (!contentfulClient) {
    console.warn('Using placeholder data: Contentful client not initialized');
    return placeholderGalleryImages;
  }

  try {
    const response = await contentfulClient.getEntries<GalleryImageFields>({
      content_type: 'galleryImage',
    });
    return response.items as GalleryImage[];
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return placeholderGalleryImages;
  }
};