
import { createClient } from "tinacms/dist/client";

// Initialize Tina client with correct parameters
export const tinaClient = createClient({
  url: import.meta.env.VITE_TINA_CLIENT_URL || "",
  token: import.meta.env.VITE_TINA_TOKEN || "",
});

// Function to fetch page data
export const fetchPageData = async (relativePath: string) => {
  try {
    const result = await tinaClient.request({
      query: `
        query PageQuery($relativePath: String!) {
          page(relativePath: $relativePath) {
            title
            body
          }
        }
      `,
      variables: { relativePath }
    });
    
    return result;
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
};

// Function to fetch blog post data
export const fetchPostData = async (relativePath: string) => {
  try {
    const result = await tinaClient.request({
      query: `
        query PostQuery($relativePath: String!) {
          post(relativePath: $relativePath) {
            title
            date
            author
            body
          }
        }
      `,
      variables: { relativePath }
    });
    
    return result;
  } catch (error) {
    console.error("Error fetching post data:", error);
    throw error;
  }
};

// Function to fetch all blog posts
export const fetchAllPosts = async () => {
  try {
    const result = await tinaClient.request({
      query: `
        query AllPostsQuery {
          postConnection {
            edges {
              node {
                title
                date
                author
                _sys {
                  filename
                }
              }
            }
          }
        }
      `,
      variables: {}
    });
    
    return result;
  } catch (error) {
    console.error("Error fetching all posts:", error);
    throw error;
  }
};

// Function to fetch blog post data by slug
export const fetchPostBySlug = async (relativePath: string) => {
  try {
    const result = await tinaClient.request({
      query: `
        query PostBySlugQuery($relativePath: String!) {
          post(relativePath: $relativePath) {
            title
            date
            author
            body
          }
        }
      `,
      variables: { relativePath }
    });
    
    return result;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    throw error;
  }
};
