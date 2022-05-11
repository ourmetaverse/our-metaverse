import React from 'react';
import { css } from '@emotion/css';
import { primaryColor } from '@/utils/css';

interface Props {
  width?: number;
}

const Component: React.FC<Props> = ({ width = 120 }) => {
  return (
    <div
      className={css`
        width: ${width}px;
        background-color: ${primaryColor};
        height: 11px;
        margin: 0 auto;
        margin-top: 16px;
        margin-bottom: 64px;
      `}
    ></div>
  );
};

export default Component;
