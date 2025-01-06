import { Document } from '@contentful/rich-text-types';
import type { Entry, Asset, EntrySkeletonType } from 'contentful';

export interface BlogPostSkeleton {
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

export interface GalleryImageSkeleton {
  contentTypeId: 'galleryImage'
  fields: {
    title: string;
    image: Asset;
  }
}

export type BlogPost = Entry<BlogPostSkeleton>;
export type GalleryImage = Entry<GalleryImageSkeleton>;