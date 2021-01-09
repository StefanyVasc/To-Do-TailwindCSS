import React from 'react';
import TaskListContextProvider from '../contexts/TaskListContext';
import '../styles/global.css';
import '../styles/tailwind.css';
import Header from './Header';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="bg-purple-700 w-screen h-screen font-sans">
        <div className="app-wrapper h-full flex flex-col items-center content-center">
          <Header />
          <div>
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
