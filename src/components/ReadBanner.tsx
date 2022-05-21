import React from 'react';
import { Typography } from 'antd';
import { css } from '@emotion/css';
import { primaryColor, maxWidth, navHeight, mobile } from '@/utils/css';
import { useIntl } from 'umi';

interface Props {}

const { Paragraph } = Typography;

const Component: React.FC<Props> = () => {
  const { formatMessage } = useIntl();
  return (
    <div
      className={css`
        background-color: ${primaryColor};
        height: 767px;
        ${mobile} {
          height: auto;
        }
      `}
    >
      <div
        className={css`
          max-width: ${maxWidth};
          margin: 0 auto;
          padding-top: 128px;
          flex: 1;
          ${mobile} {
            padding: 128px 16px;
          }
        `}
      >
        <div
          className={css`
            display: flex;
            ${mobile} {
              flex-direction: column;
            }
          `}
        >
          <div
            className={css`
              flex: 1;
            `}
          >
            <div
              className={css`
                font-size: 70px;
                ${mobile} {
                  font-size: 40px;
                }
              `}
            >
              <div>{formatMessage({ id: 'read_title' })}</div>
              <div
                className={css`
                  margin-top: 16px;
                  ${mobile} {
                    margin-top: 0;
                  }
                `}
              >
                {formatMessage({ id: 'read_subtitle' })}{' '}
                <span
                  className={css`
                    font-size: 40px;
                    color: #d8d8d8;
                    opacity: 0.3;
                    ${mobile} {
                      font-size: 20px;
                    }
                  `}
                >
                  / /
                </span>
              </div>
            </div>
            <div
              className={css`
                margin-top: 32px;
                height: 232px;
                overflow: hidden;
                flex: 1;
                ${mobile} {
                  margin-top: 16px;
                }
              `}
            >
              <div
                className={css`
                  animation: 30s wordsLoop linear infinite normal;
                `}
              >
                <Paragraph>{formatMessage({ id: 'read_2028' })}</Paragraph>
                <Paragraph>{formatMessage({ id: 'read_2029' })}</Paragraph>
                <Paragraph>{formatMessage({ id: 'read_2032' })}</Paragraph>
                <Paragraph>{formatMessage({ id: 'read_2049' })}</Paragraph>
                <Paragraph>{formatMessage({ id: 'read_2057' })}</Paragraph>
                <Paragraph>{formatMessage({ id: 'read_2058' })}</Paragraph>
                <Paragraph>{formatMessage({ id: 'read_2060' })}</Paragraph>
                <Paragraph>{formatMessage({ id: 'read_2078' })}</Paragraph>
                <Paragraph>{formatMessage({ id: 'read_2080' })}</Paragraph>
                <Paragraph>{formatMessage({ id: 'read_2082' })}</Paragraph>
                <Paragraph>{formatMessage({ id: 'read_2112' })}</Paragraph>
                <Paragraph>{formatMessage({ id: 'read_2121' })}</Paragraph>
                <Paragraph>{formatMessage({ id: 'read_2122' })}</Paragraph>
              </div>
            </div>
          </div>
          <div
            className={css`
              flex: 1;
              ${mobile} {
                position: absolute;
                top: 0;
                right: 0;
                opacity: 0.3;
                overflow: hidden;
                width: 420px;
              }
            `}
          >
            <img src="/read-banner.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
