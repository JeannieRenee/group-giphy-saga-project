import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import App from './components/App/App'


//setup steps
// -Import the library
// -Plugin the middleware
// -kickoff the sagas, watch for action types

function* watcherSaga() {
  // yield takeEvery ('SOME_ACTION', someFunction)
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ 

   }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watcherSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
