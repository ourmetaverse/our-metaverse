import React from 'react';
import { Col, Row } from 'antd';
import { css } from '@emotion/css';
import { members } from '@/constants';
import { useResponsive } from 'ahooks';

interface Props {}

const Component: React.FC<Props> = () => {
  const { pc } = useResponsive();
  return (
    <Row>
      {members.map((m) => {
        return (
          <Col
            span={pc ? 6 : 12}
            key={m.name}
            className={css`
              margin-bottom: 16px;
            `}
          >
            <div
              className={css`
                margin: 16px auto;
                width: 253px;
              `}
            >
              <img
                className={css`
                  width: 253px;
                  height: 253px;
                `}
                src={m.avatar}
                alt={m.name}
              />
              <div
                className={css`
                  background: linear-gradient(to right, #0f22ff, #b5bbff);
                  display: inline-block;
                  background-clip: text;
                  color: transparent;
                  font-size: 30px;
                  margin-top: 8px;
                `}
              >
                {m.name}
              </div>
              <div
                className={css`
                  font-size: 20px;
                  opacity: 0.6;
                `}
              >
                {m.title}
              </div>
              <div
                className={css`
                  font-size: 16px;
                  opacity: 0.6;
                  margin-top: 16px;
                `}
              >
                {m.desc}
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default Component;
