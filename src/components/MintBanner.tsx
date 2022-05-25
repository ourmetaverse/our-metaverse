import React, { useState, useEffect } from 'react';
import { Space, Spin } from 'antd';
import { useModel, useIntl } from 'umi';
import { css } from '@emotion/css';
import { totalSupply, maxMintPerAddr, contractAddress } from '@/constants';
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
    return (
      <div
        className={css`
          margin: 0 auto;
          display: flex;
          justify-content: center;
        `}
      >
        <ConnectWallet />
      </div>
    );
  }

  if (numberMinted === undefined || address === undefined) {
    return <Spin />;
  }

  const avaliableCount = Math.max(maxMintPerAddr - numberMinted, 0);

  return (
    <div
      className={css`
        text-align: center;
      `}
    >
      <div
        className={css`
          font-size: 20px;
          text-align: center;
          margin-bottom: 16px;
        `}
      >
        {formatMessage({
          id: 'mint_progress',
        })}
        ：{progress} / {totalSupply}
        <br />
        {formatMessage(
          {
            id: 'mint_available_count',
          },
          {
            count: avaliableCount,
          },
        )}
      </div>
      <Space direction={pc ? 'horizontal' : 'vertical'}>
        <MintButton
          type="common"
          disabled={avaliableCount <= 0}
          onMinted={updateNumberMinted}
          name={formatMessage({
            id: 'mint_tip',
          })}
          max={avaliableCount}
          maxPerAddr={maxMintPerAddr}
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
