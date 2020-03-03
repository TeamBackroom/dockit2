import { format } from 'date-fns';

export default {
  name: 'cta',
  type: 'document',
  title: 'Call-To-Action',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'url',
      type: 'string',
      title: 'URL',
    },
  ],
};
