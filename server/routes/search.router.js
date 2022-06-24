const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:search', (req,res)=>{
    const {body}= req.params
    axios({
        method: 'GET', 
        url: `http://api.giphy.com/v1/gifs/search?api_key=F6nW3UDjQfQ5iBiM8p0xw3PD3cqM7Vhw&q=${body}&limit=10`,

    }).then(response=>{
        console.log('axios response', response.data)
        res.send(response.data)
    }).catch(err=>{
        console.log('error in giphy', response.data);
        res.sendStatus(500);
    })
})

module.exports = router;