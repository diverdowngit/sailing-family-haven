import { Asset, Entry, EntryFields } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface BlogPostFields {
  title: string;
  slug: string;
  excerpt: string;
  content: Document;
  publishDate: string;
  featuredImage?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

export interface GalleryImageFields {
  title: string;
  image?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

export type BlogPost = Entry<BlogPostFields>;
export type GalleryImage = Entry<GalleryImageFields>;