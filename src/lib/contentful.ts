import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: 'a6rmvdapyu8w',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN ?? '',
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
    content: any; // Rich text content
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