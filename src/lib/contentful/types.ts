import { Document } from '@contentful/rich-text-types';
import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';

export interface BlogPostFields extends EntrySkeletonType {
  title: string;
  slug: string;
  excerpt: string;
  content: Document;
  publishDate: string;
  featuredImage: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

export interface GalleryImageFields extends EntrySkeletonType {
  title: string;
  image: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

export interface BlogPost extends Entry<BlogPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    revision: number;
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    environment: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    contentType: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
  };
  metadata: {
    tags: [];
  };
}

export interface GalleryImage extends Entry<GalleryImageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    revision: number;
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    environment: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    contentType: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
  };
  metadata: {
    tags: [];
  };
}