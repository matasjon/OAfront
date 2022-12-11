import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ActivitiesPage from './routes/ActivitiesPage'
import ContactPage from './routes/ContactPage'
import AboutPage from './routes/AboutPage'
import Login from './routes/Login';
import RegisterPage from './routes/RegisterPage';
import MyInformationPage from './routes/MyInformationPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/activities' element={<ActivitiesPage />} />
        <Route path='/contacts' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/myinformation' element={<MyInformationPage />} />
      </Routes>
  </BrowserRouter>
);


