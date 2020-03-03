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
      title: 'Monthly Price',
      name: 'monthlyPrice',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
