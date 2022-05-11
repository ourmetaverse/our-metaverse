import { Space, Select } from 'antd';
import { useState } from 'react';
import { totalSupply } from '@/constants';
import BlueLine from '@/components/BlueLine';
import { css } from '@emotion/css';
import { maxWidth, navHeight, primaryColor } from '@/utils/css';

const Option = Select.Option;

export default () => {
  const nfts = [];
  const [range, setRange] = useState(0);
  for (let i = range * 500; i < range * 500 + 500 && i < totalSupply; i++) {
    nfts.push(
      <div
        className={css`
          margin-right: 24px;
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
            display: flex;
            justify-content: space-between;
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
          <Select
            style={{ width: '200px' }}
            className={css`
              margin-top: 60px;
            `}
            value={String(range)}
            onChange={(value) => {
              setRange(parseInt(value));
            }}
          >
            <Option value="0">0~499</Option>
            <Option value="1">500~999</Option>
            <Option value="2">1000~1499</Option>
            <Option value="3">1500~1999</Option>
            <Option value="4">2000~2499</Option>
            <Option value="5">2500~2999</Option>
          </Select>
        </div>
        <Space wrap>{nfts}</Space>
      </div>
    </div>
  );
};
