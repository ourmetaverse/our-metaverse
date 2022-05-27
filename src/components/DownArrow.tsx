import React from 'react';
import Lottie from 'lottie-react';
import downAnimationData from '@/lottie/down.json';
import { css } from '@emotion/css';
import { mobile } from '@/utils/css';

const Component: React.FC = () => {
  return (
    <div
      className={css`
        position: absolute;
        bottom: 8px;
        left: 50%;
        margin-left: -50px;
        ${mobile} {
          display: none;
        }
      `}
    >
      <Lottie
        animationData={downAnimationData}
        loop
        style={{
          width: 100,
        }}
      />
    </div>
  );
};

export default Component;
