import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  locale: {},
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
