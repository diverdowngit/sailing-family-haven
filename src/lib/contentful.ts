import { createClient } from 'contentful';
import { Document } from '@contentful/rich-text-types';

const spaceId = localStorage.getItem('CONTENTFUL_SPACE_ID') || 'placeholder';
const accessToken = localStorage.getItem('CONTENTFUL_ACCESS_TOKEN') || 'placeholder';

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export interface BlogPost {
  sys: {
    id: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    content: Document;
    publishDate: string;
    featuredImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

export interface GalleryImage {
  sys: {
    id: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: {
    title: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

// Function to fetch blog posts from Contentful
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await contentfulClient.getEntries<BlogPost>({
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
    const response = await contentfulClient.getEntries<GalleryImage>({
      content_type: 'galleryImage',
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return placeholderGalleryImages;
  }
};

// Placeholder data for development
export const placeholderBlogPosts: BlogPost[] = [
  {
    sys: { id: '1', contentType: { sys: { id: 'blog' } } },
    fields: {
      title: 'Our First Sailing Adventure',
      slug: 'first-sailing-adventure',
      excerpt: 'Join us as we embark on our first family sailing adventure across the Pacific.',
      content: 'Lorem ipsum dolor sit amet...',
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
    sys: { id: '2', contentType: { sys: { id: 'blog' } } },
    fields: {
      title: 'Life at Sea',
      slug: 'life-at-sea',
      excerpt: 'Discovering the joys and challenges of living on a sailboat.',
      content: 'Lorem ipsum dolor sit amet...',
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
    sys: { id: '1', contentType: { sys: { id: 'gallery' } } },
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
    sys: { id: '2', contentType: { sys: { id: 'gallery' } } },
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