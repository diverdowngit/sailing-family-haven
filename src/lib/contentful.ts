import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: 'placeholder',
  accessToken: 'placeholder',
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
    content: any;
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