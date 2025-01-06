import { Document } from '@contentful/rich-text-types';
import type { Entry, Asset, EntrySkeletonType } from 'contentful';

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

export interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: 'blog';
  fields: BlogPostFields;
}

export interface GalleryImageSkeleton extends EntrySkeletonType {
  contentTypeId: 'galleryImage';
  fields: GalleryImageFields;
}

export type BlogPost = Entry<BlogPostFields>;
export type GalleryImage = Entry<GalleryImageFields>;