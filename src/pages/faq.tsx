import faq from '@/docs/faq.md';
import enfaq from '@/docs/en/faq.md';
import Markdown from '@/components/Markdown';

export default () => {
  return (
    <div>
      <Markdown zh={faq} en={enfaq} aiTip></Markdown>
    </div>
  );
};
