
import { createClient } from 'tinacms';

// This client is used for querying data from TinaCMS
export const tinaClient = createClient({
  apiUrl: import.meta.env.VITE_TINA_CLIENT_URL || 'http://localhost:4001/graphql',
  // We need to use the correct property for authentication based on the TinaCMS API
  clientId: import.meta.env.VITE_TINA_CLIENT_ID || '',
  tinaGraphQLVersion: 'v1', // Adding the required tinaGraphQLVersion property
});

// Example query function
export async function fetchPageData(relativePath: string) {
  const variables = { relativePath };
  return await tinaClient.request(
    `
      query PageQuery($relativePath: String!) {
        page(relativePath: $relativePath) {
          body
          title
        }
      }
    `,
    { variables }
  );
}

// Example blog post query function
export async function fetchPostData(relativePath: string) {
  const variables = { relativePath };
  return await tinaClient.request(
    `
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
    { variables }
  );
}

// Example query for all blog posts
export async function fetchAllPosts() {
  return await tinaClient.request(
    `
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
    { variables: {} } // Empty variables object wrapped in the expected format
  );
}

// Example query for site settings
export async function fetchSiteSettings(relativePath: string = 'site.json') {
  const variables = { relativePath };
  return await tinaClient.request(
    `
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
    { variables }
  );
}
