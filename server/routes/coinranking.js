var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
var cors = require('cors');

var corsOptions = {
    // only allow specified domains to request data
    origin: ["https://crypto-app-netlify.netlify.app"], 

    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get('/', cors(corsOptions), (req, res) => {
    fetch("https://coinranking1.p.rapidapi.com/coins", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.RAPID_API_KEY, // key is placed in Heroku environemnt variable to protect my Rapid API key
            "x-rapidapi-host": "coinranking1.p.rapidapi.com"
        }
    })
        .then(response => {
            return response.json();
        })
        .then(responseJSON => {
            res.json(responseJSON);
        })
        .catch(err => {
            console.error(err);
        });
});

module.exports = router;