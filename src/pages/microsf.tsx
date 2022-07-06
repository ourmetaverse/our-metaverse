import React from 'react';
import { css } from '@emotion/css';
import MicrosfCode from '@/components/MicrosfCode';
import { useIntl } from 'umi';
import { mobile } from '@/utils/css';

const pStyle = css`
  margin-top: 32px;
  font-size: 15px;
  line-height: 32px;
  opacity: 0.8;
`;

const qrCodeText = css`
  font-size: 16px;
  opacity: 0.5;
  text-align: center;
  width: 100%;
  line-height: 40px;
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
        word-break: break-all;
        ${mobile} {
          background-image: none;
          width: auto;
          height: auto;
          padding: 0;
          margin-bottom: 64px;
        }
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
  const { formatMessage } = useIntl();

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
          ${mobile} {
            padding: 120px 16px;
          }
        `}
      >
        <div
          className={css`
            text-align: center;
          `}
        >
          <img
            className={css`
              ${mobile} {
                width: 65%;
              }
            `}
            src="/ourmxmicrosf.png"
            alt=""
          />
          <div
            className={css`
              margin-top: 60px;
            `}
          >
            <img src="/xuanshang.png" alt="" />
            <h2
              className={css`
                transform: rotate(-7deg) skew(-9deg);
                font-size: 64px;
                color: white;
                margin: -28px 0 -52px 0;
                font-weight: 900;
                ${mobile} {
                  font-size: 32px;
                }
              `}
            >
              {formatMessage({ id: 'micro_title' })}
            </h2>
            <img
              className={css`
                ${mobile} {
                  width: 100%;
                  margin-top: 16px;
                }
              `}
              src="/first.png"
              alt=""
            />
          </div>
        </div>

        <div>
          <img src="/micro01.png" alt="" />
          <p className={pStyle}>
            {formatMessage({
              id: 'micro_start',
            })}
          </p>
          <div
            className={css`
              display: flex;
              margin-top: 60px;
              justify-content: space-between;
              ${mobile} {
                flex-direction: column;
              }
            `}
          >
            <ShowBox title="小科幻" desc={formatMessage({ id: 'micro_sf' })} />
            <ShowBox
              title="OurMetaverseDAO"
              desc={formatMessage({ id: 'micro_ourm' })}
            />
          </div>
        </div>
        <div
          className={css`
            margin-top: 100px;
          `}
        >
          <img src="/micro02.png" alt="" />
          <p className={pStyle}>{formatMessage({ id: 'micro_detail' })}</p>
        </div>
        <div
          className={css`
            background-image: url(/qrcodebg.png);
            width: 1015px;
            height: 375px;
            padding-top: 75px;
            margin-top: 45px;
            ${mobile} {
              background-image: none;
              width: auto;
              height: auto;
            }
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              ${mobile} {
                flex-direction: column;
                text-align: center;
              }
            `}
          >
            <div>
              <div
                className={css`
                  width: 150px;
                  font-size: 30px;
                  line-height: 40px;
                  margin: 41px 130px 32px 90px;
                  ${mobile} {
                    margin: 41px auto;
                  }
                `}
              >
                扫码关注 大赛新进展
                <img src="/microblueline.png" alt="" />
              </div>
            </div>
            <div
              className={css`
                margin-right: 83px;
                ${mobile} {
                  margin-right: 0px;
                }
              `}
            >
              <MicrosfCode />
              <div className={qrCodeText}>小科幻·公众号</div>
            </div>
            <div>
              <img
                draggable={false}
                className={css`
                  width: 200px;
                  height: 200px;
                  ${mobile} {
                    margin-top: 64px;
                  }
                `}
                src="/xiaoyuan.png"
              />
              <div className={qrCodeText}>OurMetaverse·微信号</div>
            </div>
          </div>
        </div>
        <div
          className={css`
            text-align: center;
            margin-top: 100px;
          `}
        >
          <img
            className={css`
              ${mobile} {
                width: 100%;
              }
            `}
            src="/microfoot.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Component;
