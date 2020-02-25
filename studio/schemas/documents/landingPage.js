export default {
  name: 'landingPage',
  type: 'document',
  title: 'Landing Page',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
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
    },
    {
      title: 'Features Section',
      name: 'featuresSection',
      type: 'object',
      fields: [
        {
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
    },
    {
      name: 'SEO',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: 'description',
          type: 'text',
          title: 'Description',
          description: 'Describe the page for search engines and social media.',
        },
        {
          name: 'keywords',
          type: 'array',
          title: 'Keywords',
          description: 'Add keywords that describes the page.',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags',
          },
        },
        {
          name: 'author',
          type: 'reference',
          description: 'Publish an author and set a reference to them here.',
          title: 'Author',
          to: [{ type: 'author' }],
        },
      ],
    },
  ],
};
