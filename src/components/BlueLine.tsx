import React from 'react';
import { css } from '@emotion/css';
import { primaryColor } from '@/utils/css';

interface Props {
  width?: number;
  left?: boolean;
}

const Component: React.FC<Props> = ({ width = 120, left }) => {
  return (
    <div
      className={css`
        width: ${width}px;
        background: linear-gradient(
          to right,
          ${primaryColor},
          #042bc7,
          ${primaryColor}
        );
        height: 11px;
        margin: 0 ${left ? '' : 'auto'};
        margin-top: 16px;
        margin-bottom: 64px;
      `}
    ></div>
  );
};

export default Component;
