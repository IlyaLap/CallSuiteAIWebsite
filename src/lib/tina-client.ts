
import { createClient } from 'tinacms';
import { queries } from '../../tina/__generated__/types';

// This client is used for querying data from TinaCMS
export const tinaClient = createClient({
  url: import.meta.env.VITE_TINA_CLIENT_URL || 'http://localhost:4001/graphql',
  token: import.meta.env.VITE_TINA_TOKEN || '',
  queries,
});

// Example query function
export async function fetchPageData(relativePath: string) {
  const variables = { relativePath };
  const data = await tinaClient.queries.page({ variables });
  return data;
}

// Example blog post query function
export async function fetchPostData(relativePath: string) {
  const variables = { relativePath };
  const data = await tinaClient.queries.post({ variables });
  return data;
}

// Example query for all blog posts
export async function fetchAllPosts() {
  const data = await tinaClient.queries.postConnection();
  return data;
}

// Example query for site settings
export async function fetchSiteSettings(relativePath: string = 'site.json') {
  const variables = { relativePath };
  const data = await tinaClient.queries.settings({ variables });
  return data;
}
