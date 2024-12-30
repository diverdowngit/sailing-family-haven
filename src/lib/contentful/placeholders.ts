import type { BlogPost, GalleryImage } from './types';

const createBaseSys = (id: string, contentTypeId: string) => ({
  id,
  type: 'Entry',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  locale: 'en-US',
  revision: 1,
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
  contentType: {
    sys: {
      type: 'Link',
      linkType: 'ContentType',
      id: contentTypeId,
    },
  },
});

export const placeholderBlogPosts: BlogPost[] = [
  {
    sys: {
      ...createBaseSys('1', 'blog'),
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
      revision: 1,
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
    },
    metadata: { tags: [] }
  },
  {
    sys: {
      ...createBaseSys('2', 'blog'),
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
      revision: 1,
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
    },
    metadata: { tags: [] }
  }
];

export const placeholderGalleryImages: GalleryImage[] = [
  {
    sys: createBaseSys('1', 'galleryImage'),
    fields: {
      title: 'Sunset at Sea',
      image: {
        fields: {
          file: {
            url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
          }
        }
      }
    },
    metadata: { tags: [] }
  },
  {
    sys: createBaseSys('2', 'galleryImage'),
    fields: {
      title: 'Island Life',
      image: {
        fields: {
          file: {
            url: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
          }
        }
      }
    },
    metadata: { tags: [] }
  }
];
