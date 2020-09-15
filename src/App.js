import React from 'react';
import Provider from './Global/Provider';
import { GlobalStyle, ThemeProvider, TaskBar } from '@react95/core';
import TaskList from './components/TaskList';

function App() {
  return (
    <ThemeProvider>
      <Provider />
      <GlobalStyle />
      <TaskBar list={<TaskList />} />
    </ThemeProvider>
  );
}

export default App;
