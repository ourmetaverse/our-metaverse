import { Alert, Space } from 'antd';
import { useIntl } from 'umi';
import ConnectWallet from './ConnectWallet';

export default () => {
  const { formatMessage } = useIntl();
  return (
    <Alert
      type="warning"
      style={{ textAlign: 'center' }}
      message={
        <Space>
          {formatMessage({
            id: 'connect_tip',
          })}
          <ConnectWallet />
        </Space>
      }
    />
  );
};
