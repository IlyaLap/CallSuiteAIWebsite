
import { createClient } from 'tinacms';

// This client is used for querying data from TinaCMS
export const tinaClient = createClient({
  apiURL: import.meta.env.VITE_TINA_CLIENT_URL || 'http://localhost:4001/graphql',
  tokenBrowser: import.meta.env.VITE_TINA_TOKEN || '',
});

// Example query function
export async function fetchPageData(relativePath: string) {
  const variables = { relativePath };
  const response = await tinaClient.request({
    query: `
      query PageQuery($relativePath: String!) {
        page(relativePath: $relativePath) {
          body
          title
        }
      }
    `,
    variables
  });
  return response;
}

// Example blog post query function
export async function fetchPostData(relativePath: string) {
  const variables = { relativePath };
  const response = await tinaClient.request({
    query: `
      query PostQuery($relativePath: String!) {
        post(relativePath: $relativePath) {
          title
          date
          excerpt
          featuredImage
          body
        }
      }
    `,
    variables
  });
  return response;
}

// Example query for all blog posts
export async function fetchAllPosts() {
  const response = await tinaClient.request({
    query: `
      query PostsQuery {
        postConnection {
          edges {
            node {
              title
              date
              excerpt
              featuredImage
              _sys {
                filename
                basename
                relativePath
              }
            }
          }
        }
      }
    `,
  });
  return response;
}

// Example query for site settings
export async function fetchSiteSettings(relativePath: string = 'site.json') {
  const variables = { relativePath };
  const response = await tinaClient.request({
    query: `
      query SettingsQuery($relativePath: String!) {
        settings(relativePath: $relativePath) {
          header {
            siteName
            tagline
            logo
          }
          footer {
            copyrightText
            socialLinks {
              platform
              url
            }
          }
        }
      }
    `,
    variables
  });
  return response;
}
