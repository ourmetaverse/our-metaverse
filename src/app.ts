import { log } from '@/utils/log';

export function onRouteChange({ location }: { location: any }) {
  if (location.pathname === '/') {
    log('玄武继续在元宇宙中探索...');
  }
  if (location.pathname === '/whitepaper') {
    log('“这里记录着这个宇宙运行的规则，在创世的时候就有了。”');
  }
  if (location.pathname === '/microsf') {
    log('“这片空间好像是新出现的，我要好好探索玩玩。”');
  }
  if (location.pathname === '/mint') {
    log(
      '“我们由星辰所铸，那万物是怎么诞生的呢？也许我应该铸造几个试试，连接上这个奇妙的宇宙！”',
    );
  }
  if (location.pathname === '/read') {
    log('“这是创世法典，上一次探秘的奥秘就隐藏在这！”');
  }
  if (location.pathname === '/nfts') {
    log('“真是美妙的画廊啊~”');
  }
  if (location.pathname === '/community') {
    log('“也许我应该多关注下这个世界的声音。”');
  }
  if (location.pathname === '/wormhole') {
    log('“哇！发现了神秘的区域，这是一个虫洞！”');
  }
}
