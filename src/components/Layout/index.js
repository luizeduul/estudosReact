import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Routes from '../../Routes';
import Menu from '../Menu';

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
