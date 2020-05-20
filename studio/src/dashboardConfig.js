export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: process.env.SANITY_STUDIO_NETLIFY_BUILD_HOOK_ID,
                  title: 'Content Management Studio',
                  name: process.env.SANITY_STUDIO_NETLIFY_STUDIO_SITE_NAME,
                  apiId: process.env.SANITY_STUDIO_NETLIFY_API_ID,
                },
                {
                  buildHookId: process.env.SANITY_STUDIO_NETLIFY_WEB_BUILD_HOOK_ID,
                  title: 'Website',
                  name: process.env.SANITY_STUDIO_NETLIFY_WEB_SITE_NAME,
                  apiId: process.env.SANITY_STUDIO_NETLIFY_WEB_API_ID,
                },
              ],
            },
          },
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vassilis/dockit2',
            category: 'Code',
          },
          {
            title: 'Frontend',
            value: 'https://dockit2.netlify.com',
            category: 'apps',
          },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Most Recent Updates',
        order: '_updatedAt desc',
        types: [
          'feature',
          'cta',
          'solution',
          'statement',
          'nav',
          'plan',
          'landingPage',
          'siteSettings',
          'post',
          'category',
          'author',
          'mainImage',
          'authorReference',
          'bodyPortableText',
          'bioPortableText',
          'excerptPortableText',
          'navItem',
          'heroSection',
          'featuresSection',
          'seo',
        ],
      },
      layout: { width: 'medium' },
    },
  ],
};
