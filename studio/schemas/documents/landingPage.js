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
      title: 'Hero Section',
      name: 'heroSection',
      type: 'heroSection',
    },
    {
      title: 'Features Section',
      name: 'featuresSection',
      type: 'featuresSection',
    },
    {
      title: 'Solutions Section',
      name: 'solutions',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'solution' }] }],
      validation: Rule => Rule.unique(),
    },
    {
      title: 'Pricing Section',
      name: 'pricing',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'plan' }] }],
      validation: Rule => Rule.unique(),
    },
    {
      title: 'Statements Section',
      name: 'statements',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'statement' }] }],
      validation: Rule => Rule.unique(),
    },
    {
      name: 'screenshot',
      title: 'Screenshot',
      type: 'mainImage',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      options: { collapsible: true, collapsed: true },
    },
  ],
};
