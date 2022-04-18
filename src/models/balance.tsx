import { useEffect, useState } from 'react';
import { useModel } from 'umi';
import { BigNumber } from 'ethers';
import { message } from 'antd';
import StartLoading from '@/components/StartedLoading';

export default () => {
  const { contract, provider } = useModel('user');
  const [balance, setBalance] = useState<BigNumber>(BigNumber.from(0));
  const [mintBalance, setMintBalance] = useState<BigNumber>(BigNumber.from(0));
  const [started, setStarted] = useState<boolean>();
  const [availableRewardBalance, setAvailableRewardBalance] =
    useState<BigNumber>(BigNumber.from(0));

  const initBalance = async () => {
    if (!contract || !provider) {
      return;
    }
    provider
      .getBalance(contract.address)
      .then(setBalance)
      .catch((e: any) => {
        message.error(e.data?.message || e.message);
      });
    contract
      .getAvailableRewardBalance()
      .then(setAvailableRewardBalance)
      .catch((e: any) => {
        message.error(e.data?.message || e.message);
      });
    contract
      .getMintBalance()
      .then(setMintBalance)
      .catch((e: any) => {
        message.error(e.data?.message || e.message);
      });
    contract
      .isStarted()
      .then(setStarted)
      .catch((e: any) => {
        message.error(e.data?.message || e.message);
      });
  };

  useEffect(() => {
    initBalance();
  }, [contract, provider]);

  return {
    balance,
    availableRewardBalance,
    mintBalance,
    started,
    StartLoading,
  };
};
