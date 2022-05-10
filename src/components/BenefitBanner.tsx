import React from 'react';
import { Row, Col } from 'antd';
import { css } from '@emotion/css';

interface Props {}

const bannerBlockData = [
  {
    icon: 'index-icon-0.png',
    title: 'DAO成员身份',
    content:
      '获得 OurMetaverseDAO 成员的身份，加入专享社区。未来可参与征文大赛决选投票、官方可能发行的新的 NFT 空投等活动。',
  },
  {
    icon: 'index-icon-1.png',
    title: '专属PFP',
    content:
      '拥有对应的 PFP，该系列图片正在基于小说背景创作。所有NFT均能收到对应PFP。',
  },
  {
    icon: 'index-icon-2.png',
    title: '二次创作授权',
    content:
      '拥有 OurMetaverseDAO 作品集中包含的所有作品的数字化形式的修改权和翻译权，可以进行二次创作。二创的商业授权逻辑通过智能合约实现。',
  },
  {
    icon: 'index-icon-3.png',
    title: '项目收益分成',
    content:
      '拥有 OurMetaverseDAO 作品集中包含的所有作品的数字化形式的修改权和翻译权，可以进行二次创作。二创的商业授权逻辑通过智能合约实现。',
  },
];

const Component: React.FC<Props> = () => {
  return (
    <div
      className={css(`
        width:100%;
        height: 900px;
        background-color:#000;
        padding:106px;
      `)}
    >
      <div
        className={css(`
              color: #1443FF;
              font-size:40px;
              letter-spacing:0.13px;
              line-height:60px;
              font-family: 苹方-简;
            `)}
      >
        拥有OurMetaverseDAO NFT <br />
        便可拥有的权益
      </div>
      <div
        className={css(`
        width:280px;
        height:19px;
        margin-top:36px;
        margin-bottom:92px;
        background: radial-gradient(120px at 100px -6px , #000, #060F35, #142E9D,#041352);;
      `)}
      ></div>
      <Row gutter={[32, 32]}>
        {bannerBlockData.map((item) => (
          <Col span={12}>
            <div
              className={css(`
              width:100%;
              background-image:url('/banner-bg.png');
              display:flex;
              flex-direction:row;
              background-size: 100% 100%;
              padding-right:54px;
            `)}
            >
              <div>
                <img
                  className={css(`
                    width:50px;
                    height:50px;
                    margin: 54px 35px 66px 35px;
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
              `)}
                >
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
              `)}
                >
                  {item.content}
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Component;
