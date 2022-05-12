import React from 'react';
import { Typography } from 'antd';
import { css } from '@emotion/css';
import { primaryColor, maxWidth, navHeight, mobile } from '@/utils/css';

interface Props {}

const { Paragraph } = Typography;

const Component: React.FC<Props> = () => {
  return (
    <div
      className={css`
        background-color: ${primaryColor};
        height: 767px;
        ${mobile} {
          height: auto;
        }
        padding-top: ${navHeight};
      `}
    >
      <div
        className={css`
          max-width: ${maxWidth};
          margin: 0 auto;
          padding-top: 128px;
          flex: 1;
          ${mobile} {
            padding: 42px 16px;
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
              <div>我们的元宇宙</div>
              <div
                className={css`
                  margin-top: 16px;
                  ${mobile} {
                    margin-top: 0;
                  }
                `}
              >
                开端{' '}
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
            <Paragraph
              className={css`
                margin-top: 64px;
              `}
            >
              我们有一个梦想：创造一个精彩纷呈的宇宙。
            </Paragraph>
            <Paragraph>
              这个项目叫做“我们的元宇宙”，它是这个项目的名字，也是一篇小说的名字。基于对元宇宙的未来幻想，我们构想了一个新宇宙，我们叫它“我们的元宇宙”，写了两万多字的小说。但是我们想它只是开始，我希望它可以延展开来，成为一个充满无限可能的宇宙。
            </Paragraph>
            <Paragraph>
              我们通过在以太坊上发行一个智能合约来管理这个 IP
              的著作权，把版权授予更多人，让更多人一起来参与创作，一起享受这个
              IP 发展带来的收益。
            </Paragraph>
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
