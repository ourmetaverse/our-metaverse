import React from 'react';
import { css } from '@emotion/css';
import { maxWidth, mobile } from '@/utils/css';
import { useResponsive } from 'ahooks';
import DownArrow from './DownArrow';

interface SliderRowProps {
  items: string[];
  right?: boolean;
}

const SliderRow: React.FC<SliderRowProps> = ({ items, right }) => {
  const { pc } = useResponsive();
  return (
    <div
      className={css`
        position: relative;
        animation: ${right
            ? `${!pc ? 'mobile' : ''}scrollright`
            : `${!pc ? 'mobile' : ''}scroll`}
          10s linear ${!pc ? 'infinite' : ''};
        -webkit-animation: ${right
            ? `${!pc ? 'mobile' : ''}scrollright`
            : `${!pc ? 'mobile' : ''}scroll`}
          10s linear ${!pc ? 'infinite' : ''};
        margin-bottom: 54px;
        width: 1280px;
        left: calc(50% - 640px);
        ${mobile} {
          left: auto;
          width: 900px;
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
              &:nth-child(even) {
                background-image: url(/pfpbg2.png);
              }
              ${mobile} {
                background-size: 175px 187px;
                height: 189px;
                width: 189px;
                padding-top: 18px;
                padding-left: 12px;
              }
            `}
            key={item}
          >
            <img
              className={css`
                width: 254px;
                height: 254px;
                ${mobile} {
                  height: 151px;
                  width: 151px;
                }
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
      <SliderRow
        items={['/pfp13.jpg', '/pfp4.jpg', '/pfp12.jpg', '/pfp6.jpg']}
      />
      <SliderRow
        right
        items={['/pfp7.jpg', '/pfp8.jpg', '/pfp9.jpg', '/pfp10.jpg']}
      />
      <DownArrow />
    </div>
  );
};

export default Component;
