import React from 'react';
import { css } from '@emotion/css';
import { mobile } from '@/utils/css';

const Component: React.FC = ({ children }) => {
  return (
    <div
      className={css(`
        width:219px;
        height:79px;
        line-height:70px;
        background: url(/btnbg.png) no-repeat center center;
        font-size:20px;
        letter-spacing:0.06px;
        margin-right:40px;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        color: white;

        position: relative;
        overflow: hidden;
        &:hover {
          background: url(/btnbg-hover.png) no-repeat center center;
        }
        &:active {
          background: url(/btnbg-active.png) no-repeat center center;
          .index-btn-content {
            margin-top: 0px;
          }
        }
        .index-btn-content {
          margin-top: -10px;
        }
      `)}
    >
      <div className="index-btn-content">{children}</div>
    </div>
  );
};

export default Component;
