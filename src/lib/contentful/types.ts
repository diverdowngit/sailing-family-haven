import { Document } from '@contentful/rich-text-types';
import type { Asset, Entry, EntryFields } from 'contentful';

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

export type BlogPost = Entry<BlogPostFields>;
export type GalleryImage = Entry<GalleryImageFields>;