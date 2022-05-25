import { useState } from 'react';
import { Button, Divider } from 'antd';
import { useModel, useIntl } from 'umi';
import showMessage from '@/utils/showMessage';
import { ethers } from 'ethers';
import {
  bookPrice,
  commonPrice,
  maxMintPerAddr,
  moviePrice,
  wechatLink,
} from '@/constants';
import { css } from '@emotion/css';

const ETHERSCAN_DOMAIN =
  CHAIN_ID === 'rinkeby' ? 'rinkeby.etherscan.io' : 'etherscan.io';

export interface MintButtonProps {
  type?: 'common' | 'book' | 'movie';
  disabled?: boolean;
  onMinted?: () => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  name?: string;
  max?: number;
}

export default function MintButton(props: MintButtonProps) {
  const { disabled, max = 1, type = 'common', children, name } = props;
  const [mintAmount, setMintAmount] = useState<number>(1);
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
    <div
      className={css`
        width: 243px;
        height: 328px;
        opacity: ${type === 'common' ? '0.9' : '0.5'};
        border: ${type === 'common' ? '3px' : '2px'} solid #184cff;
        &:hover {
          opacity: 1;
        }
      `}
    >
      <div
        className={css`
          font-size: 24px;
          margin-top: 24px;
        `}
      >
        {name}
      </div>
      <div
        className={css`
          font-size: 16px;
          opacity: 0.5;
          margin-top: 8px;
        `}
      >
        {price}ETH/NFT
        <br />
        {max === 1 ? 'ONLY 1' : `MAX ${max}/Wallet`}
      </div>
      <div
        className={css`
          width: 184px;
          height: 74px;
          line-height: 74px;
          border: 2px solid #184cff;
          margin: 18px auto;
          display: flex;
          flex-direction: row;
          .plus,
          .minus {
            font-size: 24px;
            height: 100%;
            width: 55px;
            line-height: 65px;
            opacity: 0.8;
            &:hover {
              opacity: 1;
            }
          }
          .minus {
            cursor: ${mintAmount <= 1 ? 'not-allowed' : 'pointer'};
          }
          .plus {
            cursor: ${mintAmount >= max ? 'not-allowed' : 'pointer'};
          }
        `}
      >
        <div
          className="minus"
          onClick={() => {
            if (mintAmount <= 1) {
              return;
            }
            setMintAmount(mintAmount - 1);
          }}
        >
          -
        </div>
        <div
          className={css`
            width: 74px;
            background-color: #4f60a0;
          `}
        >
          {mintAmount}
        </div>
        <div
          className="plus"
          onClick={() => {
            if (mintAmount >= max) {
              return;
            }
            setMintAmount(mintAmount + 1);
          }}
        >
          +
        </div>
      </div>
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
          : 'MINT'}
      </Button>
    </div>
  );
}
