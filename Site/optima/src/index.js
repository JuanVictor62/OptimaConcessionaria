import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Landingpage from './pages/landingpage';
import Login from './pages/login';
import Pagecarros from './pages/pagecarros';
import Cadastrocarro from './pages/cadastrocarro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/landingpage' element={<Landingpage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/pagecarros' element={<Pagecarros/>} />
      <Route path='/cadastrocarro' element={<Cadastrocarro/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);