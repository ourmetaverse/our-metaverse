import { useEffect, useState } from 'react';
import { totalSupply, gweiPerETH, moviePrice, bookPrice } from '@/constants';
import { useModel, useIntl, IRouteProps, history } from 'umi';
import {
  Button,
  Input,
  List,
  message,
  Space,
  Typography,
  Select,
  Image,
} from 'antd';
import { BigNumber, ethers } from 'ethers';
import { grantPrice, grantLimitLength } from '@/constants';
import { css } from '@emotion/css';
import ImageIcon from '@/components/ImageIcon';
import { mobile } from '@/utils/css';
import { useRequest, useResponsive } from 'ahooks';
import request from 'umi-request';

const { Option } = Select;

interface Props extends IRouteProps {
  token?: number;
}

const GRANT_INFO = {
  ipfs: {
    reg: /^\w{46}(\/.*)?$/,
    placeholder: 'CID like QmP1vMSaw3rG2coQaBfgqBhax1t8qyyng1Z91cjcH8MvBc',
  },
  ethereum: {
    reg: /^0x[0-9a-fA-F]{40}$/,
    placeholder: 'Address like 0xEcd0D12E21805803f70de03B72B1C162dB0898d9',
  },
  custom: {
    reg: /^.{1, 128}$/,
    placeholder: 'Custom text length less then 128',
  },
};

export default (props: Props) => {
  // props token 存在说明是在 pc 端直接嵌套
  // 否则通过 url 获取 token
  let token = props.token;
  if (token === undefined) {
    token = parseInt(props.location.query.token);
  }
  const { pc } = useResponsive();
  const [rewardBalance, setRewardBalance] = useState<number>(0);
  const [grants, setGrants] = useState<string[]>([]);
  const [grantStr, setGrantStr] = useState<string>('');
  const { contract, ConnectTip, address, contractWithSigner } =
    useModel('user');
  const { formatMessage } = useIntl();
  const [owner, setOwner] = useState<string>();
  const [grantType, setGrantType] = useState<'ipfs' | 'ethereum' | 'custom'>(
    'ethereum',
  );

  const { data: nftImage } = useRequest(
    async () => {
      if (token === undefined || pc) {
        return '';
      }
      const { images = [] } = await request(
        'https://api.our-metaverse.xyz/api/images',
        {
          params: {
            start: token,
            len: 1,
          },
        },
      );
      return images[0];
    },
    {
      onError: (e) => {
        message.error(e.message);
      },
      refreshDeps: [token],
    },
  );

  useEffect(() => {
    if (pc && props.location?.query.token) {
      history.push(`/nfts?token=${token}`);
    }
    if (contract) {
      contract
        .getRewardBalanceWithToken(token)
        .then((balance: BigNumber) => {
          setRewardBalance(Number(balance));
        })
        .catch((e: any) => {
          message.error(e.data?.message || e.message);
        });
      contract
        .ownerOf(token)
        .then((owner: string) => {
          setOwner(owner);
        })
        .catch((e: any) => {
          // not mint yet
          setOwner(formatMessage({ id: 'not_mint_yet' }));
        });
      contract
        .getGrantsWithToken(token)
        .then(setGrants)
        .catch((e: any) => {
          message.error(e.data?.message || e.message);
        });
    }
  }, [contract, token, pc]);

  if (!contract || !contractWithSigner) {
    return (
      <div
        className={css`
          margin-top: 100px;
        `}
      >
        <ConnectTip />
      </div>
    );
  }

  if (token >= totalSupply) {
    return <div>{formatMessage({ id: 'empty_token_tip' }, { token })}</div>;
  }

  return (
    <div
      className={css`
        ${mobile} {
          padding: 120px 16px;
        }
      `}
    >
      <div
        className={css`
          font-size: 24px;
          opacity: 0.5;
          margin-top: -10px;
        `}
      >
        OurMetaverse
      </div>
      <div
        className={css`
          font-size: 50px;
          color: white;
        `}
      >
        # {token}
      </div>
      {!pc ? (
        <Image
          className={css`
            width: 100%;
          `}
          src={nftImage || `/blindbox2.gif`}
        />
      ) : null}
      <Space
        className={css`
          margin-bottom: 12px;
        `}
      >
        <a
          target="_blank"
          title="OpenSea"
          href={`https://opensea.io/assets/0xecd0d12e21805803f70de03b72b1c162db0898d9/${token}`}
        >
          <ImageIcon type="opensea" />
        </a>
      </Space>
      <Space>
        {rewardBalance > 0 && address === owner ? (
          <>
            <Button
              onClick={() => {
                contractWithSigner
                  .receiveRewardBalanceWithToken(token)
                  .then(() => {
                    message.success(formatMessage({ id: 'withdraw_succeed' }));
                  })
                  .catch((e: any) => {
                    message.error(e.data?.message || e.message);
                  });
              }}
            >
              {formatMessage({ id: 'available_reward' })}：
              {rewardBalance / gweiPerETH} ETH{' '}
              {formatMessage({ id: 'withdraw_now' })}
            </Button>
          </>
        ) : null}
      </Space>
      <List
        header={<div>{formatMessage({ id: 'grant_list' })}</div>}
        footer={
          address === owner ? (
            <Input.Group compact>
              <Input
                placeholder={GRANT_INFO[grantType].placeholder}
                addonBefore={
                  <Select
                    onChange={setGrantType}
                    value={grantType}
                    className="select-before"
                  >
                    <Option value="ethereum">Ethereum</Option>
                    <Option value="ipfs">ipfs://</Option>
                    <Option value="custom">Custom</Option>
                  </Select>
                }
                style={{ width: 'calc(100% - 67px)' }}
                value={grantStr}
                onChange={(e) => {
                  setGrantStr(e.target.value);
                }}
              />
              <Button
                type="primary"
                onClick={() => {
                  if (!grantStr) {
                    message.error(formatMessage({ id: 'grant_required' }));
                    return;
                  }
                  if (!GRANT_INFO[grantType].reg.test(grantStr)) {
                    message.error(formatMessage({ id: 'grant_validate' }));
                    return;
                  }
                  if (grantStr.length > grantLimitLength) {
                    message.error(
                      formatMessage(
                        { id: 'grant_limit' },
                        { grantLimitLength },
                      ),
                    );
                    return;
                  }
                  let price = grantPrice;
                  if (token === 0) {
                    price = moviePrice;
                  } else if (token === 1) {
                    price = bookPrice;
                  }
                  const value = ethers.utils.parseEther(
                    String(grants.length * price),
                  );
                  contractWithSigner.grant(
                    token,
                    grantType === 'ipfs' ? `ipfs://${grantStr}` : grantStr,
                    {
                      value,
                    },
                  );
                }}
              >
                {formatMessage({ id: 'add_grant' })}
              </Button>
            </Input.Group>
          ) : null
        }
        bordered
        dataSource={grants}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>[GRANT]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  );
};
