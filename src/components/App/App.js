import React from 'react';

import Search from '../Search/Search.jsx';
import Favorite from '../Favorite/Favorite';
import { Route, HashRouter as Router, Link } from 'react-router-dom';




function App(props) {
  
  return (
    <div>
      <h1>Giphy Search!</h1>

      <Search />

      <Router>
        <Route exact path= '/Favorite'>
        <Favorite />
        </Route>
        
      </Router>

    </div>
  );
}

export default App;
