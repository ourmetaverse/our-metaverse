import React from 'react';
import { Typography } from 'antd';
import { css } from '@emotion/css';
import { primaryColor, maxWidth } from '@/utils/css';

interface Props {}

const { Title, Paragraph } = Typography;

const Component: React.FC<Props> = () => {
  return (
    <div
      className={css`
        background-color: ${primaryColor};
        height: 680px;
      `}
    >
      <div
        className={css`
          max-width: ${maxWidth};
          margin: 0 auto;
          padding-top: 128px;
          flex: 1;
        `}
      >
        <div
          className={css`
            display: flex;
          `}
        >
          <div
            className={css`
              flex: 1;
            `}
          >
            <Title>我们的元宇宙</Title>
            <Title style={{ marginTop: 16 }}>
              开端{' '}
              <span
                className={css`
                  color: gray;
                `}
              >
                //
              </span>
            </Title>
            <Paragraph
              className={css`
                margin-top: 64px;
              `}
            >
              我们有一个梦想：创造一个精彩纷呈的宇宙。
            </Paragraph>
            <Paragraph>
              这个项目叫做“我们的元宇宙”，它是这个项目的名字，也是一篇小说的名字。基于对元宇宙的未来幻想，我构想了一个新宇宙，我叫它“我们的元宇宙”，写了两万多字的小说。但是我想它只是开始，我希望它可以延展开来，成为一个充满无限可能的宇宙。
            </Paragraph>
            <Paragraph>
              我们通过在以太坊上发行一个智能合约来管理这个 IP
              的著作权，把版权授予更多人，让更多人一起来参与创作，一起享受这个
              IP 发展带来的收益。
            </Paragraph>
          </div>
          <div
            className={css`
              flex: 1;
            `}
          >
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
