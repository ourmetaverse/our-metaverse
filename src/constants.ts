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
