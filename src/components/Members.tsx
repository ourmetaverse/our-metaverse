import React from 'react';
import { Col, Row } from 'antd';
import { css } from '@emotion/css';
import { members } from '@/constants';
import { useResponsive } from 'ahooks';

interface Props {}

const Component: React.FC<Props> = () => {
  const { pc } = useResponsive();
  return (
    <Row gutter={56}>
      {members.map((m) => {
        return (
          <Col
            span={pc ? 6 : 12}
            key={m.name}
            className={css`
              margin-bottom: 16px;
            `}
          >
            <img
              className={css`
                max-width: 100%;
              `}
              src={m.avatar}
              alt={m.name}
            />
            <div>{m.name}</div>
            <div>{m.desc}</div>
          </Col>
        );
      })}
    </Row>
  );
};

export default Component;
