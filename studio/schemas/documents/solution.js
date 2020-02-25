import { format } from 'date-fns';

export default {
  name: 'solution',
  type: 'document',
  title: 'Solution',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long.',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
    },
  ],
};
