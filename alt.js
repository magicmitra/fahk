const axios = require("axios");
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/.env') });


axios({
    "method":"GET",
    "url": `https://${process.env.API_HOST}/sports/2/events/2019-09-29`,
    "headers":{
    "content-type":"application/octet-stream",
    'x-rapidapi-host': `${process.env.API_HOST}`,
    'x-rapidapi-key': `${process.env.API_KEY}`,
    },"params":{
    "include":["all_periods",
    "scores"],"offset":"0"
    }
    })
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
});