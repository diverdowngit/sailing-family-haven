import type { BlogPost, GalleryImage } from './types';

export const placeholderBlogPosts: BlogPost[] = [
  {
    sys: {
      id: '1',
      type: 'Entry',
      createdAt: '2024-01-15T00:00:00.000Z',
      updatedAt: '2024-01-15T00:00:00.000Z',
      locale: 'en-US',
      contentType: {
        sys: {
          id: 'blog',
          type: 'Link',
          linkType: 'ContentType'
        }
      }
    },
    fields: {
      title: 'Our First Sailing Adventure',
      slug: 'first-sailing-adventure',
      excerpt: 'Join us as we embark on our first family sailing adventure across the Pacific.',
      content: {
        nodeType: 'document',
        data: {},
        content: [{
          nodeType: 'paragraph',
          data: {},
          content: [{
            nodeType: 'text',
            value: 'Lorem ipsum dolor sit amet...',
            marks: [],
            data: {}
          }]
        }]
      },
      publishDate: '2024-01-15',
      featuredImage: {
        sys: {
          id: 'placeholder1',
          type: 'Asset',
          createdAt: '2024-01-15T00:00:00.000Z',
          updatedAt: '2024-01-15T00:00:00.000Z',
          locale: 'en-US',
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'asset'
            }
          }
        },
        fields: {
          title: 'Placeholder Image',
          file: {
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
            details: { size: 1234, image: { width: 1920, height: 1080 } },
            fileName: 'placeholder.jpg',
            contentType: 'image/jpeg'
          }
        }
      }
    },
    metadata: { tags: [] }
  }
];

export const placeholderGalleryImages: GalleryImage[] = [
  {
    sys: {
      id: '1',
      type: 'Entry',
      createdAt: '2024-01-15T00:00:00.000Z',
      updatedAt: '2024-01-15T00:00:00.000Z',
      locale: 'en-US',
      contentType: {
        sys: {
          id: 'gallery',
          type: 'Link',
          linkType: 'ContentType'
        }
      }
    },
    fields: {
      title: 'Sunset at Sea',
      image: {
        sys: {
          id: 'placeholder1',
          type: 'Asset',
          createdAt: '2024-01-15T00:00:00.000Z',
          updatedAt: '2024-01-15T00:00:00.000Z',
          locale: 'en-US',
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'asset'
            }
          }
        },
        fields: {
          title: 'Placeholder Image',
          file: {
            url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
            details: { size: 1234, image: { width: 1920, height: 1080 } },
            fileName: 'placeholder.jpg',
            contentType: 'image/jpeg'
          }
        }
      }
    },
    metadata: { tags: [] }
  }
];