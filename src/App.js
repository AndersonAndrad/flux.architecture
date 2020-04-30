import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './router';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './config/reactotronConfig';
import store from './store/index';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
