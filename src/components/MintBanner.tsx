import React, { useState, useEffect } from 'react';
import { Space, Spin, InputNumber, Button, message } from 'antd';
import { useModel, useIntl } from 'umi';
import { css } from '@emotion/css';
import { totalSupply, maxMintPerAddr, contractAddress } from '@/constants';
import MintButton from '@/components/MintButton';
import ConnectWallet from './ConnectWallet';
import { useResponsive } from 'ahooks';
import { log } from '@/utils/log';
import Modal from '@/components/Modal';
import confetti from 'canvas-confetti';

interface AmountObj {
  common: number;
  book: number;
  movie: number;
}

const Component: React.FC = () => {
  const { code } = useModel('user');
  const { pc } = useResponsive();
  const { formatMessage } = useIntl();
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
            🎉🎉🎉 恭喜你找到了正确的钥匙 🎉🎉🎉
            <br />
            加微信 ourmnft 备注上钥匙即有机会获得宇宙空投！
            <br />
            抓紧哦，不然就被其它冒险家抢先了！
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
                  if (key === 42 * code * 10000) {
                    setRight(true);
                    confetti({
                      zIndex: 9000,
                      particleCount: 100,
                    });
                    message.success('恭喜你成功开启了宇宙奥秘的大门！');
                  } else {
                    message.error(
                      '钥匙错误，冒险家请继续努力哦！抓紧哦，不然有限的奖品就被其它冒险家抢先了！',
                    );
                  }
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
