import { format } from 'date-fns';

export default {
  title: 'Subscription Plan',
  name: 'plan',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required(),
    },
    {
      title: 'SubTitle',
      name: 'subtitle',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Annual Price',
      name: 'annualPrice',
      type: 'number',
    },
    {
      title: 'Annual Price Description',
      name: 'annualPriceDescription',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Monthly Price Description',
      name: 'monthlyPriceDescription',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Coming Soon',
      name: 'comingSoon',
      type: 'boolean',
    },
    {
      title: 'Coming Soon Text',
      name: 'comingSoonText',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
