import React from 'react';
import Provider from './Global/Provider';
import { GlobalStyle, ThemeProvider, TaskBar } from '@react95/core';
import TaskList from './components/TaskList';
import HomeModel from './components/HomeModal';

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
);

function App() {
  return (
    <ThemeProvider>
      <Provider />
      <GlobalStyle />
      <HomeModel isMobile={isMobile} />
      <TaskBar list={<TaskList />} />
    </ThemeProvider>
  );
}

export default App;
