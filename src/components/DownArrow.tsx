import React from 'react';
import Lottie from 'react-lottie';
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
        options={{
          loop: true,
          autoplay: true,
          animationData: downAnimationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        width={100}
      />
    </div>
  );
};

export default Component;
