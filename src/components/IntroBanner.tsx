import React from 'react';
import { Row, Col, Typography, Space } from 'antd';
import { css } from '@emotion/css';
import { Link } from 'umi';
import MintModal from './MintModal';

interface Props {}

const Component: React.FC<Props> = () => {
  return (
    <Row
      className={css(`
        width:100%;
        height: 900px;
        background-image:url('/index-bg-1.png');
        background-size:100% 100%;
        padding:0 104px;
      `)}
    >
      <Col span={12}>
        <Typography>
          <div
            className={css(`
              color: #1443FF;
              font-size:70px;
              letter-spacing:0.22px;
              line-height:80px;
              font-family: Impact;
              margin-top: 88px;
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
            这不仅仅是 NFT，
            <br />
            更是 Web3 创作者经济的梦想之旅。
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
            OurMetaverse 以科幻小说《我们的元宇宙·开端》为起点，是 Web3
            创作者经济的一次革命。它在 ERC721
            合约的基础上添加了版权授权、权益分成的逻辑，拥有 NFT 除了拥有对应的
            PFP
            头像外还拥有全套小说作品的部分著作权，数字改编权以及图书改编、影视改编的分成权益。
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
              即刻 Mint
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
              阅读创世小说
            </div>
          </Link>
        </Space>
      </Col>
      <Col span={12}>
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
            position: absolute;
            right: 56px;
            bottom: 40px;
            font-size: 14px;
            letter-spacing: 0.04px;
            line-height: 20px;
            font-family: 苹方-简;
            opacity: 0.6;
          `}
        >
          *图为小说人物角色设定非最终NFT
        </div>
      </Col>
    </Row>
  );
};

export default Component;
