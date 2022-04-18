import { Steps } from 'antd';
import { useIntl } from 'umi';

const { Step } = Steps;

export default () => {
  const { formatMessage } = useIntl();
  return (
    <div>
      <Steps direction="vertical" current={1}>
        <Step
          title="2022-03"
          description={formatMessage({
            id: 'milestone_start',
          })}
        />
        <Step
          title="2022-04"
          description={formatMessage({
            id: 'milestone_translate',
          })}
        />
        <Step
          title="2022-05"
          description={formatMessage({
            id: 'milestone_jpg',
          })}
        />
        <Step
          title="2022 Q3"
          description={formatMessage({
            id: 'milestone_novel',
          })}
        />
        <Step
          title="2022 Q4"
          description={formatMessage({
            id: 'milestone_more',
          })}
        />
      </Steps>
    </div>
  );
};
