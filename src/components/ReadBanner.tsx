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
            <div
              className={css`
                margin-top: 64px;
                height: 232px;
                overflow: hidden;
                flex: 1;
              `}
            >
              <div
                className={css`
                  animation: 30s wordsLoop linear infinite normal;
                `}
              >
                <Paragraph>
                  2028
                  年，中国登月项目取得进展，人类再度登陆月球，新一轮的太空竞赛开启。
                </Paragraph>
                <Paragraph>
                  2029
                  年，人类登陆火星，启动火星移民。小部分人类开始移居火星移民基地。
                </Paragraph>
                <Paragraph>
                  2032
                  年，爆发第三次世界大战，地球进入辐射时代。人类出现大规模死亡，前往火星基地的船票一票难求。
                </Paragraph>
                <Paragraph>
                  2049
                  年，脑机接口突破，火星移民率先进入元宇宙时代。人类的创造力出现爆发，催生了人类科技文化复兴。同年，星环DAO成立。
                </Paragraph>
                <Paragraph>
                  2057 年，基础物理学出现关键突破，人类开启了太空改造时代。
                </Paragraph>
                <Paragraph>
                  2058 年，火星移民局开启金星改造计划和重返地球计划。
                </Paragraph>
                <Paragraph>
                  2060
                  年，地球爆发自由运动，由地球原住民组成的革命军和火星移民局爆发战争。
                </Paragraph>
                <Paragraph>
                  2078
                  年，星环DAO成功实验超光速跃迁引擎，重返地球计划终止，火星移民局开启星际探索时代。
                </Paragraph>
                <Paragraph>
                  2080
                  年，金星完成改造，第一批金星移民开启。同时，金星太空电梯建造启动。同年，“真实世界”元宇宙开启。
                </Paragraph>
                <Paragraph>
                  2112 年，金星开始建设超铁系统，用于支撑大量增长的人口需求。
                </Paragraph>
                <Paragraph>
                  2082 年，星环DAO成功发现了第一颗太阳系外宜居行星。
                </Paragraph>
                <Paragraph>
                  2121
                  年，星环DAO成功发现了第四颗宜居行星“晨昏线”，加上金星和地球，“真实世界”元宇宙中对应也一共有6颗行星。
                </Paragraph>
                <Paragraph>2122 年，故事从这里开始。</Paragraph>
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
