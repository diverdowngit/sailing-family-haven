import { Document } from '@contentful/rich-text-types';
import type { Asset, Entry, EntrySkeletonType } from 'contentful';

interface BlogPostFields {
  title: string;
  slug: string;
  excerpt: string;
  content: Document;
  publishDate: string;
  featuredImage: Asset;
}

interface GalleryImageFields {
  title: string;
  image: Asset;
}

export interface BlogPost extends Entry<BlogPostFields> {
  contentTypeId: 'blogPost';
  fields: BlogPostFields;
}

export interface GalleryImage extends Entry<GalleryImageFields> {
  contentTypeId: 'galleryImage';
  fields: GalleryImageFields;
}