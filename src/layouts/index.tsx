import { Layout, Menu, Divider } from 'antd';
import { contractAddress } from '@/constants';
import { Link, useIntl, setLocale, getLocale } from 'umi';
import { css } from '@emotion/css';
import ConnectWallet from '@/components/ConnectWallet';

const { Header, Content, Footer } = Layout;
const maxWidth = 1440;

const CommonLayout: React.FC = ({ children }) => {
  const { formatMessage } = useIntl();
  return (
    <Layout>
      <Header
        className={css`
          height: 87px;
          line-height: 87px;
        `}
      >
        <div
          className={css`
            max-width: ${maxWidth}px;
            margin: 0 auto;
            display: flex;
          `}
        >
          <Link
            to="/"
            className={css`
              cursor: pointer;
              font-size: 28px;
              margin-top: -3px;
              color: white;
            `}
          >
            OurMetaverse
          </Link>
          <Menu
            theme="dark"
            mode="horizontal"
            className={css`
              .ant-menu-item-selected a {
                border-bottom: 5px solid #1443ff;
                padding-bottom: 6px;
              }
            `}
          >
            <Menu.Item key="index">
              <Link to="/">
                {formatMessage({
                  id: '首页',
                })}
              </Link>
            </Menu.Item>
            <Menu.Item key="read">
              <Link to="/read">
                {formatMessage({
                  id: 'read',
                })}
              </Link>
            </Menu.Item>
            <Menu.Item key="whitepaper">
              <Link to="/whitepaper">
                {formatMessage({
                  id: 'wihte_paper',
                })}
              </Link>
            </Menu.Item>
            <Menu.Item key="nfts">
              <Link to="/nfts">NFTs</Link>
            </Menu.Item>
            <Menu.Item key="community">
              <Link to="/community">
                {formatMessage({
                  id: 'community',
                })}
              </Link>
            </Menu.Item>
            <Menu.Item>
              <a
                onClick={() => {
                  if (getLocale() === 'zh-CN') {
                    setLocale('en-US');
                  } else {
                    setLocale('zh-CN');
                  }
                }}
              >
                {formatMessage({ id: 'lang_switch' })}
              </a>
            </Menu.Item>
          </Menu>
          <ConnectWallet />
        </div>
      </Header>
      <Content
        className={css`
          padding: 0 50px;
        `}
      >
        <div
          className={css`
            max-width: ${maxWidth}px;
            margin: 16px auto;
          `}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <a href={`https://etherscan.io/address/${contractAddress}`}>Contract</a>
        <Divider />
        OurMetaverseDAO ©2022
      </Footer>
    </Layout>
  );
};

export default CommonLayout;
