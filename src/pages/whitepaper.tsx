import enwhitepaper from '@/docs/en/whitepaper.md';
import whitepaper from '@/docs/whitepaper.md';
import Markdown from '@/components/Markdown';
import { css } from '@emotion/css';
import { maxWidth, navHeight, mobile } from '@/utils/css';

export default () => {
  return (
    <div
      className={css`
        ${mobile} {
          padding: 16px;
          padding-top: ${navHeight};
        }
        display: flex;
        padding-top: ${navHeight};
        max-width: ${maxWidth};
        flex-direction: row;
        margin: 0 auto;
      `}
    >
      <Markdown zh={whitepaper} en={enwhitepaper} />
    </div>
  );
};
