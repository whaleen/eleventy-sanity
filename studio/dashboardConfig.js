export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5e55fe898c582ee57cb4619a',
                  title: 'Sanity Studio',
                  name: 'eleventy-sanity-studio',
                  apiId: 'cfc9212a-0800-4bfa-b44c-f4886df6cc8a'
                },
                {
                  buildHookId: '5e55fe891036fd80fd975124',
                  title: 'Blog Website',
                  name: 'eleventy-sanity',
                  apiId: '97556dd6-367c-4cda-8524-673ceedf38b7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/whaleen/eleventy-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://eleventy-sanity.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
