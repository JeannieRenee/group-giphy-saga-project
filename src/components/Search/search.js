import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function search(){
    const dispatch = useDispatch();
    // const [search, setSearch] = useSelector();
    const searchResults = useSelector(store => store.results);

    // const getGif = () => {
    //     axios.get('/random')
    //       .then((response) => {
    //         console.log("GET /random", response);
    //         dispatch({
    //           type: "SET_RANDOM",
    //           payload: response.data,
    //         });
    //       }).catch((error) => {
    //         console.log("Error getting gif", error);
    //       });
    //   }
      const getFruit = () => {
        dispatch({
          type: 'FETCH_SEARCH',
          payload: search,
        });
      }
    
      useEffect(() => {
        getFruit();
      }, []);

    return (
        <div>
          <img src={searchResults}/>
        </div>
    );
}

export default search;