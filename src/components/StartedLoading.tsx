import { Spin } from 'antd';
import { useIntl } from 'umi';

const StartLoading = ({ started }: { started?: boolean }) => {
  const { formatMessage } = useIntl();
  if (started === undefined) {
    return (
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Spin />
      </div>
    );
  } else {
    return <div>{formatMessage({ id: 'not_started' })}</div>;
  }
};

export default StartLoading;
