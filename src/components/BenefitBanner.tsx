import React from 'react';
import { useIntl } from 'umi';
import { css } from '@emotion/css';
import BlueLine from '@/components/BlueLine';
import { mobile } from '@/utils/css';
import BenefitItem from '@/components/BenefitItem';

const Component: React.FC = () => {
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
        padding: 193px 0 106px 0;
        ${mobile} {
          padding: 16px;
          height: auto;
        }
      `)}
    >
      <div
        className={css(`
          color: #1443FF;
          font-size:40px;
          letter-spacing:0.13px;
          line-height:60px;
          font-family: 苹方-简;
          ${mobile} {
            font-size: 18px;
            line-height:32px;
          }
        `)}
      >
        {formatMessage({ id: 'index_benefit_title_1' })} <br />
        {formatMessage({ id: 'index_benefit_title_2' })}
      </div>
      <BlueLine left />
      <div
        className={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          ${mobile} {
            flex-direction: column;
          }
        `}
      >
        {bannerBlockData.map((item) => (
          <BenefitItem item={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Component;
