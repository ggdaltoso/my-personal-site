import React, { useEffect, useState } from 'react';
import { Modal, Frame } from '@react95/core';
import { Subtitle, Avatar, AvatarWrapper } from './styled';
import { bio } from './content';

const FileModal = ({ openModal, isMobile }) => {
  const [avatar, setAvatar] = useState({});

  const propsBox = {
    width: isMobile ? window.innerWidth : 500,
    height: isMobile ? window.innerHeight - 30 : 'auto',
  };

  useEffect(async () => {
    await fetch('https://api.github.com/users/breno-felipe')
      .then((user) => user.json())
      .then((data) => setAvatar(data))
      .catch((err) => alert(err));
  }, []);

  return (
    <Modal
      {...propsBox}
      style={{ top: '28%', left: '30%' }}
      openModal={openModal}
      buttons={[{ value: 'More Info', onClick: openModal }]}
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
      >
        <Subtitle>Hello,👋 My name is {avatar.name}</Subtitle>
        <AvatarWrapper>
          <Avatar src={avatar.avatar_url} alt="Minha imagem hehehe" />
          {bio.map((element) => (
            <Subtitle>{element.bio}</Subtitle>
          ))}
        </AvatarWrapper>
      </Frame>
    </Modal>
  );
};

export default FileModal;
