
import { builder, Builder } from '@builder.io/react';

// Initialize with your API key
export const initBuilder = () => {
  builder.init('df576bc7e8a34227af099a4761da6b74');
};

// Define content models
export const BUILDER_MODELS = {
  PAGE: 'page',
  BLOG: 'blog-post',
  RESOURCE: 'resource',
};
