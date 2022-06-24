const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/:search', (req,res)=>{
    const search= req.params.search;

    axios({
        method: 'GET', 
        url: `https://api.giphy.com/v1/gifs/search`,
        params: {
            api_key: process.env.GIPHY_API_KEY,
            q: search,
            limit: 1
        }
        // url: 'https://api.giphy.com/v1/gifs/search?api_key=7099ZZ1D1aEpQ3sBZ2P7Q54W67UEuHy7&q=hi&limit=1&offset=0&rating=g&lang=en'

    }).then(response=>{
        console.log('axios response', response.data)
        res.send(response.data)
    }).catch(err=>{
        console.log('error in giphy', err.data);
        res.sendStatus(500);
    })
})

module.exports = router;