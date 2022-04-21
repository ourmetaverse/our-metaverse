import ourmetaverse from '@/docs/our-metaverse.md';
import enourmetaverse from '@/docs/en/our-metaverse.md';
import Markdown from '@/components/Markdown';
import { Divider } from 'antd';

export default () => {
  return (
    <div>
      <Markdown zh={ourmetaverse} en={enourmetaverse}></Markdown>
    </div>
  );
};
