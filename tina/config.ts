
import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.TINA_BRANCH || process.env.HEAD || "main",
  clientId: process.env.VITE_TINA_CLIENT_ID || "",
  token: process.env.VITE_TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Page Content",
            isBody: true,
          },
        ],
      },
      {
        name: "post",
        label: "Blog Posts",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Post Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Publication Date",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Post Content",
            isBody: true,
          },
        ],
      },
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "header",
            label: "Header Settings",
            fields: [
              {
                type: "string",
                name: "siteName",
                label: "Site Name",
              },
              {
                type: "string",
                name: "tagline",
                label: "Tagline",
              },
              {
                type: "image",
                name: "logo",
                label: "Logo",
              },
            ],
          },
          {
            type: "object",
            name: "footer",
            label: "Footer Settings",
            fields: [
              {
                type: "string",
                name: "copyrightText",
                label: "Copyright Text",
              },
              {
                type: "object",
                name: "socialLinks",
                label: "Social Links",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.platform };
                  },
                  defaultItem: {
                    platform: "twitter",
                    url: "https://twitter.com",
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "platform",
                    label: "Platform",
                  },
                  {
                    type: "string",
                    name: "url",
                    label: "URL",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
