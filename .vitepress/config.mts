import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "设计数据密集型应用",
  themeConfig: {
    sidebar: [
      {
        text: '序言',
        link: '/preface',
        items: [
          { text: '第一章：可靠性、可伸缩性和可维护性', link: '/ch1' },
          { text: '第二章：数据模型与查询语言', link: '/ch2' },
        ]
      },
      {
        text: '第一部分：数据系统基础',
        link: '/part-i',
        items: [
          { text: '第一章：可靠性、可伸缩性和可维护性', link: '/ch1' },
          { text: '第二章：数据模型与查询语言', link: '/ch2' },
          { text: '第三章：存储与检索', link: '/ch3' },
          { text: '第四章：编码与演化', link: '/ch4' },
        ]
      },
      {
        text: '第二部分：分布式数据',
        link: '/part-ii',
        items: [
          { text: '第五章：复制', link: '/ch5' },
          { text: '第六章：分区', link: '/ch6' },
          { text: '第七章：事务', link: '/ch7' },
          { text: '第八章：分布式系统的麻烦', link: '/ch8' },
          { text: '第九章：一致性与共识', link: '/ch9' },
        ]
      },
      {
        text: '第三部分：衍生数据',
        link: '/part-iii',
        items: [
          { text: '第十章：批处理', link: '/ch10' },
          { text: '第十一章：流处理', link: '/ch11' },
          { text: '第十二章：数据系统的未来', link: '/ch12' },
        ]
      },
      {
        text: '术语表',
        link: '/glossary'
      },
      {
        text: '后记',
        link: '/colophon'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  ignoreDeadLinks: true,
})
