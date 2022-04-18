import {
  IRouteComponentProps,
  NavLink,
  Link,
  useIntl,
  setLocale,
  getLocale,
} from 'umi';
import { Layout, Space, Divider, Badge } from 'antd';
import ConnectWallet from '@/components/ConnectWallet';
import { contractAddress } from '@/constants';
import styles from './style.less';

const { Content, Footer } = Layout;

export default function DappLayout({ children }: IRouteComponentProps) {
  const { formatMessage } = useIntl();
  return (
    <Layout className={styles.layout}>
      <div className={styles.header}>
        <Badge
          count={CHAIN_ID === 'rinkeby' ? 'Rinkeby' : 'DAO'}
          color="geekblue"
        >
          <h1 className={styles.title}>OurMetaverse</h1>
        </Badge>
        <div>
          <Link to="/">
            {formatMessage({
              id: 'novel_name',
            })}
          </Link>
          <Divider type="vertical" />
          <NavLink to="/whitepaper">
            {formatMessage({
              id: 'wihte_paper',
            })}
          </NavLink>
        </div>
        <Space>
          <NavLink to="/mint">Mint</NavLink>
          <NavLink to="/reward">
            {formatMessage({
              id: 'reward',
            })}
          </NavLink>
          <NavLink to="/nfts">NFTs</NavLink>
          <NavLink to="/community">
            {formatMessage({
              id: 'community',
            })}
          </NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/roadmap">{formatMessage({ id: 'milestone' })}</NavLink>
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
        </Space>
        <Divider />
        <ConnectWallet />
      </div>
      <Content className={styles.container}>
        <div className={styles.content}>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center', padding: '24px 8px' }}>
        Contract Address{' '}
        <a
          href={`https://${
            CHAIN_ID === 'rinkeby' ? 'rinkeby.' : ''
          }etherscan.io/address/${contractAddress}`}
        >
          {contractAddress}
        </a>
        <Divider />
        OurMetaverse ©2022 Created by{' '}
        <a href="https://okjk.co/XTMVgw">wanderingearth.eth</a>
      </Footer>
    </Layout>
  );
}
