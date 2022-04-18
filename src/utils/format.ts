import { BigNumber } from 'ethers';

const gweiPer0001ETH = BigNumber.from('10000000000'); // 10 ** 14 = 0.00000001eth;

export function formatAddress(address: string) {
  return `${address.substring(0, 8)}......${address.substring(
    address.length - 8,
  )}`;
}

export function toEth(value: BigNumber) {
  const t = Number(value.div(gweiPer0001ETH));
  if (t <= 0) {
    return 'Less then 0.00000001';
  }
  return t / 100000000;
}
