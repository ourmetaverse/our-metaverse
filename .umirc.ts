import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  locale: {},
  antd: {
    dark: true, // 开启暗色主题
  },
  theme: {
    'primary-color': '#1443FF',
    'menu-dark-item-active-bg': 'transparent',
  },
  define: {
    CHAIN_ID: process.env.CHAIN_ID,
  },
  exportStatic: {},
  favicon: '/favicon.png',
  metas: [
    {
      name: 'description',
      content: 'A DAO for OurMetaverse IP',
    },
    {
      name: 'keywords',
      content: 'OurMetaverse, NFT, DAO, OurMetaverseDAO',
    },
  ],
  title: 'OurMetaverse',
});
