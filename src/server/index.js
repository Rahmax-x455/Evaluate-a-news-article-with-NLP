const path = require('path')
const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')
dotenv.config()
const app = express()

//API 
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?"
const API_KEY = process.env.API_KEY
console.log(`API key : ${process.env.API_KEY}`)

//GET request from Api https://api.meaningcloud.com/sentiment-2.1?
app.use(express.static('dist'))
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

//  listen port for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    console.log('working')
    res.send(mockAPIResponse)
})

app.post('/api', async (req,res)=>{
    console.log('api called succesfully')
    let inputURL = req.body.url;
    console.log(`URL::: ${baseURL}key=${API_KEY}&url=${inputURL}&lang=en`)
    let response = await fetch(`${baseURL}key=${API_KEY}&url=${inputURL}&lang=en`);
    let data = await response.json();
    console.log(data);
    res.send(data);
})
