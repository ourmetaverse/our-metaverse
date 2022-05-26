import { Button, Popconfirm } from 'antd';
import { useModel, useIntl } from 'umi';
import { formatAddress } from '@/utils/format';
import IndexBtn from '@/components/IndexBtn';
import React from 'react';

interface Props {
  style?: React.CSSProperties;
  size?: 'small';
}

const ConnectWallet: React.FC<Props> = ({ style, size }) => {
  const { address, loading, connect, disconnect } = useModel('user');
  const { formatMessage } = useIntl();
  if (address && !loading) {
    return (
      <div style={{ position: 'relative' }}>
        <Popconfirm
          title={formatMessage({
            id: 'disconnect_confirm',
          })}
          onConfirm={async () => {
            await disconnect();
          }}
        >
          <Button title={address} color="blue" shape="round">
            {formatAddress(address)}
          </Button>
        </Popconfirm>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', ...style }}>
      <IndexBtn
        height={size === 'small' ? '40px' : '52px'}
        fontSize={size === 'small' ? '16px' : '20px'}
        size={size}
        onClick={connect}
      >
        {loading
          ? formatMessage({
              id: 'connecting',
            })
          : formatMessage({
              id: 'connect_wallet',
            })}
      </IndexBtn>
    </div>
  );
};

export default ConnectWallet;
