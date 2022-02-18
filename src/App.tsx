import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom';

import HomePage from './Page/HomePage';
import TestPage from './Page/TestPage';
import NotFound from './Page/NotFound';


function App() {
  return (
    <div className='containerApp'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/tests/:name'element={<TestPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
