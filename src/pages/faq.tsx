import faq from '@/docs/faq.md';
import enfaq from '@/docs/en/faq.md';
import Markdown from '@/components/Markdown';
import { css } from '@emotion/css';
import { maxWidth, navHeight, mobile } from '@/utils/css';

export default () => {
  return (
    <div
      className={css`
        margin: ${navHeight} auto;
        max-width: ${maxWidth};
        padding-top: 16px;
        ${mobile} {
          padding: 16px;
        }
      `}
    >
      <Markdown zh={faq} en={enfaq} aiTip></Markdown>
    </div>
  );
};
