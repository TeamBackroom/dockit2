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
          type: 'navItem',
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
