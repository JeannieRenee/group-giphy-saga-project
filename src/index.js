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



function* watcherSaga() {
  // yield takeEvery ('SOME_ACTION', someFunction)
  yield takeEvery('FETCH_FAVORITE', fetchFavorite);
}

// reducer that holds our results
const random = (state = {}, action) => {
    if(action.type === 'SET_RANDOM') {
        return action.payload;
    }
    return state;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ 
    random, 
    favoriteList
   }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watcherSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
