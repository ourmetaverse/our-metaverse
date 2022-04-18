import ourmetaverse from '@/docs/our-metaverse.md';
import enourmetaverse from '@/docs/en/our-metaverse.md';
import preface from '@/docs/preface.md';
import enpreface from '@/docs/en/preface.md';
import Markdown from '@/components/Markdown';
import { Divider } from 'antd';

export default () => {
  return (
    <div>
      <Markdown zh={preface} en={enpreface} aiTip></Markdown>
      <Divider />
      <Markdown zh={ourmetaverse} en={enourmetaverse}></Markdown>
    </div>
  );
};
