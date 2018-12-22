module.exports = {
    // dest: 'zhangZippo.github.io/.vuepress/dist',
    // base:'/',
    title: 'zippo‘s blog',
    description:'前端程序员',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Archives', link: '/Archives/' },
        { text: 'article', link: '/article/' },
        { text: 'github', link: 'https://github.com/zhangZippo' },
      ],
      sidebar: {
        '/article/':[
          '',
          ['page-a','adasdadasd'],
          ['page-b', 'Explicit link text']
        ],
      }
    },
  }
  