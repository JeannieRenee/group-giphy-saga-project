import React from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useState} from 'react'

function Search() {
  const [search, setSearch]= useState('');
  const dispatch= useDispatch();

    const getGif = () => {
            dispatch({
              type: "SET_RESULTS",
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
