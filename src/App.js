import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import { Provider } from 'react-redux';
import './config/reactotronConfig';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Router />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
