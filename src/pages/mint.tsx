import MintBanner from '@/components/MintBanner';
import { maxWidth } from '@/utils/css';
import { css } from '@emotion/css';

export default () => {
  return (
    <div
      className={css`
        max-width: ${maxWidth};
        margin: 200px auto;
        text-align: center;
      `}
    >
      <MintBanner />
    </div>
  );
};
