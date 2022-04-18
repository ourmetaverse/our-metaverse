import { Alert } from 'antd';
import ReactMarkdown from 'react-markdown';
import { useIntl } from 'umi';
import TranslateTip from '@/components/TranslateTip';

interface Props {
  zh: string;
  aiTip?: boolean;
  en?: string;
}

export default ({ zh, en, aiTip }: Props) => {
  const { locale, formatMessage } = useIntl();
  const isZH = locale === 'zh-CN';
  return (
    <div>
      {!en ? (
        <>
          <TranslateTip />
          <br />
        </>
      ) : null}
      <ReactMarkdown>{(isZH ? zh : en) || zh}</ReactMarkdown>
      {aiTip && en && !isZH ? (
        <>
          <Alert
            type="warning"
            message={formatMessage({ id: 'ai_translate_tip' })}
          />
        </>
      ) : null}
    </div>
  );
};
