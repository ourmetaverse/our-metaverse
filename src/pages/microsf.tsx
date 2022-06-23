import React from 'react';
import { Image } from 'antd';
import { css } from '@emotion/css';

const Component: React.FC = () => {
  return (
    <div
      className={css`
        padding-top: 120px;
        text-align: center;
      `}
    >
      <h2>即将开启，敬请期待</h2>
      <Image src="/microsf.png" />
    </div>
  );
};

export default Component;
