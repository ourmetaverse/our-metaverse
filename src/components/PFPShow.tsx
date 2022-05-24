import React from 'react';
import { css } from '@emotion/css';
import { mobile } from '@/utils/css';

interface SliderRowProps {
  items: string[];
  right?: boolean;
}

const SliderRow: React.FC<SliderRowProps> = ({ items, right }) => {
  return (
    <div
      className={css`
        position: relative;
        animation: ${right ? 'scrollright' : 'scroll'} 10s linear infinite;
        -webkit-animation: scroll ${right && 'right'} 10s linear infinite;
        margin-bottom: 54px;
        width: 1252px;
        ${mobile} {
          height: 200px;
        }
      `}
    >
      {items.map((item) => {
        return (
          <div
            className={css`
              width: 300px;
              height: 311px;
              margin-right: 13px;
              background-image: url(/pfpbg1.png);
              background-repeat: no-repeat;
              display: inline-block;
              padding-top: 30px;
              padding-left: 19px;
              ${mobile} {
                transform: scale(0.6);
              }
              &:nth-child(even) {
                background-image: url(/pfpbg2.png);
              }
            `}
            key={item}
          >
            <img
              className={css`
                width: 254px;
                height: 254px;
              `}
              src={item}
              alt={item}
            />
          </div>
        );
      })}
    </div>
  );
};

const Component: React.FC = () => {
  return (
    <div>
      <SliderRow items={['/pfp1.png', '/pfp2.png', '/pfp1.png', '/pfp2.png']} />
      <SliderRow
        right
        items={['/pfp1.png', '/pfp2.png', '/pfp1.png', '/pfp2.png']}
      />
    </div>
  );
};

export default Component;
