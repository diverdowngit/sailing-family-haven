import { createClient } from 'contentful';

// These will be replaced with actual values from Supabase secrets
const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID || '';
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '';

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});