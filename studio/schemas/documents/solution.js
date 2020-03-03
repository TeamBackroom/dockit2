import { format } from 'date-fns';

export default {
  title: 'Solution',
  name: 'solution',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Titles should be catchy, descriptive, and not too long.',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Image',
      name: 'image',
      type: 'mainImage',
    },
  ],
};
