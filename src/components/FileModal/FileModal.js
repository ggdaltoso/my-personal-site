import React from 'react';
import { Modal, Frame } from '@react95/core';

const FileModal = ({ isMobile, closeModal }) => {
  const propsBox = {
    width: isMobile ? window.innerWidth : 500,
    height: isMobile ? window.innerHeight - 30 : 'auto',
  };

  return (
    <Modal
      {...propsBox}
      style={{ top: 0 }}
      buttons={[{ value: 'Close', onClick: closeModal }]}
      closeModal={closeModal}
    >
      <Frame
        bg="white"
        boxShadow="in"
        height="100%"
        p={30}
        style={{
          overflowY: 'auto',
          maxHeight: '77vh',
        }}
      ></Frame>
    </Modal>
  );
};

export default FileModal;
