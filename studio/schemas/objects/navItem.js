export default {
  name: 'navItem',
  type: 'object',
  title: 'Nav Item',
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    { title: 'URL', name: 'url', type: 'url' },
    { title: 'Open in New Tab', name: 'newTab', type: 'boolean' },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
    },
  },
};
