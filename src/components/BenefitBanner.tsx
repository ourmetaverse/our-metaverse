import React from 'react';
import { useIntl } from 'umi';
import { css } from '@emotion/css';
import BlueLine from '@/components/BlueLine';
import { mobile } from '@/utils/css';

interface Props {}

const Component: React.FC<Props> = () => {
  const { formatMessage } = useIntl();

  const bannerBlockData = [
    {
      icon: 'index-icon-0.png',
      title: formatMessage({ id: 'index_benefit_membership' }),
      content: formatMessage({ id: 'index_benefit_membership_content' }),
    },
    {
      icon: 'index-icon-1.png',
      title: formatMessage({ id: 'index_benefit_pfp' }),
      content: formatMessage({ id: 'index_benefit_pfp_content' }),
    },
    {
      icon: 'index-icon-2.png',
      title: formatMessage({ id: 'index_benefit_grant' }),
      content: formatMessage({ id: 'index_benefit_grant_content' }),
    },
    {
      icon: 'index-icon-3.png',
      title: formatMessage({ id: 'index_benefit_share' }),
      content: formatMessage({ id: 'index_benefit_share_content' }),
    },
  ];

  return (
    <div
      className={css(`
        width:100%;
        height: 100vh;
        background:transparent;
        padding: 193px 0 106px 0;
        ${mobile} {
          padding: 16px;
          height: auto;
        }
      `)}
    >
      <div
        className={css(`
          color: #1443FF;
          font-size:40px;
          letter-spacing:0.13px;
          line-height:60px;
          font-family: 苹方-简;
          ${mobile} {
            font-size: 18px;
            line-height:32px;
          }
        `)}
      >
        {formatMessage({ id: 'index_benefit_title_1' })} <br />
        {formatMessage({ id: 'index_benefit_title_2' })}
      </div>
      <BlueLine left />
      <div
        className={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          ${mobile} {
            flex-direction: column;
          }
        `}
      >
        {bannerBlockData.map((item) => (
          <div
            key={item.title}
            className={css`
              width: 49%;
              margin-bottom: 32px;
              ${mobile} {
                width: auto;
              }
            `}
          >
            <div
              className={css(`
              width:100%;
              background-image:url('/banner-bg.png');
              display:flex;
              flex-direction:row;
              background-size: 100% 100%;
              padding-right:54px;
              ${mobile} {
                padding: 0 8px 8px 8px;
              }
            `)}
            >
              <div>
                <img
                  className={css(`
                    width:50px;
                    height:50px;
                    margin: 54px 35px 66px 35px;
                    ${mobile} {
                      display:none;
                    }
                  `)}
                  src={item.icon}
                  alt="icon"
                />
              </div>
              <div>
                <div
                  className={css(`
                color: #fff;
                font-size:20px;
                letter-spacing:0.06px;
                line-height:30px;
                font-family: 苹方-简;
                margin:24px 0 13px 0;
                ${mobile} {
                  margin:16px 0 8px 0;
                }
              `)}
                >
                  <img
                    className={css(`
                    width:24px;
                    height:24px;
                    margin-right: 8px;
                    margin-top: -6px;
                    display:none;
                    ${mobile} {
                      display:inline-block;
                    }
                  `)}
                    src={item.icon}
                    alt="icon"
                  />
                  {item.title}
                </div>
                <div
                  className={css(`
                color: #fff;
                font-size:16px;
                letter-spacing:0.05px;
                line-height:24px;
                font-family: 苹方-简;
                opacity:0.5;
                ${mobile} {
                  line-height:20px;
                  font-size:14px;
                }
              `)}
                >
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;
