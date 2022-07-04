import React from 'react';
import { css } from '@emotion/css';
import MicrosfCode from '@/components/MicrosfCode';
import { Space } from 'antd';
import { mobile } from '@/utils/css';

const pStyle = css`
  margin-top: 32px;
  font-size: 15px;
  line-height: 32px;
  opacity: 0.8;
`;

const ShowBox: React.FC<{ title: string; desc: string }> = ({
  title,
  desc,
}) => {
  return (
    <div
      className={css`
        background-image: url('/microbox.png');
        width: 483px;
        height: 360px;
        padding: 57px 40px;
      `}
    >
      <div
        className={css`
          font-size: 24px;
        `}
      >
        {title}
      </div>
      <img src="/microblueline.png" alt="" />
      <div
        className={css`
          font-size: 15px;
          line-height: 24px;
          padding-top: 8px;
        `}
      >
        {desc}
      </div>
    </div>
  );
};

const Component: React.FC = () => {
  return (
    <div
      className={css`
        background-image: url('/microcontentbg.png');
      `}
    >
      <div
        className={css`
          padding-top: 120px;
          max-width: 1000px;
          margin: 0 auto;
        `}
      >
        <div
          className={css`
            text-align: center;
          `}
        >
          <img src="/ourmxmicrosf.png" alt="" />
          <div
            className={css`
              margin-top: 60px;
            `}
          >
            <img src="/xuanshang.png" alt="" />
            <h2
              className={css`
                transform: rotate(-7deg);
                font-size: 64px;
                color: white;
                font-style: italic;
                margin: -28px 0 -52px 0;
                font-weight: 900;
              `}
            >
              寒武奖{' · '}我们的元宇宙
            </h2>
            <img src="/first.png" alt="" />
          </div>
        </div>

        <div>
          <img src="/micro01.png" alt="" />
          <p className={pStyle}>
            我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙。我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙。
          </p>
          <div
            className={css`
              display: flex;
              justify-content: space-between;
              ${mobile} {
                flex-direction: column;
              }
            `}
          >
            <ShowBox title="小科幻" desc="小科幻简介，小科幻简介" />
            <ShowBox
              title="OurMetaverseDAO"
              desc="OurMetaverseDAO 简介，小科幻简介"
            />
          </div>
        </div>
        <div
          className={css`
            margin-top: 100px;
          `}
        >
          <img src="/micro02.png" alt="" />
          <p className={pStyle}>
            我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙。我们的元宇宙元宇宙我们的元宇宙元宇宙我们的元宇宙元宇宙。
          </p>
        </div>
        <div
          className={css`
            text-align: center;
          `}
        >
          <img src="/microfoot.png" alt="" />
        </div>
        <MicrosfCode />
      </div>
    </div>
  );
};

export default Component;
