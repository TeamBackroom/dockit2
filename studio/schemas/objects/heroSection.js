export default {
  title: 'Hero Section',
  name: 'heroSection',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Feature',
      name: 'feature',
      type: 'reference',
      to: [{ type: 'feature' }],
    },
    {
      title: 'Call-To-Action',
      name: 'cta',
      type: 'reference',
      to: [{ type: 'cta' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
