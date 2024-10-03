import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import MainView from './views/MainView';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/main" element={<MainView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

/* 
라우팅 담당 파일 home > main
*/
