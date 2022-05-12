import { Space, Col, Row, Pagination } from 'antd';
import { useState } from 'react';
import { totalSupply } from '@/constants';
import BlueLine from '@/components/BlueLine';
import { css } from '@emotion/css';
import { maxWidth, primaryColor } from '@/utils/css';
import Modal from '@/components/Modal';
import { IRouteProps } from 'umi';
import Token from './token';

const pageSize = 10;

export default (props: IRouteProps) => {
  const nfts = [];
  const [page, setPage] = useState<number>(1);
  const [current, setCurrent] = useState<number | null>(null);

  for (
    let i = (page - 1) * pageSize;
    i < page * pageSize && i < totalSupply;
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
            cursor: pointer;
          `}
          width={220}
          height={220}
          src="/xuanwu.png"
          alt=""
          onClick={() => {
            setCurrent(i);
          }}
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
        padding-top: 120px;
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
            current={page}
            pageSize={pageSize}
            showQuickJumper
            onChange={setPage}
            total={totalSupply}
          />
        </div>
      </div>
      <Modal
        visible={current !== null}
        width="1000px"
        onCancel={() => {
          setCurrent(null);
        }}
        footer={false}
      >
        <Row
          gutter={60}
          className={css`
            padding: 70px;
          `}
        >
          <Col span={12}>
            <img
              className={css`
                box-shadow: 0px 2px 30px #1443ff;
                border-radius: 10px;
              `}
              width={400}
              height={400}
              src="/xuanwu.png"
              alt=""
            />
          </Col>
          <Col span={12}>
            <div>{current !== null ? <Token token={current} /> : null}</div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};
