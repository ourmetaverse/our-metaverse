import { useEffect, useState } from 'react';
import { totalSupply, gweiPerETH, moviePrice, bookPrice } from '@/constants';
import { useModel, useIntl } from 'umi';
import {
  Button,
  Divider,
  Input,
  List,
  message,
  Space,
  Typography,
  Image,
} from 'antd';
import { BigNumber, ethers } from 'ethers';
import { grantPrice, grantLimitLength } from '@/constants';

export default (props: { token: number }) => {
  const { token } = props;
  const [rewardBalance, setRewardBalance] = useState<number>(0);
  const [grants, setGrants] = useState<string[]>([]);
  const [grantStr, setGrantStr] = useState<string>('');
  const [tokenURI, setTokenURI] = useState<string>('');
  const { contract, ConnectTip, address, contractWithSigner } =
    useModel('user');
  const { formatMessage } = useIntl();
  const [owner, setOwner] = useState<string>();

  if (token >= totalSupply) {
    return <div>{formatMessage({ id: 'empty_token_tip' }, { token })}</div>;
  }

  useEffect(() => {
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
      contract.tokenURI(token).then(setTokenURI);
    }
  }, [contract]);

  if (!contract || !contractWithSigner) {
    return <ConnectTip />;
  }

  return (
    <div>
      Owner：{owner}
      <Space>
        <div>
          {formatMessage({ id: 'available_reward' })}：
          {rewardBalance / gweiPerETH} ETH
        </div>
        {rewardBalance > 0 && address === owner ? (
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
            {formatMessage({ id: 'withdraw_now' })}
          </Button>
        ) : null}
      </Space>
      <List
        header={<div>{formatMessage({ id: 'grant_list' })}</div>}
        footer={
          address === owner ? (
            <Input.Group compact>
              <Input
                style={{ width: 'calc(100% - 200px)' }}
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
                  contractWithSigner.grant(token, grantStr, {
                    value,
                  });
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
