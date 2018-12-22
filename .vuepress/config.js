module.exports = {
    title: 'zippo‘s blog',
    description:'前端程序员',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Archives', link: '/Archives/' },
        { text: 'docs', link: '/docs/' },
        { text: 'github', link: 'https://github.com/zhangZippo' },
      ],
      sidebar: {
        '/docs/':[
          '',
          ['page-a','adasdadasd'],
          ['page-b', 'Explicit link text']
        ],
      }
    },
  }
  