import { Alert } from 'antd';
import { useIntl } from 'umi';

export default () => {
  const { formatMessage } = useIntl();
  return (
    <Alert
      type="warning"
      message={formatMessage({
        id: 'translate_tip',
      })}
    />
  );
};
