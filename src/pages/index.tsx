import ourmetaverse from '@/docs/our-metaverse.md';
import enourmetaverse from '@/docs/en/our-metaverse.md';
import preface from '@/docs/preface.md';
import enpreface from '@/docs/en/preface.md';
import Markdown from '@/components/Markdown';
import { Link, useIntl } from 'umi';
import { Divider, Space, Button } from 'antd';

export default () => {
  const { formatMessage } = useIntl();
  return (
    <div>
      <Space wrap style={{ justifyContent: 'center', width: '100%' }}>
        <Button
          target="_blank"
          href={formatMessage({ id: 'read_link' })}
          style={{ width: 200 }}
          size="large"
        >
          {formatMessage({ id: 'read' })}
        </Button>
        <Button
          target="_blank"
          href="https://mirror.xyz/our-metaverse.eth/8HoDHAMojp86tXkaw48Z2Qz6UJAhb0qMyIRrSoBvhpw"
          style={{ width: 200 }}
          size="large"
        >
          {formatMessage({ id: 'erc721m' })}
        </Button>
        <Link to="/mint">
          <Button style={{ width: 200 }} type="primary" size="large">
            {formatMessage({ id: 'mint_now' })}
          </Button>
        </Link>
      </Space>
      <Divider />
      <Markdown zh={preface} en={enpreface}></Markdown>
      <Divider />
      <Markdown zh={ourmetaverse} en={enourmetaverse}></Markdown>
    </div>
  );
};
