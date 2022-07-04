import React, { useState } from 'react';
import { css } from '@emotion/css';
import { log } from '@/utils/log';
import { useModel } from 'umi';

const Component: React.FC = () => {
  const [draging, setDraging] = useState(false);
  const { code } = useModel('user');
  return (
    <div
      className={css`
        width: 200px;
        height: 200px;
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
        <div className="ourm-loading-text" style={{ marginTop: 32 }}>
          <div
            className={css`
              font-size: 16px;
              margin-bottom: 18px;
            `}
          >
            {code === -1 ? '“似乎和这个二维空间缺少连接...”' : code}
          </div>
          {code !== -1 ? <div>你找到了重要的代码，但这并不是终点</div> : null}
        </div>
      </div>
      <img
        src="/microsf.jpg"
        onDragStart={() => {
          setDraging(true);
          log('“这片二维空间似乎隐藏着奥秘...”');
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
  );
};

export default Component;
