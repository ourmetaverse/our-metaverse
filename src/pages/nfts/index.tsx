import { Space, Pagination } from 'antd';
import { useState } from 'react';
import { totalSupply } from '@/constants';
import BlueLine from '@/components/BlueLine';
import { css } from '@emotion/css';
import { maxWidth, navHeight, primaryColor } from '@/utils/css';

const defaultPageSize = 15;

export default () => {
  const nfts = [];
  const [current, setCurrent] = useState(0);
  for (
    let i = current * defaultPageSize;
    i < current * defaultPageSize + defaultPageSize && i < totalSupply;
    i++
  ) {
    nfts.push(
      <div
        className={css`
          margin-right: 24px;
          margin-bottom: 24px;
        `}
      >
        <img
          className={css`
            box-shadow: 0px 2px 30px #3e3e3e;
          `}
          width={220}
          height={220}
          src="/xuanwu.png"
          alt=""
        />
        <div
          className={css`
            text-align: center;
            font-size: 24px;
            margin-top: 8px;
          `}
        >
          #{i}
        </div>
      </div>,
    );
  }

  return (
    <div
      className={css`
        padding-top: ${navHeight};
        background: linear-gradient(${primaryColor}, #000);
      `}
    >
      <div
        className={css`
          max-width: ${maxWidth};
          margin: 0 auto;
        `}
      >
        <div
          className={css`
            width: 200px;
            font-size: 50px;
          `}
        >
          <div>NFT画廊</div>
          <BlueLine left />
        </div>
        <Space
          className={css`
            justify-content: space-between;
          `}
          wrap
        >
          {nfts}
        </Space>
        <div
          className={css`
            margin-top: 24px;
          `}
        >
          <Pagination
            showSizeChanger={false}
            current={current - 1}
            defaultPageSize={defaultPageSize}
            onChange={(c) => {
              setCurrent(c - 1);
            }}
            total={3000}
          />
        </div>
      </div>
    </div>
  );
};
