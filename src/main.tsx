import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import DevShowcase from './pages/DevShowcase';
import { Background } from './components/layout/Background';
import { Navbar } from './components/layout/Navbar';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dev" element={<DevShowcase />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
