import MintBanner from '@/components/MintBanner';
import { mobile } from '@/utils/css';
import { css } from '@emotion/css';

export default () => {
  return (
    <div
      className={css`
        text-align: center;
        min-height: 600px;
        padding-top: 120px;
        padding-bottom: 80px;
        background: linear-gradient(to bottom, #000000, #112a94 30%, #1a41e4);
      `}
    >
      <div
        className={css`
          max-width: 1072px;
          margin: 0 auto;
          background: rgba(0, 0, 0, 50%);
          border-radius: 10px;
          padding: 57px 116px 47px 116px;
          margin-top: 32px;
          ${mobile} {
            margin: 16px;
          }
        `}
      >
        <MintBanner />
      </div>
    </div>
  );
};
