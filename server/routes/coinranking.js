var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
var cors = require('cors');

let isProduction = process.env.NODE_ENV === "production";
let corsAllowedOrigins = ["https://crypto-app-netlify.netlify.app"];
if(!isProduction)
    corsAllowedOrigins.push("http://localhost:3000");

var corsOptions = {
    // only allow specified domains to request data
    origin: corsAllowedOrigins, 
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get('/', cors(corsOptions), (req, res) => {
    fetch("https://api.coinranking.com/v2/coins", {
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
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