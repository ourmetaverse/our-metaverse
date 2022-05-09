import { Layout, Menu, Divider } from 'antd';
import { contractAddress } from '@/constants';
import { Link, useIntl, setLocale, getLocale } from 'umi';
import { css } from '@emotion/css';

const { Header, Content, Footer } = Layout;
const maxWidth = 1440;

const CommonLayout: React.FC = ({ children }) => {
  const { formatMessage } = useIntl();
  return (
    <Layout>
      <Header>
        <div
          className={css`
            max-width: ${maxWidth}px;
            margin: 0 auto;
          `}
        >
          <Link
            to="/"
            className={css`
              float: left;
              height: 31px;
              line-height: 31px;
              margin: 16px 24px 16px 0;
              cursor: pointer;
              font-size: 28px;
              color: white;
            `}
          >
            OurMetaverseDAO
          </Link>
          <Menu
            theme="dark"
            mode="horizontal"
            className={css`
              float: right;
            `}
          >
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
