import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Menu from './component/Menu';
import ReactWindow from './component/Funtion1/ReactWindow';

function App() {
  return (
    <div className='App'>
      <div className='contain'>
        <Routes>
          <Route path='/' element={<Navigate to='/menu' />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reactWindow" element={<ReactWindow />} />

        </Routes>
      </div>
    </div>
  )
};


export default App;


// react-window나 virtuoso