import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Favorite (){


const favoriteList = useSelector(store=>store.favoriteList);
return(
    <>
    <div> 
      {favoriteList && 
      favoriteList.map((list)=>{
        return(
            <>
            <img src={list.url}></img>
            </>
        )
      })
      }
    </div>
    
    
    </>
)
}
export default Favorite;










