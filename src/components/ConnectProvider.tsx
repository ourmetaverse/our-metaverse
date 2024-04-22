import {
  EthersWeb3ConfigProvider,
  MetaMask,
  OkxWallet,
  TokenPocket,
} from '@ant-design/web3-ethers/legacy-v5';

import { primaryColor } from '@/utils/css';
import { ConfigProvider } from 'antd';

const walletConnectProjectId = '163d82f84c2f17748a8eb28340497988';

const CommonLayout: React.FC = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColor,
        },
        components: {
          Menu: {
            darkItemSelectedBg: 'transparent',
          },
          Modal: {
            contentBg: '#0C1742',
          },
        },
      }}
    >
      <EthersWeb3ConfigProvider
        walletConnect={{ projectId: walletConnectProjectId }}
        wallets={[MetaMask(), TokenPocket(), OkxWallet()]}
        eip6963={{
          autoAddInjectedWallets: true,
        }}
        ens
      >
        {children}
      </EthersWeb3ConfigProvider>
    </ConfigProvider>
  );
};

export default CommonLayout;
