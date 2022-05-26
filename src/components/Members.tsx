import React from 'react';
import { Col, Row } from 'antd';
import { css } from '@emotion/css';
import { members } from '@/constants';
import { useResponsive } from 'ahooks';
import { mobile, fontColor, maxWidth } from '@/utils/css';
import BlueLine from '@/components/BlueLine';
import Footer from '@/components/Footer';
import { useIntl } from 'umi';

interface Props {}

const Component: React.FC<Props> = () => {
  const { pc } = useResponsive();
  const { formatMessage } = useIntl();
  return (
    <div>
      <div
        className={css`
          text-align: center;
          max-width: ${maxWidth};
          margin: 0 auto;
          padding-top: 100px;
        `}
      >
        <div
          className={css`
            ${fontColor}
            font-size: 40px;
            display: inline-block;
          `}
        >
          {formatMessage({ id: 'member_title' })}
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
      <Footer />
    </div>
  );
};

export default Component;
