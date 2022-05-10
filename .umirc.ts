import { defineConfig } from 'umi';
import { primaryColor } from './src/utils/css';

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
    'primary-color': primaryColor,
    'menu-dark-item-active-bg': 'transparent',
  },
  define: {
    CHAIN_ID: process.env.CHAIN_ID,
  },
  styles: [
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
  ],
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
