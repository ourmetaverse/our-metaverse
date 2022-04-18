import { useEffect, useState } from 'react';

import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { contractAddress, infuraId } from '@/constants';
import contractABI from '@/abi/OurMetaverse.json';
import ConnectTip from '@/components/ConnectTip';
import { message } from 'antd';

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId,
    },
  },
};

let web3ModelInstance: Web3Modal;
if (typeof window !== 'undefined') {
  web3ModelInstance = new Web3Modal({
    network: CHAIN_ID || 'mainnet',
    cacheProvider: true,
    providerOptions,
  });
}

async function connectWallet() {
  const instance = await web3ModelInstance.connect();
  // https://docs.ethers.io/v5/api/providers/
  const provider = new ethers.providers.Web3Provider(instance);
  const { chainId } = await provider.getNetwork();
  if (chainId !== 1 && CHAIN_ID === 'mainnet') {
    throw new Error('请切换到主网 (Ethereum Mainnet)');
  }
  // https://docs.ethers.io/v5/api/signer/
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    contractAddress,
    contractABI.abi,
    provider,
  );
  return { provider, signer, web3Instance: instance, contract };
}

export default function useUser() {
  const [address, setAddress] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner>();
  const [contract, setContract] = useState<ethers.Contract>();
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [contractWithSigner, setContractWithSigner] =
    useState<ethers.Contract>();

  const disconnect = async () => {
    setAddress(undefined);
    setSigner(undefined);
    setContract(undefined);
    await web3ModelInstance.clearCachedProvider();
    sessionStorage.setItem('connected', 'false');
  };

  const connect = async () => {
    setLoading(true);
    try {
      const { signer, web3Instance, contract, provider } =
        await connectWallet();
      const contractWithSigner = contract.connect(signer);
      setSigner(signer);
      setContract(contract);
      setProvider(provider);
      setContractWithSigner(contractWithSigner);

      const address = await signer?.getAddress();
      setAddress(address);
      web3Instance.on('accountsChanged', async (accounts: string[]) => {
        if (accounts.length === 0) {
          await disconnect();
          setAddress(undefined);
        } else {
          const address = accounts[0];
          setAddress(address);
        }
      });
    } catch (err: any) {
      await disconnect();
      setAddress(undefined);
      message.error(err.data?.message || err.message || 'unknown error');
    }
    setLoading(false);
    sessionStorage.setItem('connected', 'true');
  };

  useEffect(() => {
    if (sessionStorage.getItem('connected') === 'true') {
      connect();
    }
  }, []);

  return {
    address,
    loading,
    connect,
    signer,
    contract,
    disconnect,
    provider,
    contractWithSigner,
    ConnectTip,
  };
}
