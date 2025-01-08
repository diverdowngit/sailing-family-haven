import { createClient } from 'contentful';
import type { BlogPost, GalleryImage } from './types';
import { placeholderBlogPosts, placeholderGalleryImages } from './placeholders';

const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || '',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '',
});

// Function to fetch blog posts from Contentful
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await contentfulClient.getEntries<BlogPostFields>({
      content_type: 'blog',
      order: ['-sys.createdAt'],
      include: 2,
    });
    return response.items as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return placeholderBlogPosts;
  }
};

// Function to fetch gallery images from Contentful
export const fetchGalleryImages = async (): Promise<GalleryImage[]> => {
  try {
    const response = await contentfulClient.getEntries<GalleryImageFields>({
      content_type: 'galleryImage',
      include: 2,
    });
    return response.items as GalleryImage[];
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return placeholderGalleryImages;
  }
};