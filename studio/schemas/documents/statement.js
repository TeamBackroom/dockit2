import { format } from 'date-fns';

export default {
  name: 'statement',
  type: 'document',
  title: 'Statement',
  fields: [
    {
      name: 'title',
      type: 'text',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'The statement can include a price (in dollars). Optional.',
    },
    {
      title: 'Call-To-Action',
      name: 'cta',
      type: 'reference',
      to: [{ type: 'cta' }],
      description: 'The statement can include a CTA. Optional.',
    },
    {
      title: 'Style',
      name: 'style',
      type: 'string',
      options: {
        list: [
          { title: 'Simple', value: 'simple' },
          { title: 'Box 1', value: 'box1' },
          { title: 'Box 2', value: 'box2' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
