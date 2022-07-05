import { Space, Col, Row, Pagination, Spin, message } from 'antd';
import { useState, useEffect } from 'react';
import { totalSupply } from '@/constants';
import BlueLine from '@/components/BlueLine';
import { css } from '@emotion/css';
import { maxWidth, mobile, primaryColor } from '@/utils/css';
import Modal from '@/components/Modal';
import { IRouteProps, history, useIntl, useModel } from 'umi';
import request from 'umi-request';
import { useResponsive, useRequest } from 'ahooks';
import Token from './token';

const pageSize = 10;

export default (props: IRouteProps) => {
  const [page, setPage] = useState<number>(1);
  const { code } = useModel('user');
  const { formatMessage } = useIntl();
  const [current, setCurrent] = useState<number | undefined>();
  const { data = [], loading } = useRequest(
    async () => {
      const { images } = await request(
        'https://api.our-metaverse.xyz/api/images',
        {
          params: {
            start: (page - 1) * 10,
          },
        },
      );
      return images;
    },
    {
      onError: (e) => {
        message.error(e.message);
      },
      refreshDeps: [page],
    },
  );

  const { pc } = useResponsive();

  useEffect(() => {
    let token = props.location.query.token;
    if (token !== undefined) {
      const tokenNum = parseInt(token);
      if (tokenNum === code) {
        history.push(`/wormhole?code=${token}`);
      }
      if (!pc) {
        history.push(`nfts/token?token=${token}`);
      } else {
        token = parseInt(token);
        setCurrent(token);
      }
    }
  }, [props.location.query.token, pc, code]);

  const nfts = data.map((url: string, i: number) => {
    const index = (page - 1) * 10 + i;
    return (
      <div
        key={index}
        className={css`
          margin-bottom: 24px;
          margin-right: 24px;
          ${mobile} {
            margin-right: 0;
          }
        `}
      >
        <img
          className={css`
            width: 220px;
            height: 220px;
            box-shadow: 0px 2px 30px #3e3e3e;
            cursor: pointer;
            ${mobile} {
              width: ${document.body.clientWidth / 2 - 24}px;
              height: ${document.body.clientWidth / 2 - 24}px;
            }
          `}
          src={url}
          alt=""
          onClick={() => {
            if (!pc) {
              history.push(`nfts/token?token=${index}`);
            } else {
              history.push(`nfts?token=${index}`);
            }
          }}
        />
        <div
          className={css`
            text-align: center;
            font-size: 24px;
            margin-top: 8px;
          `}
        >
          #{index}
        </div>
      </div>
    );
  });

  return (
    <div
      className={css`
        padding-top: 120px;
        background: linear-gradient(${primaryColor}, #000);
        ${mobile} {
          padding: 120px 16px;
        }
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
            font-size: 50px;
          `}
        >
          <div>{formatMessage({ id: 'nft_gallery' })}</div>
          <BlueLine left />
        </div>
        <Space
          className={css`
            justify-content: space-between;
          `}
          wrap
        >
          {loading ? (
            <div style={{ height: 587 }}>
              <Spin />
            </div>
          ) : (
            nfts
          )}
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
        visible={current !== undefined}
        width="1000px"
        onCancel={() => {
          setCurrent(undefined);
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
              src="/blindbox.gif"
              alt=""
            />
          </Col>
          <Col span={12}>
            <div>
              {current !== undefined ? <Token token={current} /> : null}
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};
