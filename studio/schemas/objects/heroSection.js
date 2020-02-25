export default {
  title: 'Hero Section',
  name: 'heroSection',
  type: 'object',
  fields: [
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
