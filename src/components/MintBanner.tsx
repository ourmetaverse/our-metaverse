import MintButton from '@/components/MintButton';
import Modal from '@/components/Modal';
import { contractAddress, maxMintPerAddr, totalSupply } from '@/constants';
import { log } from '@/utils/log';
import { css } from '@emotion/css';
import { useResponsive } from 'ahooks';
import { Button, InputNumber, message, Space, Spin } from 'antd';
import confetti from 'canvas-confetti';
import React, { useEffect, useState } from 'react';
import { useIntl, useModel } from 'umi';
import ConnectWallet from './ConnectWallet';

interface AmountObj {
  common: number;
  book: number;
  movie: number;
}

const Component: React.FC = () => {
  const { pc } = useResponsive();
  const { formatMessage, locale } = useIntl();
  const [bookMinted, setBookMinted] = useState<boolean>(false);
  const [movieMinted, setMovieMinted] = useState<boolean>(false);
  const { address, contract } = useModel('user');
  const [progress, setProgress] = useState<number>(0);
  const [numberMinted, setNumberMinted] = useState<number>();
  const [doorVisible, setDoorVisible] = useState<boolean>(false);
  const [key, setKey] = useState<number>();
  const [right, setRight] = useState<boolean>();

  const [mintAmountObj, setMintAmountObj] = useState<AmountObj>({
    common: 3,
    book: 0,
    movie: 0,
  });

  const updateMintAmountObj = (obj: AmountObj) => {
    setMintAmountObj(obj);
    if (obj.common === 1 && obj.book === 1 && obj.movie === 1) {
      log('一生二，二生三，三生万物...');
      setDoorVisible(true);
    }
  };

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

  console.log('get contract', contract);

  if (!contract) {
    return (
      <div>
        {locale === 'zh-CN' ? (
          <div
            className={css`
              margin-bottom: 16px;
            `}
          >
            <a
              className={css`
                color: white;
                opacity: 0.7;
                &:hover {
                  color: white;
                  opacity: 1;
                }
              `}
              target="_blank"
              href="https://www.yuque.com/docs/share/c893e308-681a-48d2-ba65-bd00649550b4?# "
            >
              {' '}
              《写给没有以太坊钱包的科幻爱好者们，点我开启 Web3 的大门》
            </a>
          </div>
        ) : null}
        <div
          className={css`
            margin: 0 auto;
            display: flex;
            justify-content: center;
          `}
        >
          <ConnectWallet />
        </div>
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
          onMinted={() => {
            updateNumberMinted();
            confetti({
              zIndex: 9000,
            });
          }}
          name={formatMessage({
            id: 'mint_tip',
          })}
          max={avaliableCount}
          maxPerAddr={maxMintPerAddr}
          defaultNumber={3}
          onMintAmountChanged={(a) => {
            log('一生二...');
            updateMintAmountObj({
              ...mintAmountObj,
              common: a,
            });
          }}
        />
        <MintButton
          type="book"
          disabled={bookMinted}
          onMinted={() => {
            setBookMinted(true);
          }}
          defaultNumber={0}
          name={formatMessage({
            id: 'mint_book_token',
          })}
          onMintAmountChanged={(a) => {
            log('...二生三...');
            updateMintAmountObj({
              ...mintAmountObj,
              book: a,
            });
          }}
        />
        <MintButton
          type="movie"
          disabled={movieMinted}
          name={formatMessage({
            id: 'mint_movie_token',
          })}
          defaultNumber={0}
          onMinted={() => {
            setMovieMinted(true);
          }}
          onMintAmountChanged={(a) => {
            log('...三生万物...');
            updateMintAmountObj({
              ...mintAmountObj,
              movie: a,
            });
          }}
        />
      </Space>
      <Modal
        visible={doorVisible}
        onCancel={() => {
          setDoorVisible(false);
        }}
      >
        {right ? (
          <div
            className={css`
              text-align: center;
            `}
          >
            🎉🎉🎉 恭喜你找到了正确的钥匙 🎉🎉🎉 但是活动已经结束了，感谢参与。
            <img
              className={css`
                margin: 16px auto;
                display: block;
              `}
              src="/xiaoyuan.png"
              alt=""
            />
          </div>
        ) : (
          <>
            <h2>宇宙奥秘的大门已经找到！</h2>
            <h6>伟大的冒险家，去寻找属于你自己的钥匙吧！</h6>
            <h6>
              钥匙由两个碎片组成，去找到它们！去寻找合成的方法！密码和答案就隐藏在元宇宙中！
            </h6>
            <h6>一个不存在的 NFT 编号将指引你走向通往终极之地的虫洞！</h6>
            <br />
            <Space>
              <InputNumber
                style={{ width: 200 }}
                placeholder="你的钥匙"
                value={key}
                onChange={setKey}
              />
              <Button
                type="primary"
                onClick={() => {
                  message.warning('活动已结束');
                }}
              >
                开启宇宙之门
              </Button>
            </Space>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Component;
