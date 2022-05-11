import { Layout, Menu, Divider } from 'antd';
import { contractAddress } from '@/constants';
import { Link, useIntl, setLocale, getLocale, IRouteComponentProps } from 'umi';
import { css } from '@emotion/css';
import ConnectWallet from '@/components/ConnectWallet';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { mobile, primaryColor, maxWidth, navHeight } from '@/utils/css';

const { Header, Content, Footer } = Layout;

const CommonLayout: React.FC<IRouteComponentProps> = ({
  children,
  location,
}) => {
  const { formatMessage } = useIntl();
  const isCN = getLocale() === 'zh-CN';
  return (
    <Layout>
      <Header
        className={css`
          height: ${navHeight};
          line-height: ${navHeight};
          background: transparent;
          z-index: 10;
          ${mobile} {
            padding: 0 16px;
          }
        `}
      >
        <div
          className={css`
            background: linear-gradient(
              rgba(0, 0, 0, 0.88),
              rgba(0, 0, 0, 0.68)
            );
            opacity: 0.5;
            height: ${navHeight};
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
          `}
        ></div>
        <div
          className={css`
            max-width: ${maxWidth};
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
          `}
        >
          <Link
            to="/"
            className={css`
              cursor: pointer;
              font-size: 28px;
              color: white;
              z-index: 2;
              opacity: 0.9;
              &:hover {
                opacity: 1;
                color: white;
              }
            `}
          >
            <img
              src="/favicon.png"
              className={css`
                height: 50px;
                margin-right: 8px;
                border-radius: 50%;
                margin-top: -5px;
                opacity: 1;
              `}
            />
            <span
              className={css`
                display: inline-block;
                ${mobile} {
                  display: none;
                }
              `}
            >
              OurMetaverse
            </span>
          </Link>
          <Menu
            theme="dark"
            mode="horizontal"
            overflowedIndicator={<MenuUnfoldOutlined />}
            defaultSelectedKeys={[location.pathname]}
            style={{
              backgroundColor: 'transparent',
            }}
            className={css`
              width: ${isCN ? 610 : 800}px;

              ${mobile} {
                width: ${isCN ? 218 : 209}px;
              }
              .ant-menu-item-selected a {
                border-bottom: 5px solid ${primaryColor};
                padding-bottom: 6px;
              }
            `}
          >
            <Menu.Item key="index">
              <Link to="/">
                {formatMessage({
                  id: 'index',
                })}
              </Link>
            </Menu.Item>
            <Menu.Item key="/read">
              <Link to="/read">
                {formatMessage({
                  id: 'read',
                })}
              </Link>
            </Menu.Item>
            <Menu.Item key="/whitepaper">
              <Link to="/whitepaper">
                {formatMessage({
                  id: 'wihte_paper',
                })}
              </Link>
            </Menu.Item>
            <Menu.Item key="/nfts">
              <Link to="/nfts">NFTs</Link>
            </Menu.Item>
            <Menu.Item key="/community">
              <Link to="/community">
                {formatMessage({
                  id: 'community',
                })}
              </Link>
            </Menu.Item>
            <Menu.Item>
              <a
                onClick={() => {
                  if (isCN) {
                    setLocale('en-US');
                  } else {
                    setLocale('zh-CN');
                  }
                }}
              >
                {formatMessage({ id: 'lang_switch' })}
              </a>
            </Menu.Item>
            <Menu.Item>
              <ConnectWallet />
            </Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content
        className={css`
          margin-top: -${navHeight};
        `}
      >
        {children}
      </Content>
      <Footer
        className={css`
          padding-top: 114px;
          a {
            color: white;
            width: 184px;
            display: inline-block;
            &:hover {
              opacity: 0.7;
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
          <a href={`https://www.our-metaverse.xyz`}>Website</a>
          <Divider type="vertical" />
          <a href={`https://twitter.com/OurMetaverseDAO`}>Twitter</a>
          <Divider type="vertical" />
          <a href={`https://discord.gg/EPh8xZZ6yz`}>Discord</a>
          <Divider type="vertical" />
          <a href={`https://opensea.io/collection/our-metaverse`}>Opensea</a>
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
    </Layout>
  );
};

export default CommonLayout;
