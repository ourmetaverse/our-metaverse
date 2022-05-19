import React from 'react';
import { mobile } from '@/utils/css';
import { css } from '@emotion/css';

interface Props {
  item: {
    title: string;
    icon: string;
    content: string;
  };
  width?: string;
}

const Component: React.FC<Props> = ({ item, width = '49%' }) => {
  return (
    <div
      key={item.title}
      className={css`
        width: ${width};
        margin-bottom: 32px;
        ${mobile} {
          width: auto;
        }
      `}
    >
      <div
        className={css(`
          width:100%;
          background-image:url('/banner-bg.png');
          display:flex;
          flex-direction:row;
          background-size: 100% 100%;
          padding-right:54px;
          ${mobile} {
            padding: 0 8px 8px 8px;
          }
        `)}
      >
        <div>
          <img
            className={css(`
                    width:50px;
                    height:50px;
                    margin: 54px 35px 66px 35px;
                    ${mobile} {
                      display:none;
                    }
                  `)}
            src={item.icon}
            alt="icon"
          />
        </div>
        <div>
          <div
            className={css(`
                color: #fff;
                font-size:20px;
                letter-spacing:0.06px;
                line-height:30px;
                font-family: 苹方-简;
                margin:24px 0 13px 0;
                ${mobile} {
                  margin:16px 0 8px 0;
                }
              `)}
          >
            <img
              className={css(`
                    width:24px;
                    height:24px;
                    margin-right: 8px;
                    margin-top: -6px;
                    display:none;
                    ${mobile} {
                      display:inline-block;
                    }
                  `)}
              src={item.icon}
              alt="icon"
            />
            {item.title}
          </div>
          <div
            className={css(`
                color: #fff;
                font-size:16px;
                letter-spacing:0.05px;
                line-height:24px;
                font-family: 苹方-简;
                opacity:0.5;
                ${mobile} {
                  line-height:20px;
                  font-size:14px;
                }
              `)}
          >
            {item.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
