import React from 'react';
import { Row } from 'antd';
import { css } from '@emotion/css';

interface Props {}

const Component: React.FC<Props> = () => {
  return (
    <Row className={css``}>
      <ul>
        <li>DAO 成员身份</li>
        <li>专属PFP</li>
        <li>二次创作授权</li>
        <li>项目收益分成</li>
      </ul>
    </Row>
  );
};

export default Component;
