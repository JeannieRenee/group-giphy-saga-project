import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
function Favorite (){
  const favoriteList = useSelector(store=>store.favoriteList);
  const dispatch = useDispatch();
  const history= useHistory();

  const getList = () => {
  dispatch({
    type: 'FETCH_FAVORITE'
  });
}

useEffect(() => {
  getList();
}, []);

// console.log("1>>>>>>>>>>>>>>>>",favoriteList.data);
return(
    <>
    <div> 
      {favoriteList && 
      favoriteList.map((list)=>{
        console.log('The list item is:', list)
        return(
            <>
            <img src={list.data[0].images.original.url}></img>
            </>
        )
      })
      }
      {/* <button onClick={handleFavorite}>Star</button> */}
    </div>
    
    
    </>
)
}
export default Favorite;










