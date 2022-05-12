export const padWidth = '1024px';

// mainnet
let addr = '0xEcd0D12E21805803f70de03B72B1C162dB0898d9';

if (CHAIN_ID === 'local') {
  addr = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // 替换为你本地通过 hardhat 部署的地址
} else if (CHAIN_ID === 'rinkeby') {
  addr = '0x07b64a8F929A154d95Cc3c0cAa550E475f87BAf6';
}

export const contractAddress = addr;

export const totalSupply = 3000;

export const commonPrice = 0.01;

export const maxMintPerAddr = 10;

export const gweiPerETH: number = 10 ** 18;

export const grantPrice = 0.3;

export const bookGrantPrice = 3;

export const movieGrantPrice = 30;

export const grantLimitLength = 128;

export const bookPrice = 30;

export const moviePrice = 600;

export const infuraId = 'e48a5a10953840999e806ce8a8a151ab';

export const contentHash =
  'C73F914CBFD8E9BF6CF3FE3E9A3488E1524CC777779035E01975778BAD1D971C';

export const wechatLink = 'https://our-metaverse.xyz/404/assets/wechat.png';

export const roles = [
  {
    name: '彼得',
    img: '/peter.png',
    desc: '一个原俄罗斯人的名字，鲁莽的革命军人。',
  },
  {
    name: '汪强',
    img: '/wangqiang.png',
    desc: '冷静做事果断的革命军人。',
  },
  {
    name: '首领',
    img: '/leader.png',
    desc: '年迈的革命军女领导者，一个有故事的古代人。',
  },
  {
    name: '玄武',
    img: '/xuanwu.png',
    desc: '玄武在“真实世界”元宇宙中是一名飞船修理师，在工作中邂逅了神秘的发卡女孩。他们之间发生了什么故事呢？',
  },
  {
    name: '发卡女孩',
    img: '/girl.png',
    desc: '发卡女孩在创世小说中出场并不多，但是无疑她是小说的女主。温柔羞涩，十七八岁的少女。她是否是幕后大佬的千金？她和玄武之间又有什么关联？',
  },
  {
    name: '弘',
    img: '/hiro.png',
    desc: '一个喜欢把弄武士刀的搞笑胖子',
  },
  {
    name: '阿丽塔',
    img: '/alita.png',
    desc: '一个喜欢东亚文化的西方人，灵动的妹纸。',
  },
];
