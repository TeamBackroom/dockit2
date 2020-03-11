import { format } from 'date-fns';

export default {
  name: 'statement',
  type: 'document',
  title: 'Statement',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      name: 'image',
      type: 'mainImage',
      title: 'Image',
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
