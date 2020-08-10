export default {
  title: 'Testimonials Section',
  name: 'testimonialsSection',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Testimonials',
      name: 'testimonials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
      validation: Rule => Rule.unique(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
