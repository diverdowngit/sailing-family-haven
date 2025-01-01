import { createClient } from 'contentful';

// Replace these with your actual Contentful credentials
const spaceId = 'your-space-id';
const accessToken = 'your-access-token';

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});