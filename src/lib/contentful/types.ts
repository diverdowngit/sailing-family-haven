import { Document } from '@contentful/rich-text-types';
import type { Entry, Asset, EntrySkeletonType } from 'contentful';

export interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: 'blog'
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    content: Document;
    publishDate: string;
    featuredImage: Asset;
  }
}

export interface GalleryImageSkeleton extends EntrySkeletonType {
  contentTypeId: 'galleryImage'
  fields: {
    title: string;
    image: Asset;
  }
}

export type BlogPost = Entry<BlogPostSkeleton['fields']>;
export type GalleryImage = Entry<GalleryImageSkeleton['fields']>;