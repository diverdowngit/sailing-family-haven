import { createClient } from 'contentful';

const spaceId = localStorage.getItem('CONTENTFUL_SPACE_ID') || 'placeholder';
const accessToken = localStorage.getItem('CONTENTFUL_ACCESS_TOKEN') || 'placeholder';

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});