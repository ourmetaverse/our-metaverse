import { Layout, Menu, Drawer } from 'antd';
import { Link, useIntl, setLocale, getLocale, IRouteComponentProps } from 'umi';
import { css } from '@emotion/css';
import { MenuOutlined } from '@ant-design/icons';
import ConnectWallet from '@/components/ConnectWallet';
import { mobile, primaryColor, maxWidth, navHeight } from '@/utils/css';
import { useResponsive } from 'ahooks';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';

const { Header, Content } = Layout;

const CommonLayout: React.FC<IRouteComponentProps> = ({
  children,
  location,
}) => {
  const [visible, setVisible] = useState(false);
  const { formatMessage } = useIntl();
  const { pc } = useResponsive();
  const isCN = getLocale() === 'zh-CN';
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const items = (
    <>
      <Menu.Item key="/">
        <Link to="/">
          {formatMessage({
            id: 'index',
          })}
        </Link>
      </Menu.Item>
      <Menu.Item key="/mint">
        <Link to="/mint">Mint</Link>
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
        <Link to="/nfts">
          {formatMessage({
            id: 'nfts',
          })}
        </Link>
      </Menu.Item>
      <Menu.Item key="/community">
        <Link to="/community">
          {formatMessage({
            id: 'community',
          })}
        </Link>
      </Menu.Item>
      <Menu.Item key="language">
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
          position: fixed;
          width: 100%;
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
                opacity: 0.7;
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
            `}
          >
            <div
              className={css`
                overflow: hidden;
                background: url(/logo.svg) no-repeat;
                background-size: 300px 55px;
                background-position-y: 16px;
                height: 100%;
                &:hover {
                  opacity: 1;
                  color: white;
                }
                ${mobile} {
                  font-size: 20px;
                  width: 55px;
                  background-size: 200px 37px;
                  background-position-y: 25px;
                }
              `}
            />
          </Link>
          {pc ? (
            <Menu
              theme="dark"
              mode="horizontal"
              disabledOverflow
              selectedKeys={[location.pathname]}
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
              <Menu.Item key="wallet">
                <ConnectWallet style={{ top: -18 }} />
              </Menu.Item>
            </Menu>
          ) : null}
          {!pc ? <ConnectWallet size="small" style={{ top: 24 }} /> : null}
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
              borderRight: 'none',
              backgroundColor: 'transparent',
            }}
          >
            {items}
          </Menu>
        </Drawer>
      </Header>
      <Content>{children}</Content>
      {location.pathname !== '/' ? <Footer /> : null}
    </Layout>
  );
};

export default CommonLayout;
