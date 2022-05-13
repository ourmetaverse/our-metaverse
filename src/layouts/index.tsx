import { Layout, Menu, Divider, Drawer } from 'antd';
import { contractAddress } from '@/constants';
import { Link, useIntl, setLocale, getLocale, IRouteComponentProps } from 'umi';
import { css } from '@emotion/css';
import { MenuOutlined } from '@ant-design/icons';
import ConnectWallet from '@/components/ConnectWallet';
import { mobile, primaryColor, maxWidth, navHeight } from '@/utils/css';
import { useResponsive } from 'ahooks';
import { useState } from 'react';

const { Header, Content, Footer } = Layout;

const CommonLayout: React.FC<IRouteComponentProps> = ({
  children,
  location,
}) => {
  const [visible, setVisible] = useState(false);
  const { formatMessage } = useIntl();
  const { pc } = useResponsive();
  const isCN = getLocale() === 'zh-CN';
  const items = (
    <>
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
    </>
  );
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
          {!pc ? (
            <MenuOutlined
              className={css`
                display: inline-block;
                line-height: 95px;
                margin-right: 16px;
                font-size: 28px;
                z-index: 2;
              `}
              onClick={() => {
                console;
                setVisible(true);
              }}
            />
          ) : null}
          <Link
            to="/"
            className={css`
              flex: 1;
              cursor: pointer;
              font-size: 28px;
              color: white;
              z-index: 2;
              opacity: 0.9;
              &:hover {
                opacity: 1;
                color: white;
              }
              ${mobile} {
                font-size: 20px;
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
                ${mobile} {
                  height: 40px;
                }
              `}
            />
            <span
              className={css`
                display: inline-block;
              `}
            >
              OurMetaverse
            </span>
          </Link>
          {pc ? (
            <Menu
              theme="dark"
              mode="horizontal"
              disabledOverflow
              defaultSelectedKeys={[location.pathname]}
              style={{
                backgroundColor: 'transparent',
              }}
              className={css`
                .ant-menu-item-selected a {
                  border-bottom: 5px solid ${primaryColor};
                  padding-bottom: 6px;
                }
              `}
            >
              {items}
              <Menu.Item>
                <ConnectWallet />
              </Menu.Item>
            </Menu>
          ) : null}
          {!pc ? <ConnectWallet /> : null}
        </div>
        <Drawer
          placement="left"
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
        >
          <Menu
            onClick={() => {
              setVisible(false);
            }}
            style={{
              backgroundColor: 'transparent',
            }}
          >
            {items}
          </Menu>
        </Drawer>
      </Header>
      <Content
        className={css`
          margin-top: -${navHeight};
        `}
      >
        {children}
      </Content>
      {location.pathname !== '/' ? (
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
            <a href={`https://www.our-metaverse.xyz`}>Website</a>
            <Divider type="vertical" />
            <a href={`https://twitter.com/OurMetaverseDAO`}>Twitter</a>
            {pc ? <Divider type="vertical" /> : <br />}
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
      ) : null}
    </Layout>
  );
};

export default CommonLayout;
