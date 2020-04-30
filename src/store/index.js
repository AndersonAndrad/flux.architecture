import { createStore, applyMiddleware, compose } from 'redux';

// roots
import redducers from './modules/rootReducer';
import saga from './modules/rootSaga';

import createSagaMiddleware from 'redux-saga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

const store = createStore(redducers, enhancer);

sagaMiddleware.run(saga);

export default store;
