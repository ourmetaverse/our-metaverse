import React from 'react';
import { Modal, ModalProps } from 'antd';
import { css } from '@emotion/css';

interface Props extends ModalProps {}

const Component: React.FC<Props> = (props) => {
  return (
    <Modal
      footer={null}
      className={css`
        top: 20%;
        .ant-modal-close {
          right: -46px;
          top: -46px;
        }
        .ant-modal-body {
          border: 2px solid #1443ff;
          border-radius: 10px;
        }
        .ant-modal-close-x {
          width: 40px;
          height: 40px;
          line-height: 40px;
          border-radius: 50%;
          border: 1px solid #979797;
          color: #979797;
          &:hover {
            color: #1443ff;
            border: 1px solid #1443ff;
          }
        }
      `}
      {...props}
    />
  );
};

export default Component;
