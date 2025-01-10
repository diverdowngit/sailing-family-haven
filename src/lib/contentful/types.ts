import { Document } from '@contentful/rich-text-types';
import type { Asset, Entry } from 'contentful';

export interface BlogPostFields {
  title: string;
  slug: string;
  excerpt: string;
  content: Document;
  publishDate: string;
  featuredImage: Asset;
}

export interface GalleryImageFields {
  title: string;
  image: Asset;
}

export interface BlogPost extends Entry<BlogPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
  };
  fields: BlogPostFields;
}

export interface GalleryImage extends Entry<GalleryImageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
  };
  fields: GalleryImageFields;
}