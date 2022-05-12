import React from 'react';
import { css } from '@emotion/css';

interface Props {
  type: 'opensea';
}

const Component: React.FC<Props> = ({ type }) => {
  return (
    <div
      className={css`
        display: inline-block;
        height: 60px;
        width: 60px;
        .ourm-icon-image-hover {
          display: none;
        }
        .ourm-icon-image {
          display: block;
        }
        &:hover {
          .ourm-icon-image {
            display: none;
          }
          .ourm-icon-image-hover {
            display: block;
          }
        }
      `}
    >
      <img className="ourm-icon-image" src={`/${type}.png`} alt="" />
      <img
        className="ourm-icon-image-hover"
        src={`/${type}-hover.png`}
        alt=""
      />
    </div>
  );
};

export default Component;
