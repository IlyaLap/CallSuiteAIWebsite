
export default {
  name: 'feature',
  title: 'Features',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon Name (Lucide)',
      type: 'string',
      description: 'Name of Lucide icon to use',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
