import { List, Image, message } from 'antd';
import { useIntl, useModel } from 'umi';
import { wechatLink } from '@/constants';
import {
  WechatOutlined,
  MailOutlined,
  TwitterOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
// import DiscordIcon from '@/components/DiscordIcon';
import React, { useEffect, useState } from 'react';

export default () => {
  const { formatMessage } = useIntl();
  const { contract, address } = useModel('user');
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
      icon: <WechatOutlined />,
      tip: contract && isOwner ? '' : formatMessage({ id: 'wechat_tip' }),
      img: contract && isOwner ? wechatLink : '',
    },
    {
      title: 'Telegram',
      icon: (
        <img
          width={16}
          height={16}
          style={{ marginTop: '-2px', marginLeft: '-2px' }}
          src="/telegram.png"
        />
      ),
      tip: contract && isOwner ? '' : formatMessage({ id: 'wechat_tip' }),
      link: contract && isOwner ? 'https://t.me/+Bq8C7dclNGs5Y2Q9' : '',
    },
    // 先不加
    // {
    //   title: 'Discord',
    //   icon: <DiscordIcon />,
    //   link: 'https://discord.gg/ku4rPFcr',
    // },
    {
      title: 'Email',
      icon: <MailOutlined />,
      link: 'mailto:our-metaverse@protonmail.com',
    },
    {
      title: 'Twitter',
      icon: <TwitterOutlined />,
      link: 'https://twitter.com/OurMetaverseDAO',
    },
    {
      title: 'Blog',
      icon: <NotificationOutlined />,
      link: 'https://mirror.xyz/our-metaverse.eth',
    },
  ];
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => {
        let content: React.ReactNode = item.tip;
        if (item.link) {
          content = <a href={item.link}>{item.link}</a>;
        }
        if (item.img) {
          content = <Image style={{ maxHeight: 400 }} src={item.img} />;
        }

        return (
          <List.Item>
            <List.Item.Meta
              avatar={item.icon}
              title={<a href={item.link}>{item.title}</a>}
              description={content}
            />
          </List.Item>
        );
      }}
    />
  );
};
