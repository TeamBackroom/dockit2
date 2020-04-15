import { format } from 'date-fns';

export default {
  title: 'Feature',
  name: 'feature',
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
      type: 'text',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'mainImage',
    },
  ],
};
