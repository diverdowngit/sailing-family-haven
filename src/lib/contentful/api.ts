import { createClient } from 'contentful';
import type { BlogPost, GalleryImage, BlogPostFields, GalleryImageFields } from './types';
import { placeholderBlogPosts, placeholderGalleryImages } from './placeholders';

// Only create client if credentials are available
const getContentfulClient = () => {
  const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
  const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

  if (!spaceId || !accessToken) {
    console.warn('Missing Contentful credentials. Using placeholder data instead.');
    return null;
  }

  return createClient({
    space: spaceId,
    accessToken: accessToken,
  });
};

const contentfulClient = getContentfulClient();

// Function to fetch blog posts from Contentful
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  if (!contentfulClient) {
    console.warn('No Contentful client available. Using placeholder data.');
    return placeholderBlogPosts;
  }

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
  if (!contentfulClient) {
    console.warn('No Contentful client available. Using placeholder data.');
    return placeholderGalleryImages;
  }

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