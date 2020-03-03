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
                  buildHookId: '5e53e4d3f91fc6ef766cbdaa',
                  title: 'Needdles | Neos',
                  name: 'needdles-neos-studio',
                  apiId: '004c29a7-acdc-44b0-9090-fc617959842b',
                },
                {
                  buildHookId: '5e53e4d38bfad7e7506095fc',
                  title: 'Needdles | Neos',
                  name: 'needdles-neos-web',
                  apiId: 'dba0cd3e-0d83-4d13-ba6d-d7bb85752bc5',
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
        title: 'Recent blog posts',
        order: '_createdAt desc',
        types: ['post'],
      },
      layout: { width: 'medium' },
    },
  ],
};
