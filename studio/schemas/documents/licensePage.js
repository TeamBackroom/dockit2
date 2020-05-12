export default {
  name: 'licensePage',
  type: 'document',
  title: 'License Page',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      options: { collapsible: true, collapsed: true },
    },
  ],
};
