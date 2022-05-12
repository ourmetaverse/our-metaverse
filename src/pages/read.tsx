import ourmetaverse from '@/docs/our-metaverse.md';
import enourmetaverse from '@/docs/en/our-metaverse.md';
import Markdown from '@/components/Markdown';
import ReadBanner from '@/components/ReadBanner';
import RoleBanner from '@/components/RoleBanner';
import { css } from '@emotion/css';
import { maxWidth, mobile } from '@/utils/css';

export default () => {
  return (
    <div>
      <ReadBanner />
      <RoleBanner />
      <div
        className={css`
          max-width: ${maxWidth};
          margin: 0 auto;
        `}
      >
        <div
          className={css`
            font-size: 50px;
            line-height: 108px;
            margin-bottom: 53px;
            color: #fff;
            img {
              height: 108px;
              margin-top: -10px;
            }
            ${mobile} {
              font-size: 32px;
              img {
                width: 42px;
                height: 42px;
                margin-left: 8px;
              }
            }
          `}
        >
          <img src="/read-start-ball.png" />
          我们的元宇宙·开端
        </div>
        <div
          className={css`
            h2 {
              font-size: 40px;
              opacity: 0.9;
              ${mobile} {
                font-size: 24px;
              }
            }
            p {
              font-size: 20px;
              opacity: 0.7;
            }
            ${mobile} {
              padding: 0 16px;
            }
          `}
        >
          <Markdown zh={ourmetaverse} en={enourmetaverse}></Markdown>
        </div>
      </div>
    </div>
  );
};
