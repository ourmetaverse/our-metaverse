import enwhitepaper from '@/docs/en/whitepaper.md';
import whitepaper from '@/docs/whitepaper.md';
import Markdown from '@/components/Markdown';
import { css } from '@emotion/css';
import { maxWidth, navHeight, mobile, primaryColor } from '@/utils/css';
import { useIntl } from 'umi';
import BlueLine from '@/components/BlueLine';
import BenefitItem from '@/components/BenefitItem';

export default () => {
  const { formatMessage } = useIntl();
  return (
    <div
      className={css`
        ${mobile} {
          padding: 16px;
          padding-top: ${navHeight};
        }
        padding-top: ${navHeight};
        max-width: ${maxWidth};
        margin: 0 auto;
      `}
    >
      <div
        className={css(`
        .ourm-title {
          color: ${primaryColor};
          font-size:40px;
          letter-spacing:0.22px;
          line-height:80px;
          ${mobile} {
            font-size: 40px;
            line-height:60px;
          }
        }
      `)}
      >
        <div className="ourm-title">{formatMessage({ id: 'erc_title' })}</div>
        <BlueLine left />
        <div
          className={css(`
            font-size:20px;
            letter-spacing:0.06px;
            line-height:40px;
            margin-bottom: 16px;
            font-weight:bold;
          `)}
        >
          {formatMessage({ id: 'erc_subtitle' })}
        </div>
        <p>
          {formatMessage({ id: 'erc_desc' })}
          <a
            target="blank"
            href="https://mirror.xyz/our-metaverse.eth/8HoDHAMojp86tXkaw48Z2Qz6UJAhb0qMyIRrSoBvhpw"
          >
            {formatMessage({ id: 'erc_read' })}
          </a>
        </p>
      </div>
      <div
        className={css`
          margin: 60px 0;
        `}
      >
        <h2>{formatMessage({ id: 'erc_contract_title' })}</h2>
        <BenefitItem
          width="100%"
          item={{
            title: formatMessage({ id: 'erc_contract_1' }),
            icon: 'index-icon-0.png',
            content: formatMessage({ id: 'erc_contract_1_desc' }),
          }}
        />
        <BenefitItem
          width="100%"
          item={{
            title: formatMessage({ id: 'erc_contract_2' }),
            icon: 'index-icon-3.png',
            content: formatMessage({ id: 'erc_contract_2_desc' }),
          }}
        />
        <BenefitItem
          width="100%"
          item={{
            title: formatMessage({ id: 'erc_contract_3' }),
            icon: 'index-icon-2.png',
            content: formatMessage({ id: 'erc_contract_3_desc' }),
          }}
        />
      </div>
      <Markdown zh={whitepaper} en={enwhitepaper} />
    </div>
  );
};
