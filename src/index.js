import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import App from './components/App/App'
import axios from 'axios';

//setup steps
// -Import the library
// -Plugin the middleware
// -kickoff the sagas, watch for action types

function* fetchFavorite (action){
  console.log('made it to fetch favorites', action);
  const res= yield axios.get('/api/favorite');
  console.log('res.data', res.data);
  yield put({
    type: 'SET_FAVORITE', 
    payload: res.data
  });
}

// favoriteslist reducer 
const favoriteList= (state =[], action) =>{
  if(action.type === 'SET_FAVORITE'){
    return action.payload
  }
  return state;
}

function* addFavorite(action) {
  console.log('in add favorites', action)
  const response = yield axios({
    method: 'POST',
    url: '/api/favorite',
    data: {gif:action.payload}
  })
  console.log(response);
  yield put({
    type: 'FETCH_FAVORITE'
  })
}




// Reducer that holds our results
const results = (state = {}, action) => {
  if(action.type === 'SET_SEARCH') {
      return action.payload;
  }
  return state;
}

// saga function for search
function* fetchResults(action) {
  console.log('made it to fetchResults!', action);
  let res;
  try {
      res = yield axios.get(`/api/:search/${action.payload}`);
      console.log('res.data', res.data);
  }
  catch (err) {
      console.error('oh no', err);
      return;
  }
  // put means dispatch();
  yield put({
      type: 'SET_SEARCH',
      payload: res.data
  });
}

function* watcherSaga() {
  // yield takeEvery ('SOME_ACTION', someFunction)
  yield takeEvery('FETCH_FAVORITE', fetchFavorite);
  yield takeEvery('FETCH_RESULTS', fetchResults);
  yield takeEvery('ADD_FAVORITE', addFavorite);
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ 
    results, 
    favoriteList
   }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
