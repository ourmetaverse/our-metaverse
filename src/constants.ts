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

export const wechatLink = '/xiaoyuan.png';

export const roles = [
  {
    name: '彼得',
    nameEN: 'Peter',
    img: '/peter.png',
    desc: '一个原俄罗斯人的名字，鲁莽的革命军人。',
    descEN: 'The name of a former Russian, reckless revolutionary soldier.',
  },
  {
    name: '汪强',
    nameEN: 'WangQiang',
    img: '/wangqiang.png',
    desc: '冷静做事果断的革命军人。',
    descEN: 'A calm and decisive revolutionary soldier.',
  },
  {
    name: '首领',
    nameEN: 'Leader',
    img: '/leader.png',
    desc: '年迈的革命军女领导者，一个有故事的古代人。',
    descEN: 'An old-aged leader of the revolution army, a medieval.',
  },
  {
    name: '玄武',
    nameEN: 'XuanWu',
    img: '/xuanwu.png',
    desc: '玄武在“真实世界”元宇宙中是一名飞船修理师，在工作中邂逅了神秘的发卡女孩。他们之间发生了什么故事呢？',
    descEN:
      'Xuanwu is a space ship repairman in the real world, and he met a mysterious girl.',
  },
  {
    name: '发卡女孩',
    nameEN: 'Mysterious Girl',
    img: '/girl.png',
    desc: '发卡女孩在创世小说中出场并不多，但是无疑她是小说的女主。温柔羞涩，十七八岁的少女。她是否是幕后大佬的千金？她和玄武之间又有什么关联？',
    descEN:
      'The Mysterious Girl is not often in the novel, but she is the main character of the novel. She is gentle and shy, and she is seventeen years old. Is she a millionaire?',
  },
  {
    name: '弘',
    nameEN: 'Hiro',
    img: '/hiro.png',
    desc: '一个喜欢把弄武士刀的搞笑胖子',
    descEN: 'A funny fat.',
  },
  {
    name: '阿丽塔',
    nameEN: 'Alita',
    img: '/alita.png',
    desc: '一个喜欢东亚文化的西方人，灵动的妹纸。',
    descEN: 'A westerner who likes Asian culture, a lively.',
  },
];

export const members = [
  {
    name: '愚指导',
    name_en: 'GuiderYu',
    title: '梦想家',
    titke_en: 'Dreamer',
    avatar: '/pfp5.jpg',
    desc: 'Web3 程序员，科幻作家，独立创作者。',
    desc_en: 'Web3 developer, science fiction writer, independent creator.',
  },
  {
    name: '年糕荷',
    name_en: 'NianGaoHe',
    title: '品牌官',
    title_en: 'Brand Manager',
    avatar: '/niangao.jpg',
    desc: '人文艺术内容创作者，杭州野生代言人。',
    desc_en: 'Humanity and art content creator, Hangzhou Wild Bear.',
  },
  {
    name: '柳乘风',
    name_en: 'ChuFengLiu',
    title: '设计师',
    title_en: 'Artist',
    avatar: '/liu.png',
    desc: '靠谱设计师，互联网从业者。',
    desc_en: 'A credible designer, a professional in the Internet.',
  },
  {
    name: 'Koroo',
    name_en: 'Koroo',
    title: '设计师',
    title_en: 'Artist',
    avatar: '/koroo.png',
    desc: 'PFP & Logo 设计师，臭画画的。',
    desc_en: 'PFP & Logo designer, a painter.',
  },
  {
    name: 'Bear',
    name_en: 'Bear',
    title: '气氛组',
    title_en: 'Meme Buidl',
    avatar: '/bear.jpg',
    desc: '福豹 NFT builder，Web3 程序员。',
    desc_en: 'NFT builder, Web3 developer.',
  },
  {
    name: 'Jackson',
    name_en: 'Jackson',
    title: '国际化运营',
    title_en: 'International Manager',
    avatar: '/jackson.png',
    desc: '精通英语，NFT 狂热者，出没于国内外各大社群。',
    desc_en:
      'A fluent English speaker, NFT fanatic, and a member of various communities.',
  },
  {
    name: 'Jessie',
    name_en: 'Jessie',
    title: '社区运营',
    title_en: 'Community Manager',
    avatar: '/jessie.png',
    desc: '某交易所运营，混迹各种社区。',
    desc_en: 'A trader, a member of various communities.',
  },
  {
    name: 'Captain',
    name_en: 'Captain',
    title: '媒体运营',
    title_en: 'Media Manager',
    avatar: '/pfp2.jpg',
    desc: '自媒体人，战略PMO。',
    desc_en: 'A media person, PMO.',
  },
  {
    name: 'Roger Zhu',
    name_en: 'Roger Zhu',
    title: '搞事组',
    title_en: 'Meme Buidl',
    avatar: '/roger.jpg',
    desc: 'Roger Zhu: Founder @ FirstPod.xyz.',
    desc_en: 'Roger Zhu: Founder @ FirstPod.xyz.',
  },
  {
    name: '可可',
    name_en: 'Koko',
    title: '工程师',
    title_en: 'Engineer',
    avatar: '/keke.jpg',
    desc: '某大厂前端开发，定投小能手。',
    desc_en: 'A front-end developer, a supporter of FirstPod.',
  },
  {
    name: 'Panda',
    name_en: 'Panda',
    title: '工程师',
    title_en: 'Engineer',
    avatar: '/panda.png',
    desc: 'WEB 全栈开发，BUILD WEB3。',
    desc_en: 'A full-stack developer, BUILD WEB3.',
  },
  {
    name: '小元',
    name_en: 'XiaoYuan',
    title: '机器人助理',
    title_en: 'Robot Assistant',
    avatar: '/ourm.png',
    desc: '人工智能，服务每一位家人。',
    desc_en: 'Artificial intelligence, a service to every family.',
  },
];
