import React from 'react';
import axios from 'axios';

function Search() {

    const getGif = () => {
        axios.get('/:search')
          .then((response) => {
            console.log("GET", response);
            dispatch({
              type: "SET_RESULTS",
              payload: response.data,
            });
          }).catch((error) => {
            console.log("Error getting gifs", error);
          });
      }
  return (
    <div>
      <input type='text'></input>
      <button onClick={getGif}>search</button>

      <div className='results'>

      </div>
    </div>
  );
}

export default Search;
