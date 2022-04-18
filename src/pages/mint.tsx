import { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import { useModel, useIntl } from 'umi';
import MintButton from '@/components/MintButton';
import { Button, Spin, Space } from 'antd';
import {
  totalSupply,
  commonPrice,
  maxMintPerAddr,
  contractAddress,
} from '@/constants';

function MintSection() {
  const { address, contract } = useModel('user');
  const { formatMessage } = useIntl();
  const [progress, setProgress] = useState<number>(0);
  const [numberMinted, setNumberMinted] = useState<number>(0);

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
    if (contract) {
      const numberMinted = await contract.numberMinted(address);
      setNumberMinted(parseInt(numberMinted));
    }
  };

  useEffect(() => {
    if (contract) {
      updateNumberMinted();
      updateStatus();
    }
  }, [contract]);

  if (!contract) {
    return <Spin />;
  }

  let mintButton;

  let mintBtns = [];
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

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ marginBottom: 20, display: 'flex', alignItems: 'center' }}>
        {address && (
          <span>
            {formatMessage(
              {
                id: 'mint_available_count',
              },
              {
                count: Math.max(maxMintPerAddr - numberMinted, 0),
              },
            )}
          </span>
        )}
      </div>
      {mintButton}
      <div style={{ marginTop: 20, fontSize: 20, textAlign: 'center' }}>
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
      </div>
    </div>
  );
}

function BuySection() {
  const { formatMessage } = useIntl();
  const { contract } = useModel('user');
  const [bookMinted, setBookMinted] = useState<boolean>(false);
  const [movieMinted, setMovieMinted] = useState<boolean>(false);

  useEffect(() => {
    if (contract) {
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

  if (!contract) {
    return <Spin />;
  }

  return (
    <Space wrap>
      <MintButton
        type="book"
        disabled={bookMinted}
        onMinted={() => {
          setBookMinted(true);
        }}
      >
        {formatMessage({
          id: 'mint_book_token',
        })}
        (30ETH)
      </MintButton>
      <MintButton
        type="movie"
        disabled={movieMinted}
        onMinted={() => {
          setMovieMinted(true);
        }}
      >
        {formatMessage({
          id: 'mint_movie_token',
        })}
        (600ETH)
      </MintButton>
    </Space>
  );
}

export default () => {
  const { started, StartLoading } = useModel('balance');
  const { contract, ConnectTip } = useModel('user');
  const { formatMessage } = useIntl();
  if (!contract) {
    return <ConnectTip />;
  }

  if (!started) {
    return <StartLoading started={started} />;
  }

  const mintBoxStyle = css(`
    margin-top: 16px;
    border: 4px dashed #000;
    padding: 40px;
    border-radius: 20px;
    text-align: center;
  `);

  return (
    <div
      className={css(`
          max-width: 840px;
          margin: 0 auto 5% auto;
          strong {
            color: blue;
          }
        `)}
    >
      <strong>{formatMessage({ id: 'mint_banner' })}</strong>
      <div className={mintBoxStyle}>
        <MintSection />
      </div>
      <div className={mintBoxStyle}>
        <BuySection />
      </div>
    </div>
  );
};
