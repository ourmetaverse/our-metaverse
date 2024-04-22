import { defineConfig } from 'umi';

export default defineConfig({
  model: {},
  fastRefresh: true,
  locale: {},
  antd: {
    dark: true, // 开启暗色主题
  },
  alias: {
    'ethers-v5': 'ethers',
  },
  define: {
    CHAIN_ID: process.env.CHAIN_ID,
  },
  styles: [
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
  ],
  exportStatic: {},
  jsMinifierOptions: {
    target: ['chrome80', 'es2020'],
  },
  favicons: ['/favicon.png'],
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
  chainWebpack(config) {
    config.module.rule('asset').exclude.add(/\.md$/).end();

    config.module.rule('md').test(/\.md$/).use('raw').loader('raw-loader');
  },
});
