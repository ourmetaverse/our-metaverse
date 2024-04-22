import { useMemo } from 'react';

import contractABI from '@/abi/OurMetaverse.json';
import ConnectTip from '@/components/ConnectTip';
import { contractAddress } from '@/constants';
import { useAccount } from '@ant-design/web3';
import {
  useEthersProvider,
  useEthersSigner,
} from '@ant-design/web3-ethers/legacy-v5';
import { ethers } from 'ethers';

function getContract(provider: ethers.providers.Web3Provider) {
  const contract = new ethers.Contract(
    contractAddress,
    contractABI.abi,
    provider,
  );
  return contract;
}

export default () => {
  const { account } = useAccount();

  const provider = useEthersProvider(); // ethers provider
  const signer = useEthersSigner();
  const contract = useMemo<ethers.Contract | undefined>(() => {
    if (!account || !provider) {
      return undefined;
    }
    return getContract(provider);
  }, [provider, account]);

  const contractWithSigner = useMemo<ethers.Contract | undefined>(() => {
    if (!contract || !signer) {
      return undefined;
    }
    return contract.connect(signer);
  }, [contract, signer]);

  return {
    address: account?.address,
    signer,
    contract,
    provider,
    contractWithSigner,
    ConnectTip,
  };
};
