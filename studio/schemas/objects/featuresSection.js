export default {
  title: 'Features Section',
  name: 'featuresSection',
  type: 'object',
  fields: [
    {
      title: 'Features List',
      name: 'features',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'feature' }] }],
      validation: Rule => Rule.unique(),
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
