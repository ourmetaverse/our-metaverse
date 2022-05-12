import React, { useState } from 'react';
import Modal from '@/components/Modal';
import MintBanner from './MintBanner';

const Component: React.FC = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div onClick={showModal}>{children}</div>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <MintBanner />
      </Modal>
    </>
  );
};

export default Component;
