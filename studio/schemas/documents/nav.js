import { format } from 'date-fns';

export default {
  name: 'nav',
  type: 'document',
  title: 'Nav',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'footerNav',
      type: 'array',
      title: 'Footer Nav',
      of: [
        {
          type: 'object',
          fields: [
            { title: 'Title', name: 'title', type: 'string' },
            { title: 'URL', name: 'url', type: 'url' },
            { title: 'Open in New Tab', name: 'newTab', type: 'boolean' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {},
    prepare(selection) {
      return {
        title: 'Nav',
      };
    },
  },
};
