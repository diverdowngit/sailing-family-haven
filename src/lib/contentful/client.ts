import { createClient } from 'contentful';

const getContentfulClient = () => {
  const spaceId = localStorage.getItem('CONTENTFUL_SPACE_ID');
  const accessToken = localStorage.getItem('CONTENTFUL_ACCESS_TOKEN');

  if (!spaceId || !accessToken) {
    console.warn('Contentful credentials not found');
    return null;
  }

  return createClient({
    space: spaceId,
    accessToken: accessToken,
  });
};

export const contentfulClient = getContentfulClient();