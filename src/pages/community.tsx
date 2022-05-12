import { message, Modal, Image, Spin, Typography } from 'antd';
import { useIntl, useModel } from 'umi';
import { wechatLink } from '@/constants';
import BlueLine from '@/components/BlueLine';
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { primaryColor, mobile } from '@/utils/css';

export default () => {
  const { formatMessage } = useIntl();
  const { contract, address } = useModel('user');
  const [modal, contextHolder] = Modal.useModal();
  const [isOwner, setIsOwner] = useState<boolean>(false);

  useEffect(() => {
    if (contract && address) {
      contract
        .balanceOf(address)
        .then((count: number) => {
          setIsOwner(Number(count) > 0);
        })
        .catch((e: any) => {
          message.error(e.data?.message || e.message);
        });
    }
  }, [contract, address]);

  const data = [
    {
      title: formatMessage({ id: 'wechat' }),
      icon: '/wechat.png',
      hoverIcon: '/wechat-hover.png',
      tip: formatMessage({ id: 'wechat_tip' }),
      img: contract && isOwner ? wechatLink : '',
    },
    {
      title: 'Telegram',
      icon: '/telegram.png',
      hoverIcon: '/telegram-hover.png',
      tip: formatMessage({ id: 'wechat_tip' }),
      daoLink: contract && isOwner ? 'https://t.me/+Bq8C7dclNGs5Y2Q9' : '',
    },
    {
      title: 'Discord',
      icon: '/discord.png',
      hoverIcon: '/discord-hover.png',
      link: 'https://discord.gg/ku4rPFcr',
    },
    {
      title: formatMessage({ id: 'jike' }),
      icon: '/jike.png',
      hoverIcon: '/jike-hover.png',
      link: 'https://okjk.co/4o6WHD',
    },
    {
      title: 'Twitter',
      icon: '/twitter.png',
      hoverIcon: '/twitter-hover.png',
      link: 'https://twitter.com/OurMetaverseDAO',
    },
    {
      title: 'OpenSea',
      icon: '/opensea.png',
      hoverIcon: '/opensea-hover.png',
      link: 'https://opensea.io/collection/our-metaverse',
    },
    {
      title: 'Blog',
      icon: '/blog.png',
      hoverIcon: '/blog-hover.png',
      link: 'https://mirror.xyz/our-metaverse.eth',
    },
  ];
  return (
    <div
      className={css`
        background: linear-gradient(#000, ${primaryColor});
        padding: 150px 16px;
      `}
    >
      <div
        className={css`
          font-size: 40px;
          text-align: center;
          ${mobile} {
            font-size: 24px;
          }
        `}
      >
        加入社区，成为家人
      </div>
      <BlueLine />
      <div>
        {data.map((item) => {
          return (
            <a
              target="_blank"
              href={item.link || '#'}
              className={css`
                color: #fff;
                opacity: 0.8;
                display: block;
                max-width: 900px;
                margin: 24px auto;
                background-color: rgba(0, 0, 0, 0.5);
                height: 87px;
                line-height: 87px;
                opacity: 0.8;
                &:hover {
                  color: #fff;
                  opacity: 1;
                }
              `}
              onClick={(e) => {
                if (!item.link) {
                  e.preventDefault();
                } else {
                  return;
                }
                let content: React.ReactNode = item.tip;
                if (item.img) {
                  content = <Image src={item.img} placeholder={<Spin />} />;
                } else if (item.daoLink) {
                  content = (
                    <Typography.Text copyable>{item.daoLink}</Typography.Text>
                  );
                }
                modal.info({
                  title: item.title,
                  content,
                });
              }}
            >
              <div
                className={css`
                  display: flex;
                  justify-content: center;
                  .ourm-iconimg {
                    background-image: url(${item.icon});
                    width: 60px;
                    height: 60px;
                    margin-top: 13px;
                  }
                  &:hover {
                    .ourm-iconimg {
                      background-image: url(${item.hoverIcon});
                    }
                  }
                `}
              >
                <div
                  className={css`
                    display: inline-block;
                    margin-right: 34px;
                    font-size: 50px;
                  `}
                >
                  <div className="ourm-iconimg" />
                </div>
                <div
                  className={css`
                    display: inline-block;
                    font-size: 24px;
                    width: 130px;
                  `}
                >
                  {item.title}
                </div>
              </div>
            </a>
          );
        })}
      </div>
      {contextHolder}
    </div>
  );
};
