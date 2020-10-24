// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const fetch = require('node-fetch');


// const app = express();
// // app.use(bodyParser.json());
// app.use(cors());

// const weatherApiKey = '5630746449064f969f3889643b4b86a7'
// // get weather 
// app.get('/api/weather/:city/:country', (req, res) =>{
//     const {city, country} = req.params;
//     const baseURL = 'https://api.weatherbit.io/v2.0/current?city='
//     const url = ''.concat(baseURL, city, '&country=', country, '&key=', weatherApiKey);
//     fetch(url)
//         .then(result=>result.json())
//         .then(result => res.status(200).json(result))
//         .then(data=>console.log(data))
//         .catch(err=> res.status(400).json('fetch movie issue'))  
// })


// const port = process.env.PORT || 3000
// app.listen(port, ()=> {
//     console.log(`app is running on port ${port}`)
// }) 