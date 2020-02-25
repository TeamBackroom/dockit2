import { format } from 'date-fns';

export default {
  name: 'feature',
  type: 'document',
  title: 'Feature',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Body',
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image',
    },
  ],
};
