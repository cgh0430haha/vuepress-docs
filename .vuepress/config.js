module.exports = {
  title: 'VuePress-NetlifyCMS',
  description: 'A VuePress Site Deployed on Netlify.com by Demo Macro',
  dest: 'pages',
  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Projects',
        items: [
          { text: 'URLStack', link: 'https://abc.imst.xyz' },
          { text: 'Hexo-NetlifyCMS', link: 'https://hexocms.imst.xyz' },
          { text: 'Gitbook-NetlifyCMS', link: 'https://gitbook.imst.xyz' }
        ]
      },
      { text: 'About', link: 'about.md' },
      { text: 'Admin', link: 'https://vuepress.imst.xyz/admin/' }
    ],

    sidebar: 'auto',
    sidebar: [
      ['/', 'Home'],
      ['docs/', 'Documents']
    ],

    displayAllHeaders: true, // 
    activeHeaderLinks: true, // 
    lastUpdated: 'Last Updated', // string | boolean

    serviceWorker: {
      updatePopup: true // Boolean | Object,  undefined.
      //  true, : 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
    },


    repo: 'DemoMacro/VuePress-NetlifyCMS',

    // "GitHub"/"GitLab"/"Bitbucket"   "Source"。
    repoLabel: 'Github',

    // 

    // docsRepo: 'DemoMacro/VueCMS',
    // docsDir: 'docs',
    docsBranch: 'master',

    editLinks: true,
    //  "Edit this page"
    editLinkText: 'by ghchoi'
  }
}
