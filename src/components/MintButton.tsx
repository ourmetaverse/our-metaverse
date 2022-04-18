import { useState } from 'react';
import { Button, Divider } from 'antd';
import { useModel, useIntl } from 'umi';
import showMessage from '@/utils/showMessage';
import { ethers } from 'ethers';
import { bookPrice, commonPrice, moviePrice, wechatLink } from '@/constants';

const ETHERSCAN_DOMAIN =
  CHAIN_ID === 'rinkeby' ? 'rinkeby.etherscan.io' : 'etherscan.io';

export interface MintButtonProps {
  type?: 'common' | 'book' | 'movie';
  disabled?: boolean;
  mintAmount?: number;
  onMinted?: () => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function MintButton(props: MintButtonProps) {
  const { disabled, mintAmount = 1, type = 'common', children } = props;
  const [minting, setMinting] = useState(false);
  const { signer, contract } = useModel('user');
  const { formatMessage } = useIntl();

  let price = commonPrice;
  if (type === 'book') {
    price = bookPrice;
  } else if (type === 'movie') {
    price = moviePrice;
  }

  return (
    <Button
      disabled={disabled}
      loading={minting}
      type="primary"
      onClick={async () => {
        if (minting || props.disabled || !contract || !signer) {
          return;
        }
        setMinting(true);
        try {
          const contractWithSigner = contract.connect(signer);
          const value = ethers.utils.parseEther(String(mintAmount * price));
          let tx;
          if (type === 'book') {
            tx = await contractWithSigner.buyBookToken({
              value,
            });
          } else if (type === 'movie') {
            tx = await contractWithSigner.buyMovieToken({
              value,
            });
          } else {
            tx = await contractWithSigner.mint(props.mintAmount, {
              value,
            });
          }

          const response = await tx.wait();
          showMessage({
            type: 'success',
            title: formatMessage({
              id: 'mint_succeed',
            }),
            body: (
              <div>
                <a
                  href={`https://${ETHERSCAN_DOMAIN}/tx/${response.transactionHash}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {formatMessage({
                    id: 'view_on_etherscan',
                  })}
                </a>
                <Divider type="vertical" />
                <a
                  href="https://opensea.io/account"
                  target="_blank"
                  rel="noreferrer"
                >
                  {formatMessage({
                    id: 'view_on_opensea',
                  })}
                </a>
                <Divider />
                <a href={wechatLink} target="_blank" rel="noreferrer">
                  OURM 的家人们点我加入微信群
                </a>
              </div>
            ),
          });
          props.onMinted && props.onMinted();
        } catch (err: any) {
          showMessage({
            type: 'error',
            title: formatMessage({
              id: 'mint_failed',
            }),
            body: err.data?.message || err.message,
          });
        }
        setMinting(false);
      }}
      style={props.style}
    >
      {minting
        ? formatMessage({
            id: 'minting',
          })
        : children}
    </Button>
  );
}
