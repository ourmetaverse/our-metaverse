import BlueLine from '@/components/BlueLine';
import DownArrow from '@/components/DownArrow';
import IndexBtn from '@/components/IndexBtn';
import { maxWidth, mobile } from '@/utils/css';
import { css } from '@emotion/css';
import { useResponsive } from 'ahooks';
import { Space, Typography } from 'antd';
import React from 'react';
import { Link, useIntl } from 'umi';
import StarCanvas from './StarCanvas';

interface Props {}

const Component: React.FC<Props> = () => {
  const { formatMessage } = useIntl();
  const { pc } = useResponsive();
  return (
    <StarCanvas
      visible={pc}
      numStars={200}
      FPS={30}
      minSize={3}
      maxSize={8}
      shape="cross star"
      background="linear-gradient(to right bottom, #000000, #060F35, #142E9D, #041352)"
    >
      <div
        className={css(`
        height: 100vh;
        max-width: ${maxWidth};
        margin: 0 auto;
        background: url(/indexstarbg.png) no-repeat center center;
        padding: 87px 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        ${mobile} {
          padding: 87px 16px;
          height: auto;
          background: none;
        }
      `)}
      >
        <div
          className={css(`
            display:flex;
            flex: 1;
            flex-direction:column;
            justify-content:center;
            .ourm-title {
              font-size:70px;
              letter-spacing:0.22px;
              line-height:80px;
              font-family: Rockwell;
              ${mobile} {
                font-size: 40px;
                line-height:60px;
              }
            }
          `)}
        >
          <Typography>
            <div>
              <div
                className={css`
                  background: linear-gradient(150deg, #0f22ff, #ffffff);
                  background-clip: text;
                  color: transparent;
                `}
              >
                <div className="ourm-title">Our Metaverse ,</div>
                <div className="ourm-title">Our Dream !</div>
              </div>
              <div
                className={css(`
              font-size:20px;
              letter-spacing:0.06px;
              line-height:40px;
              font-family: 苹方-简;
              margin-bottom: 16px;
              font-weight:bold;
            `)}
              >
                {formatMessage({ id: 'index_intro_title_1' })}
                <br />
                {formatMessage({ id: 'index_intro_title_2' })}
              </div>
              <BlueLine left primary />
              <div
                className={css(`
              max-width:556px;
              font-size:16px;
              letter-spacing:0.05px;
              line-height:36px;
              font-family: 苹方-简;
              opacity:0.5;
              margin-bottom: 32px;
              ${mobile} {
                margin-bottom: 16px;
              }
            `)}
              >
                {formatMessage({ id: 'index_intro_content' })}
              </div>
            </div>
          </Typography>
          <Space size="large" direction={pc ? 'horizontal' : 'vertical'}>
            <Link to="/mint">
              <IndexBtn width="215px">
                {formatMessage({ id: 'index_intro_mint' })}
              </IndexBtn>
            </Link>
            <Link to="/microsf">
              <IndexBtn width="215px">
                {formatMessage({ id: 'index_intro_microsf' })}
              </IndexBtn>
            </Link>
          </Space>
        </div>
        <div
          className={css`
            width: 50%;
            ${mobile} {
              display: none;
            }
            display: flex;
            flex-direction: column;
            justify-content: center;
          `}
        >
          <img
            className={css`
              width: 140%;
            `}
            src="/read-banner.png"
            alt=""
          />
        </div>
        <DownArrow />
      </div>
    </StarCanvas>
  );
};

export default Component;
