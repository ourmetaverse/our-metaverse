import React from 'react';
import { Row, Col, Typography, Space } from 'antd';
import { css } from '@emotion/css';
import { Link, useIntl } from 'umi';
import MintModal from './MintModal';

interface Props {}

const Component: React.FC<Props> = () => {
  const { formatMessage } = useIntl();
  return (
    <Row
      className={css(`
        width:100%;
        height: 100vh;
        background:transparent;
        background-size:100% 100%;
        padding:87px 104px;
      `)}
    >
      <Col
        span={12}
        className={css(`
        display:flex;
        flex-direction:column;
        justify-content:center;
      `)}
      >
        <Typography>
          <div
            className={css(`
              color: #1443FF;
              font-size:70px;
              letter-spacing:0.22px;
              line-height:80px;
              font-family: Impact;
            `)}
          >
            Our Metaverse ,
          </div>
          <div
            className={css(`
              color: #1443FF;
              font-size:70px;
              letter-spacing:0.22px;
              line-height:80px;
              font-family: Impact;
              margin-bottom: 16px;
            `)}
          >
            Our Dream !
          </div>
          <div
            className={css(`
              font-size:20px;
              letter-spacing:0.06px;
              line-height:40px;
              font-family: 苹方-简;
              margin-bottom: 16px;
              font-weight:bold;
            `)}
          >
            {formatMessage({ id: 'index_intro_title_1' })}
            <br />
            {formatMessage({ id: 'index_intro_title_2' })}
          </div>
          <div
            className={css(`
              width:119px;
              height:11px;
              background-color:#1443FF;
              margin: 20px 0 40px 0;
            `)}
          ></div>
          <div
            className={css(`
              width:556px;
              font-size:16px;
              letter-spacing:0.05px;
              line-height:36px;
              font-family: 苹方-简;
              opacity:0.5;
              margin-bottom: 55px
            `)}
          >
            {formatMessage({ id: 'index_intro_content' })}
          </div>
        </Typography>
        <Space>
          <MintModal>
            <div
              className={css(`
              width:215px;
              height:64px;
              border-radius:39px;
              border:4px solid #1443FF;
              color:#fff;
              background-color: rgba(20,67,255,0.29);
              font-size:20px;
              letter-spacing:0.06px;
              font-family: 苹方-简;
              margin-right:40px;
              display:flex;
              align-items:center;
              justify-content:center;
              cursor:pointer;
            `)}
            >
              {formatMessage({ id: 'index_intro_mint' })}
            </div>
          </MintModal>
          <Link to="/read">
            <div
              className={css(`
                width:215px;
                height:64px;
                border-radius:39px;
                border:4px solid #1443FF;
                color:#fff;
                background-color: rgba(20,67,255,0.29);
                font-size:20px;
                letter-spacing:0.06px;
                font-family: 苹方-简;
                display:flex;
                align-items:center;
                justify-content:center;
                cursor:pointer;
              `)}
            >
              {formatMessage({ id: 'index_intro_read' })}
            </div>
          </Link>
        </Space>
      </Col>
      <Col
        span={12}
        className={css(`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
      `)}
      >
        <img
          className={css`
            width: 620px;
            height: 606px;
            margin: 58px auto 148px auto;
            display: block;
          `}
          src="/roles.png"
          alt="OURM"
        />
        <div
          className={css`
            align-self: flex-end;
            font-size: 14px;
            letter-spacing: 0.04px;
            line-height: 20px;
            font-family: 苹方-简;
            opacity: 0.6;
          `}
        >
          *{formatMessage({ id: 'index_intro_tips' })}
        </div>
      </Col>
    </Row>
  );
};

export default Component;
