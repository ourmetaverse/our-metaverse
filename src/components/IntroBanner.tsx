import React, { useState } from 'react';
import { Row, Col, Typography } from 'antd';
import { css } from '@emotion/css';

const { Title, Paragraph, Text, Link } = Typography;

interface Props {}

const Component: React.FC<Props> = () => {
  const [text, setText] = useState<string>('hello');
  return (
    <Row>
      <Col span={12}>
        <Typography>
          <Title>Our Metaverse, Our Dream!</Title>
          <Paragraph>
            OurMetaverse 这不仅仅是 NFT，更是关于 Web3 创作者经济的梦想之旅。
          </Paragraph>
          <Paragraph>
            OurMetaverse
            是以一篇关于元宇宙的科幻小说《我们的元宇宙·开端》为起点的 Web3
            创作者经济革命。它在 ERC721
            合约的基础上添加了版权授权、权益分成的逻辑，拥有一份 OurMetaverseDAO
            NFT 除了拥有对应的 PFP
            艺术头像外还拥有《我们的元宇宙》全套作品的部分著作权，可以获取系列作品的数字改编权以及未来项目出售图书改编权和影视改编权的分层权益。
          </Paragraph>
        </Typography>
      </Col>
      <Col span={12}>
        <img
          className={css`
            width: 100%;
          `}
          src="https://user-images.githubusercontent.com/101242724/164154760-480018d4-f6e5-4bfd-8181-4c4cca6dbab5.png"
          alt="OURM"
        />
      </Col>
    </Row>
  );
};

export default Component;
