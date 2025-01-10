import { Asset, Entry, EntryFields } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface BlogPostFields {
  title: EntryFields.Text;
  slug: EntryFields.Text;
  excerpt: EntryFields.Text;
  content: Document;
  publishDate: EntryFields.Date;
  featuredImage: Asset;
}

export interface GalleryImageFields {
  title: EntryFields.Text;
  image: Asset;
}

export type BlogPost = Entry<BlogPostFields>;
export type GalleryImage = Entry<GalleryImageFields>;