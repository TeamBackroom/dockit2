export default {
  name: 'termsPage',
  type: 'document',
  title: 'Terms & Policy Page',
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
      title: 'Terms Title',
      name: 'termsTitle',
      type: 'string',
    },
    {
      title: 'Terms Content',
      name: 'termsContent',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Policy Title',
      name: 'policyTitle',
      type: 'string',
    },
    {
      title: 'Policy Content',
      name: 'policyContent',
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
