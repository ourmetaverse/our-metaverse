import { configResponsive } from 'ahooks';
import { log, clearInit } from '@/utils/log';

configResponsive({
  isMobile: 0,
  pc: 767,
});

setTimeout(() => {
  clearInit();
  log(
    `上一个元宇宙探秘遗留的灰烬 🪐 VmlldyB0aGUgSFRNTCBzb3VyY2UgY29kZSBmb3IgZmluZCBuZXh0IGNsdWU=`,
  );

  log(
    `在上一个元宇宙探秘中，玄武找到了宇宙的终极答案。然而，每个元宇宙都有着不同的终极答案，所以玄武开启了新的一轮探秘。虽然每个元宇宙的答案不一样，但是玄武还是记下了上一次的答案，也许可以派上用场。毕竟，元宇宙虽然不一样，但是它们都诞生自同一个创世宇宙。新的宇宙的奥秘再哪里呢？玄武只能努力思考，也许可以看看这一个元宇宙比上一个元宇宙多了些什么。`,
  );

  log(`玄武开始在宇宙中探索...`);
}, 3000);
