import { createClient } from 'contentful';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  console.warn('Missing Contentful credentials. Using placeholder data instead.');
}

export const contentfulClient = createClient({
  space: spaceId || 'placeholder',
  accessToken: accessToken || 'placeholder',
});