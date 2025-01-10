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
    return placeholderBlogPosts;
  }

  try {
    const response = await contentfulClient.getEntries<BlogPostFields>({
      content_type: 'blogPost',
      order: ['-sys.createdAt'],
      include: 2,
    });
    return response.items as unknown as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return placeholderBlogPosts;
  }
};

export const getGalleryImages = async (): Promise<GalleryImage[]> => {
  if (!contentfulClient) {
    console.log('Using placeholder gallery images');
    return placeholderGalleryImages;
  }

  try {
    const response = await contentfulClient.getEntries<GalleryImageFields>({
      content_type: 'galleryImage',
      order: ['-sys.createdAt'],
      include: 2,
    });
    return response.items as unknown as GalleryImage[];
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return placeholderGalleryImages;
  }
};