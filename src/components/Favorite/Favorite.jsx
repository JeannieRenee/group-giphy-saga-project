import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
function Favorite (){
  const dispatch = useDispatch();
 const history= useHistory();
const handleFavorite = () => {

  dispatch({
    type: 'FETCH_FAVORITE'

  });
  history.push('/')
}

const favoriteList = useSelector(store=>store.favoriteList);
console.log(">>>>>>>>>>>>>>>>",favoriteList);
return(
    <>
    <div> 
      {favoriteList && 
      favoriteList.map((list)=>{
        console.log('The list item is:', list)
        return(
            <>
            <img src={list.data.images.original.url}></img>
            </>
        )
      })
      }
      <button onClick={handleFavorite}>Star</button>
    </div>
    
    
    </>
)
}
export default Favorite;










