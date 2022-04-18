import { Button, Popconfirm } from 'antd';
import { useModel, useIntl } from 'umi';
import { formatAddress } from '@/utils/format';

function ConnectWallet() {
  const { address, loading, connect, disconnect } = useModel('user');
  const { formatMessage } = useIntl();
  if (address && !loading) {
    return (
      <Popconfirm title={formatMessage({
        id: 'disconnect_confirm'
      })} onConfirm={async () => {
        await disconnect();
      }}>
        <Button
          title={address}
          color="blue"
          shape="round"
        >
          {formatAddress(address)}</Button>
      </Popconfirm>
    );
  }

  return (
    <div style={{ position: 'relative' }}>
      <Button
        color="blue"
        shape="round"
        type="primary"
        onClick={connect}
      >
        {loading ? formatMessage({
          id: 'connecting'
        }) : formatMessage({
          id: 'connect_wallet'
        })}
      </Button>
    </div>
  );
}

export default ConnectWallet;
