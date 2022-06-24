import React from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {useState} from 'react'

function Search() {
  const searchResult = useSelector(store => store.results);
  console.log(">>>>>>>>>>>>>>", searchResult);
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
    <div>
      <form onSubmit={getGif}>
        <input 
        type="text"
        placeholder= "Search"
        value= {search}
        onChange={(evt) => setSearch(evt.target.value)}
        />
        <button> search</button>
      </form>
    </div>
    <div>
      <img src={searchResult.data && searchResult.data[0].images.original.url}/>
    </div>
    </div>
  );
}

export default Search;
