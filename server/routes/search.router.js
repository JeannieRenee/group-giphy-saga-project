const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:search', (req,res)=>{
    axios({
        method: 'GET', 
        url: `https://api.giphy.com/v1/gifs/search?q=${req.params.search}&api_key=${process.env.GIPHY_API_KEY}&limit=30&rating=g`
       
    }).then(response=>{
        console.log('axios response', response.data)
    }).catch(err=>{
        console.log('error in giphy', response.data);
        res.sendStatus(500);
    })
})

module.exports = router;