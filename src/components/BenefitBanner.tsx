import React from 'react';
import { Row, Col } from 'antd';
import { useIntl } from 'umi';
import { css } from '@emotion/css';

interface Props {}

const Component: React.FC<Props> = () => {
  const { formatMessage } = useIntl();

  const bannerBlockData = [
    {
      icon: 'index-icon-0.png',
      title: formatMessage({ id: 'index_benefit_membership' }),
      content: formatMessage({ id: 'index_benefit_membership_content' }),
    },
    {
      icon: 'index-icon-1.png',
      title: formatMessage({ id: 'index_benefit_pfp' }),
      content: formatMessage({ id: 'index_benefit_pfp_content' }),
    },
    {
      icon: 'index-icon-2.png',
      title: formatMessage({ id: 'index_benefit_grant' }),
      content: formatMessage({ id: 'index_benefit_grant_content' }),
    },
    {
      icon: 'index-icon-3.png',
      title: formatMessage({ id: 'index_benefit_share' }),
      content: formatMessage({ id: 'index_benefit_share_content' }),
    },
  ];

  return (
    <div
      className={css(`
        width:100%;
        height: 100vh;
        background:transparent;
        padding: 193px 106px 106px 106px;
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
        {formatMessage({ id: 'index_benefit_title_1' })} <br />
        {formatMessage({ id: 'index_benefit_title_2' })}
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
          <Col span={12} key={item.title}>
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
