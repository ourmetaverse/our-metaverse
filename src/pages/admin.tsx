import { useModel } from 'umi';
import { Button, Divider, message, Space, Input } from 'antd';
import { toEth } from '@/utils/format';
import { useState } from 'react';
import { css } from '@emotion/css';

export default () => {
  const { contract, ConnectTip, contractWithSigner } = useModel('user');
  const { mintBalance, started } = useModel('balance');
  const [baseURI, setBaseURI] = useState<string>('');
  const [tokens, setTokens] = useState<string>('');

  if (!contract || !contractWithSigner) {
    return (
      <div
        className={css`
          padding-top: 120px;
        `}
      >
        <ConnectTip />
      </div>
    );
  }

  return (
    <div
      className={css`
        padding-top: 120px;
      `}
    >
      <Button
        disabled={started}
        onClick={async () => {
          await contractWithSigner.init();
          message.success('init succeed');
        }}
        type="primary"
      >
        init
      </Button>
      <Divider />
      <Space>
        <Input
          value={baseURI}
          onChange={(e) => {
            setBaseURI(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            contractWithSigner
              .setBaseURI(baseURI)
              .then(() => {
                message.success('success');
              })
              .catch((e: any) => {
                message.error(e.data?.message || e.message);
              });
          }}
        >
          setBaseURI("{baseURI}")
        </Button>
      </Space>
      <Divider />
      <Space>
        Mint balance: {toEth(mintBalance)} ETH
        {mintBalance.gt(0) && (
          <Button
            onClick={() => {
              contractWithSigner.receiveMintBalance().catch((e: any) => {
                message.error(e.data?.message || e.message);
              });
            }}
          >
            receiveMintBalance
          </Button>
        )}
      </Space>
      <Divider />
      <Space>
        <Input
          value={tokens}
          onChange={(e) => {
            setTokens(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            const tokenIds: number[] = tokens
              .split(',')
              .map((t) => parseInt(t));
            console.log('get tokenIds', tokens.split(','));
            contractWithSigner
              .receiveRewardBalanceWithTokens(tokenIds)
              .then(() => {
                message.success('success');
              })
              .catch((e: any) => {
                message.error(e.data?.message || e.message);
              });
          }}
        >
          receiveRewardBalanceWithTokens([{tokens}])
        </Button>
      </Space>
    </div>
  );
};
