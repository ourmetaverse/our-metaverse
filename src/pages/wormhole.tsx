import React, { useEffect, useState } from 'react';
import ourmetaverse from '@/docs/our-metaverse.md';
import { css } from '@emotion/css';
import { IRouteProps, useModel } from 'umi';
import Markdown from '@/components/Markdown';
import { maxWidth } from '@/utils/css';
import { log } from '@/utils/log';

const Component: React.FC<IRouteProps> = ({ location }) => {
  const [token, setToken] = useState<number>();
  const { code } = useModel('user');

  useEffect(() => {
    let key = location.query.code;
    if (key !== undefined) {
      const tokenNum = parseInt(key);
      if (tokenNum === code) {
        setToken(tokenNum);
      }
    }
    log('“我找到了一个虫洞，秘密一定就隐藏在这里！”');
  }, [location.query.code]);

  if (token === undefined) {
    return (
      <div
        className={css`
          margin-top: 120px;
          text-align: center;
        `}
      >
        你的 🔑 好像和锁不匹配... 继续努力寻找吧
      </div>
    );
  }

  return (
    <div
      className={css`
        max-width: ${maxWidth};
        margin: 120px auto;
      `}
    >
      <div
        className={css`
          text-align: center;
          font-size: 50px;
          margin-bottom: 53px;
          background: linear-gradient(150deg, #0f22ff, #ffffff);
          background-clip: text;
          color: transparent;
        `}
      >
        “创世的故事是宇宙的灵魂，请把它们全部点亮。”
      </div>
      <div
        className={css`
          h2 {
            font-size: 40px;
            opacity: 0.9;
          }
          p {
            font-size: 20px;
            opacity: 0.7;
          }
          img {
            max-width: 360px;
            margin: 8px;
            box-shadow: 0 2px 30px #fff;
            border-radius: 30px;
            float: right;
            margin-right: 0;
          }
          strong {
            font-weight: normal;
          }
          strong::selection {
            background: yellow;
            color: #0f22ff;
          }
        `}
      >
        <Markdown enTip={false} zh={ourmetaverse}></Markdown>
      </div>
    </div>
  );
};

export default Component;
