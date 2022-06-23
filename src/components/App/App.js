import React from 'react';
import Favorite from '../Favorite/Favorite';
import { Route, HashRouter as Router, Link } from 'react-router-dom';



function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Router>
        <Route>
        <Favorite />
        </Route>
      </Router>
    </div>
  );
}

export default App;
