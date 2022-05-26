import { Layout, Divider } from 'antd';
import { contractAddress } from '@/constants';
import { css } from '@emotion/css';
import { mobile } from '@/utils/css';
import { useResponsive } from 'ahooks';

const { Footer } = Layout;

export default () => {
  const { pc } = useResponsive();
  return (
    <Footer
      className={css`
        padding-top: 114px;
        position: relative;
        a {
          color: white;
          width: 184px;
          display: inline-block;
          &:hover {
            opacity: 0.7;
          }
          ${mobile} {
            width: 80px;
          }
        }
        .ant-divider {
          background-color: #d8d8d8;
        }
      `}
      style={{ textAlign: 'center' }}
    >
      <div>
        <a href={`https://etherscan.io/address/${contractAddress}`}>
          Etherscan
        </a>
        <Divider type="vertical" />
        <a href={`https://opensea.io/collection/our-metaverse`}>Opensea</a>
        <Divider type="vertical" />
        <a href={`https://v1.our-metaverse.xyz`}>V1 Site</a>
        {pc ? <Divider type="vertical" /> : <br />}
        <a href={`https://discord.gg/EPh8xZZ6yz`}>Discord</a>
        <Divider type="vertical" />
        <a href={`https://twitter.com/OurMetaverseDAO`}>Twitter</a>
      </div>
      <div
        className={css`
          margin-top: 78px;
          color: #979797;
        `}
      >
        OurMetaverse ©2022 Created By OurMetaverseDAO
      </div>
    </Footer>
  );
};
