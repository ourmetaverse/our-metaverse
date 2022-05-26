import { configResponsive } from 'ahooks';

configResponsive({
  isMobile: 0,
  pc: 767,
});

setTimeout(() => {
  if (console.clear) {
    console.clear();
  }
  console.log(
    '🪐 VmlldyB0aGUgSFRNTCBzb3VyY2UgY29kZSBmb3IgZmluZCBuZXh0IGNsdWU=',
  );
}, 1000);
