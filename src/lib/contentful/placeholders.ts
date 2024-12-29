import type { BlogPost, GalleryImage } from './types';

export const placeholderBlogPosts: BlogPost[] = [
  {
    sys: { 
      id: '1', 
      type: 'Entry',
      contentType: { 
        sys: { 
          type: 'Link',
          linkType: 'ContentType',
          id: 'blog' 
        } 
      },
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'placeholder'
        }
      },
      environment: {
        sys: {
          type: 'Link',
          linkType: 'Environment',
          id: 'master'
        }
      },
      createdAt: '2024-01-15T00:00:00.000Z',
      updatedAt: '2024-01-15T00:00:00.000Z',
      revision: 1,
      locale: 'en-US',
      metadata: { tags: [] }
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
        fields: {
          file: {
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
          }
        }
      }
    }
  },
  {
    sys: { 
      id: '2', 
      type: 'Entry',
      contentType: { 
        sys: { 
          type: 'Link',
          linkType: 'ContentType',
          id: 'blog' 
        } 
      },
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'placeholder'
        }
      },
      environment: {
        sys: {
          type: 'Link',
          linkType: 'Environment',
          id: 'master'
        }
      },
      createdAt: '2024-01-10T00:00:00.000Z',
      updatedAt: '2024-01-10T00:00:00.000Z',
      revision: 1,
      locale: 'en-US',
      metadata: { tags: [] }
    },
    fields: {
      title: 'Life at Sea',
      slug: 'life-at-sea',
      excerpt: 'Discovering the joys and challenges of living on a sailboat.',
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
      publishDate: '2024-01-10',
      featuredImage: {
        fields: {
          file: {
            url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
          }
        }
      }
    }
  }
];

export const placeholderGalleryImages: GalleryImage[] = [
  {
    sys: { 
      id: '1', 
      type: 'Entry',
      contentType: { 
        sys: { 
          type: 'Link',
          linkType: 'ContentType',
          id: 'gallery' 
        } 
      },
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'placeholder'
        }
      },
      environment: {
        sys: {
          type: 'Link',
          linkType: 'Environment',
          id: 'master'
        }
      },
      createdAt: '2024-01-15T00:00:00.000Z',
      updatedAt: '2024-01-15T00:00:00.000Z',
      revision: 1,
      locale: 'en-US',
      metadata: { tags: [] }
    },
    fields: {
      title: 'Sunset at Sea',
      image: {
        fields: {
          file: {
            url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
          }
        }
      }
    }
  },
  {
    sys: { 
      id: '2', 
      type: 'Entry',
      contentType: { 
        sys: { 
          type: 'Link',
          linkType: 'ContentType',
          id: 'gallery' 
        } 
      },
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'placeholder'
        }
      },
      environment: {
        sys: {
          type: 'Link',
          linkType: 'Environment',
          id: 'master'
        }
      },
      createdAt: '2024-01-15T00:00:00.000Z',
      updatedAt: '2024-01-15T00:00:00.000Z',
      revision: 1,
      locale: 'en-US',
      metadata: { tags: [] }
    },
    fields: {
      title: 'Island Life',
      image: {
        fields: {
          file: {
            url: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
          }
        }
      }
    }
  }
];