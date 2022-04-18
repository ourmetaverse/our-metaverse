import { Alert } from 'antd';
import { useIntl } from 'umi'

export default () => {
  const { formatMessage } = useIntl();
  return <Alert type="warning" style={{ textAlign: 'center' }} message={formatMessage({
    id: 'connect_tip'
  })} />;
}
