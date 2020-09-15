import React, { useState } from 'react';
import Provider from './Global/Provider';
import { GlobalStyle, ThemeProvider, TaskBar } from '@react95/core';
import TaskList from './components/TaskList';
import HomeModel from './components/HomeModal';
import FileModal from './components/FileModal';

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
);

function App() {
  const [toggle, toggleModal] = useState(false);

  const openModal = () => {
    toggleModal(true);
  };

  const closeModal = () => {
    toggleModal(false);
  };

  return (
    <ThemeProvider>
      <Provider />
      <GlobalStyle />
      <HomeModel isMobile={isMobile} openModal={openModal} />

      {toggle && <FileModal isMobile={isMobile} closeModal={closeModal} />}
      <TaskBar list={<TaskList />} />
    </ThemeProvider>
  );
}

export default App;
