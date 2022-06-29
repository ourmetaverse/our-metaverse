import { useEffect, useState } from 'react';
import { Button, Divider } from 'antd';
import { useModel, useIntl } from 'umi';
import showMessage from '@/utils/showMessage';
import { ethers } from 'ethers';
import { bookPrice, commonPrice, moviePrice } from '@/constants';
import { css } from '@emotion/css';
import { mobile } from '@/utils/css';

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
  maxPerAddr?: number;
  defaultNumber?: number;
  onMintAmountChanged?: (amount: number) => void;
}

export default function MintButton(props: MintButtonProps) {
  const {
    disabled,
    max = 1,
    maxPerAddr = 1,
    type = 'common',
    name,
    defaultNumber = 1,
    onMintAmountChanged,
  } = props;
  const [mintAmount, setAmount] = useState<number>(defaultNumber);
  const [minting, setMinting] = useState(false);
  const { signer, contract } = useModel('user');
  const { formatMessage } = useIntl();

  const setMintAmount = (amount: number) => {
    setAmount(amount);
    if (onMintAmountChanged) {
      onMintAmountChanged(amount);
    }
  };

  let price = commonPrice;
  if (type === 'book') {
    price = bookPrice;
  } else if (type === 'movie') {
    price = moviePrice;
  }

  useEffect(() => {
    if (mintAmount > max) {
      setMintAmount(Math.max(max, 1));
    }
  }, [max, mintAmount]);

  return (
    <div
      className={css`
        width: 243px;
        height: 328px;
        opacity: ${type === 'common' ? '0.9' : '0.5'};
        border: ${type === 'common' ? '3px' : '2px'} solid #184cff;
        margin-bottom: 32px;
        &:hover {
          opacity: 1;
        }
        ${mobile} {
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
        {maxPerAddr === 1 ? 'ONLY 1' : `MAX ${maxPerAddr}/Wallet`}
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
            user-select: none;
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
            if (mintAmount <= 0) {
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
            font-size: 40px;
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
      <div
        className={css`
          font-size: 16px;
          opacity: 0.5;
          margin-top: 8px;
          margin-bottom: 8px;
        `}
      >
        Total {price * mintAmount}ETH
      </div>
      <Button
        disabled={disabled || mintAmount <= 0}
        loading={minting}
        type="primary"
        className={css`
          overflow: hidden;
          &::after {
            background: #fff;
            content: '';
            height: 155px;
            left: -75px;
            opacity: 0.2;
            position: absolute;
            top: -50px;
            transform: rotate(35deg);
            width: 50px;
            z-index: 1;
          }
          &:hover {
            ::after {
              left: 120%;
              transition: all 1500ms cubic-bezier(0.19, 1, 0.22, 1);
            }
          }
        `}
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
              tx = await contractWithSigner.mint(mintAmount, {
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
