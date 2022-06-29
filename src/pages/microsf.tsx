import React, { useState } from 'react';
import { css } from '@emotion/css';
import { log } from '@/utils/log';
import { useModel } from 'umi';

const Component: React.FC = () => {
  const [draging, setDraging] = useState(false);
  const { code } = useModel('code');
  return (
    <div
      className={css`
        padding-top: 120px;
        text-align: center;
      `}
    >
      <h2>即将开启，敬请期待</h2>
      <div
        className={css`
          width: 320px;
          height: 320px;
          margin: 18px auto;
          position: relative;
        `}
        onClick={() => {
          log('从三维看二维，我们就是上帝，可以洞察一切！');
        }}
      >
        <div
          className={css`
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: ${draging ? 1 : 0};
            font-size: 12px;
            text-align: center;
            transition: opacity 5s;
          `}
        >
          <div className="ourm-loading-text">
            <div
              className={css`
                font-size: 30px;
                margin-bottom: 18px;
              `}
            >
              {code}
            </div>
            <div>你找到了重要的代码，但这并不是终点</div>
          </div>
        </div>
        <img
          src="/microsf.jpg"
          onDragStart={() => {
            setDraging(true);
          }}
          onDragEnd={() => {
            setDraging(false);
          }}
          draggable="true"
          className={css`
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            transition: opacity 5s;
            opacity: ${draging ? 0 : 1};
          `}
        />
      </div>
    </div>
  );
};

export default Component;
