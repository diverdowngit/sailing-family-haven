import { Document } from '@contentful/rich-text-types';
import type { Entry, EntryFields } from 'contentful';

export interface BlogPostFields {
  title: EntryFields.Text;
  slug: EntryFields.Text;
  excerpt: EntryFields.Text;
  content: Document;
  publishDate: EntryFields.Date;
  featuredImage: EntryFields.AssetLink;
}

export interface GalleryImageFields {
  title: EntryFields.Text;
  image: EntryFields.AssetLink;
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
      }
    }
  };
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
      }
    }
  };
}