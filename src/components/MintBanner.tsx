import React, { useState, useEffect } from 'react';
import { Button, Space, Spin } from 'antd';
import { useModel, useIntl } from 'umi';
import { css } from '@emotion/css';
import {
  totalSupply,
  commonPrice,
  maxMintPerAddr,
  contractAddress,
} from '@/constants';
import MintButton from '@/components/MintButton';
import ConnectWallet from './ConnectWallet';
import { useResponsive } from 'ahooks';

const Component: React.FC = () => {
  const { pc } = useResponsive();
  const { formatMessage } = useIntl();
  const [bookMinted, setBookMinted] = useState<boolean>(false);
  const [movieMinted, setMovieMinted] = useState<boolean>(false);
  const { address, contract } = useModel('user');
  const [progress, setProgress] = useState<number>(0);
  const [numberMinted, setNumberMinted] = useState<number>();
  let mintButton;
  let mintBtns = [];

  async function updateStatus() {
    if (contract) {
      const progress = parseInt(await contract.totalSupply());
      setProgress(progress);
      contract.on('Minted', async () => {
        const progress = parseInt(await contract.totalSupply());
        setProgress(progress);
      });
    }
  }

  const updateNumberMinted = async () => {
    if (contract && address) {
      const numberMinted = await contract.numberMinted(address);
      setNumberMinted(parseInt(numberMinted));
    }
  };

  useEffect(() => {
    if (contract) {
      updateStatus();
      contract.ownerOf(1).then((bookOwner: string) => {
        setBookMinted(
          contractAddress.toLowerCase() !== bookOwner.toLowerCase(),
        );
      });
      contract.ownerOf(0).then((movieOwner: string) => {
        setMovieMinted(
          contractAddress.toLowerCase() !== movieOwner.toLowerCase(),
        );
      });
    }
  }, [contract]);

  useEffect(() => {
    updateNumberMinted();
  }, [contract, address]);

  if (!contract) {
    return <ConnectWallet />;
  }

  if (numberMinted === undefined || address === undefined) {
    return <Spin />;
  }

  for (let i = 0; i < maxMintPerAddr; i++) {
    mintBtns.push(
      <MintButton
        key={i}
        onMinted={updateNumberMinted}
        mintAmount={i + 1}
        disabled={!(numberMinted + i < maxMintPerAddr)}
        style={{ margin: '8px', width: '124px' }}
      >
        {formatMessage(
          {
            id: 'mint_tip',
          },
          {
            mintAmount: i + 1,
          },
        )}
      </MintButton>,
    );
  }
  mintButton = (
    <div
      className={css(`
      text-align: center;
    `)}
    >
      {mintBtns}
    </div>
  );

  if (progress >= totalSupply) {
    mintButton = (
      <Button disabled>
        {formatMessage({
          id: 'sold_out',
        })}
      </Button>
    );
  }

  if (numberMinted === maxMintPerAddr) {
    mintButton = (
      <Button
        style={{
          background: '#eee',
          color: '#999',
          cursor: 'not-allowed',
        }}
      >
        {formatMessage({
          id: 'limit_reached',
        })}
      </Button>
    );
  }

  const avaliableCount = Math.max(maxMintPerAddr - numberMinted, 0);

  return (
    <div
      className={css`
        text-align: center;
      `}
    >
      {/* {mintButton}
        <div
          style={{ marginBottom: 20, display: 'flex', alignItems: 'center' }}
        >
          {address && avaliableCount > 0 && (
            <span>
              {formatMessage(
                {
                  id: 'mint_available_count',
                },
                {
                  count: avaliableCount,
                },
              )}
            </span>
          )}
        </div>
        <div style={{ fontSize: 20, textAlign: 'center' }}>
          {formatMessage({
            id: 'mint_progress',
          })}
          ：{progress} / {totalSupply}
          <br />
          {formatMessage(
            {
              id: 'price_tip',
            },
            {
              commonPrice,
              maxMintPerAddr,
            },
          )}
        </div> */}
      <Space>
        <MintButton
          type="common"
          disabled={avaliableCount <= 0}
          onMinted={updateNumberMinted}
          name={formatMessage({
            id: 'mint_tip',
          })}
          max={avaliableCount}
        />
        <MintButton
          type="book"
          disabled={bookMinted}
          onMinted={() => {
            setBookMinted(true);
          }}
          name={formatMessage({
            id: 'mint_book_token',
          })}
        />
        <MintButton
          type="movie"
          disabled={movieMinted}
          name={formatMessage({
            id: 'mint_movie_token',
          })}
          onMinted={() => {
            setMovieMinted(true);
          }}
        />
      </Space>
    </div>
  );
};

export default Component;
