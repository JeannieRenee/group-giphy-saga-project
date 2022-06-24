import React from 'react';

import {useDispatch} from 'react-redux';
import {useState} from 'react'

function Search() {
  const [search, setSearch]= useState('');
  const dispatch= useDispatch();

    const getGif = () => {
            dispatch({
              type: "FETCH_RESULTS",
              payload: search,
            });
        
          setSearch('');
      }
  return (
    <div>
      <form onSubmit={getGif}>
      <input 
      type="text"
      placeholder= "Search"
      value= {search}
      onChange={(evt) => setSearch(evt.target.value)}
/>
    <button onClick={getGif}> search</button>
  </form>

      </div>
   
  );
}

export default Search;
