import { useModel, useIntl } from 'umi';
import { Divider, Button, Modal } from 'antd';
import { toEth } from '@/utils/format';
import { totalSupply, contractAddress } from '@/constants';

export default () => {
  const { contract, ConnectTip, contractWithSigner } = useModel('user');
  const { formatMessage } = useIntl();
  const { balance, availableRewardBalance } = useModel('balance');

  if (!contract || !contractWithSigner) {
    return <ConnectTip />;
  }

  return (
    <div>
      {formatMessage({
        id: 'current_balance',
      })}
      : {toEth(balance)} ETH
      <Divider />
      {formatMessage({ id: 'history_reward_balance' })}:{' '}
      {toEth(availableRewardBalance)} ETH
      <Divider />
      {formatMessage({ id: 'history_reward_balance_per_token' })}:{' '}
      {toEth(availableRewardBalance.div(totalSupply))} ETH
      <Divider />
      <Button
        onClick={() => {
          Modal.info({
            content: (
              <div>
                <p>{formatMessage({ id: 'donate_tip' })}:</p>
                <p>{contractAddress}</p>
              </div>
            ),
          });
        }}
      >
        {formatMessage({ id: 'donate' })}
      </Button>
    </div>
  );
};
