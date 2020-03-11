export default {
  title: 'Form Section',
  name: 'formSection',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Hubspot Form ID',
      name: 'hubspotFormId',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
