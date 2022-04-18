import enwhitepaper from '@/docs/en/whitepaper.md';
import whitepaper from '@/docs/whitepaper.md';
import Markdown from '@/components/Markdown';

export default () => {
  return (
    <div>
      <Markdown zh={whitepaper} en={enwhitepaper} aiTip />
    </div>
  );
};
