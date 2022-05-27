import React from 'react';
import { css } from '@emotion/css';
import { mobile, primaryColor } from '@/utils/css';

interface Props {
  width?: number;
  left?: boolean;
  primary?: boolean;
}

const Component: React.FC<Props> = ({ width = 180, primary, left }) => {
  return (
    <div
      className={css`
        width: ${width}px;
        background: url(${primary ? '/blueprimaryline.png' : '/blueline.png'})
          no-repeat;
        height: 20px;
        margin: 0 ${left ? '' : 'auto'};
        margin-top: 16px;
        margin-bottom: 32px;
        ${mobile} {
          margin-bottom: 32px;
        }
      `}
    ></div>
  );
};

export default Component;
