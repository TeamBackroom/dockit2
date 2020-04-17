export default {
  name: 'pricingPage',
  type: 'document',
  title: 'Pricing Page',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Hero Section',
      name: 'heroSimple',
      type: 'heroSimple',
    },
    {
      title: 'Plans Title',
      name: 'plansTitle',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Plans',
      name: 'plans',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'plan' }] }],
      validation: Rule => Rule.unique(),
    },
    {
      title: 'Statement',
      name: 'statement',
      type: 'reference',
      to: [{ type: 'statement' }],
    },
    {
      title: 'Features List',
      name: 'features',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'feature' }] }],
      validation: Rule => Rule.unique(),
    },
    {
      title: 'Form Section',
      name: 'formSection',
      type: 'formSection',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      options: { collapsible: true, collapsed: true },
    },
  ],
};
