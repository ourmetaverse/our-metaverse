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
        <div className="ourm-title">ERC721M - 服务创作者经济</div>
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
          让 Web3 助力创作者经济，希望每个创作者都可以收获创作的价值。
        </div>
        <p>
          OurMetaverseDAO NFT 将一篇元宇宙科幻小说铸造为 NFT，在 ERC721
          合约的基础上提供了 IP
          二次开发和权益分成的一套机制，希望通过这套机制来吸引更多创作者加入来完善整个
          IP 生态。同时借该项目提出 ERC721M 的构想，希望能够通过构建出 ERC721M
          来促进 Web3 创作者经济的发展。
          <a
            target="blank"
            href="https://mirror.xyz/our-metaverse.eth/8HoDHAMojp86tXkaw48Z2Qz6UJAhb0qMyIRrSoBvhpw"
          >
            阅读文章
          </a>
        </p>
      </div>
      <div
        className={css`
          margin: 60px 0;
        `}
      >
        <h2>合约特性</h2>
        <BenefitItem
          width="100%"
          item={{
            title: '商业授权管理',
            icon: 'index-icon-0.png', // TODO
            content:
              'OurMetaverseDAO NFT Holder 可以通过调用合约接口 Grant 可以获取商业授权，第一次无需费用，后面每次新增 0.3ETH 费用，提供了一种在 CC0 之外的著作权管理办法，让著作权的流转和开发更加方便，也能带给 Holder 持续的收益。',
          }}
        />
        <BenefitItem
          width="100%"
          item={{
            title: '权益分发机制',
            icon: 'index-icon-0.png', // TODO
            content:
              'OurMetaverseDAO NFT Holder 可以通过调用合约接口 Grant 可以获取商业授权，第一次无需费用，后面每次新增 0.3ETH 费用，提供了一种在 CC0 之外的著作权管理办法，让著作权的流转和开发更加方便，也能带给 Holder 持续的收益。',
          }}
        />
        <BenefitItem
          width="100%"
          item={{
            title: '图书出版权和影视改编权管理',
            icon: 'index-icon-0.png', // TODO
            content:
              'OurMetaverseDAO NFT Holder 可以通过调用合约接口 Grant 可以获取商业授权，第一次无需费用，后面每次新增 0.3ETH 费用，提供了一种在 CC0 之外的著作权管理办法，让著作权的流转和开发更加方便，也能带给 Holder 持续的收益。',
          }}
        />
      </div>
      <Markdown zh={whitepaper} en={enwhitepaper} />
    </div>
  );
};
