import { createClient } from 'contentful';
import type { BlogPost, GalleryImage } from './types';
import { placeholderBlogPosts, placeholderGalleryImages } from './placeholders';

const contentfulClient = import.meta.env.VITE_CONTENTFUL_SPACE_ID && import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
  ? createClient({
      space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
      accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    })
  : null;

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  if (!contentfulClient) {
    console.log('Using placeholder blog posts');
    return placeholderBlogPosts as BlogPost[];
  }

  try {
    const response = await contentfulClient.getEntries<BlogPost>({
      content_type: 'blogPost',
      order: ['-sys.createdAt'],
      include: 2,
    });
    return response.items as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return placeholderBlogPosts as BlogPost[];
  }
};

export const getGalleryImages = async (): Promise<GalleryImage[]> => {
  if (!contentfulClient) {
    console.log('Using placeholder gallery images');
    return placeholderGalleryImages as GalleryImage[];
  }

  try {
    const response = await contentfulClient.getEntries<GalleryImage>({
      content_type: 'galleryImage',
      order: ['-sys.createdAt'],
      include: 2,
    });
    return response.items as GalleryImage[];
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return placeholderGalleryImages as GalleryImage[];
  }
};