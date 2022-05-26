import React from 'react';
import { Col, Row } from 'antd';
import { css } from '@emotion/css';
import { members } from '@/constants';
import { useResponsive } from 'ahooks';
import { mobile, fontColor, maxWidth } from '@/utils/css';
import BlueLine from '@/components/BlueLine';
import { Layout, Divider } from 'antd';
import { contractAddress } from '@/constants';

const { Header, Content, Footer } = Layout;

interface Props {}

const Component: React.FC<Props> = () => {
  const { pc } = useResponsive();
  return (
    <div>
      <div
        className={css`
          text-align: center;
          max-width: ${maxWidth};
          margin: 0 auto;
        `}
      >
        <div
          className={css`
            ${fontColor}
            font-size: 40px;
            display: inline-block;
          `}
        >
          核心贡献成员
        </div>
        <BlueLine primary />
        <Row>
          {members.map((m) => {
            return (
              <Col
                span={pc ? 6 : 12}
                key={m.name}
                className={css`
                  margin-bottom: 8px;
                  text-align: left;
                `}
              >
                <div
                  className={css`
                    margin: 16px auto;
                    width: 253px;
                    ${mobile} {
                      width: 151px;
                    }
                  `}
                >
                  <img
                    className={css`
                      width: 253px;
                      height: 253px;
                      ${mobile} {
                        width: 151px;
                        height: 151px;
                      }
                    `}
                    src={m.avatar}
                    alt={m.name}
                  />
                  <div
                    className={css`
                      ${fontColor}
                      font-size: 30px;
                      margin-top: 8px;
                      display: inline-block;
                      ${mobile} {
                        font-size: 24px;
                      }
                    `}
                  >
                    {m.name}
                  </div>
                  <div
                    className={css`
                      font-size: 20px;
                      opacity: 0.6;
                      ${mobile} {
                        font-size: 16px;
                      }
                    `}
                  >
                    {m.title}
                  </div>
                  <div
                    className={css`
                      font-size: 16px;
                      opacity: 0.6;
                      margin-top: 8px;
                      ${mobile} {
                        font-size: 14px;
                      }
                    `}
                  >
                    {m.desc}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <Footer
        className={css`
          padding-top: 114px;
          position: relative;
          a {
            color: white;
            width: 184px;
            display: inline-block;
            &:hover {
              opacity: 0.7;
            }
            ${mobile} {
              width: 80px;
            }
          }
          .ant-divider {
            background-color: #d8d8d8;
          }
        `}
        style={{ textAlign: 'center' }}
      >
        <div>
          <a href={`https://etherscan.io/address/${contractAddress}`}>
            Etherscan
          </a>
          <Divider type="vertical" />
          <a href={`https://opensea.io/collection/our-metaverse`}>Opensea</a>
          <Divider type="vertical" />
          <a href={`https://v1.our-metaverse.xyz`}>V1 Site</a>
          {pc ? <Divider type="vertical" /> : <br />}
          <a href={`https://discord.gg/EPh8xZZ6yz`}>Discord</a>
          <Divider type="vertical" />
          <a href={`https://twitter.com/OurMetaverseDAO`}>Twitter</a>
        </div>
        <div
          className={css`
            margin-top: 78px;
            color: #979797;
          `}
        >
          OurMetaverse ©2022 Created By OurMetaverseDAO
        </div>
      </Footer>
    </div>
  );
};

export default Component;
