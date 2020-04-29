import { createStore } from 'redux';

import redducers from './modules/rootReducer';

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(redducers, enhancer);

export default store;
