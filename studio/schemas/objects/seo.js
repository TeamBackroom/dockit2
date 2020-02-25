export default {
  title: 'SEO',
  name: 'seo',
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
      type: 'string',
      title: 'Author',
    },
  ],
  preview: {
    select: {
      title: 'description',
    },
  },
};
