import React from 'react';
import { css } from '@emotion/css';

interface Props {
  onClick?: () => void;
  width?: string;
  height?: string;
  fontSize?: string;
}

const Component: React.FC<Props> = ({
  children,
  width,
  height = '79px',
  fontSize = '20px',
  onClick,
}) => {
  return (
    <div
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      className={css(`
        padding: 0 32px;
        width: ${width || 'auto'};
        height: ${height};
        background: url(/btnbg.png) no-repeat center center;
        background-size: 100% 100%;
        font-size: ${fontSize};
        letter-spacing:0.06px;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        color: white;

        position: relative;
        overflow: hidden;
        &:hover {
          background: url(/btnbg-hover.png) no-repeat center center;
          background-size: 100% 100%;
        }
        &:active {
          background: url(/btnbg-active.png) no-repeat center center;
          background-size: 100% 100%;
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
