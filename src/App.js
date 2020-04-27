import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import GlobalStyles from './styles/global';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
