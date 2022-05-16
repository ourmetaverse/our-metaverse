import React from 'react';
import { css } from '@emotion/css';
import { mobile } from '@/utils/css';

const Component: React.FC = ({ children }) => {
  return (
    <div
      className={css(`
        width:215px;
        height:64px;
        border-radius:39px;
        border:4px solid #1443FF;
        color:#fff;
        background-color: rgba(20,67,255,0.29);
        font-size:20px;
        letter-spacing:0.06px;
        font-family: 苹方-简;
        margin-right:40px;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;

        position: relative;
        overflow: hidden;
        &:after {
          background: #fff;
          content: "";
          height: 155px;
          left: -75px;
          opacity: .2;
          position: absolute;
          top: -50px;
          transform: rotate(35deg);
          width: 50px;
          z-index: -10;
        }
        &:hover {
          &:after {
            left: 120%;
            transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);
          }
        }

        ${mobile} {
          width:132x;
          height:50px;
          font-size:16px;
        }
      `)}
    >
      {children}
    </div>
  );
};

export default Component;
