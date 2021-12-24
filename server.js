const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json('hi')
})

app.get('/news', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://crypto-news-live.p.rapidapi.com/news',
        headers: {
            'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
        }
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.error(error)
    })
})

app.get('/exchange', (req, res) => {
    const toCurrency = req.query.to_currency
    const fromCurrency = req.query.from_currency
    var axios = require("axios").default;

    var options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {from_currency: fromCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: toCurrency},
    headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': 'b6b33d0bfamshd9b6b54f9d73d11p1ade29jsn63a671b0d04d'
    }
    }

    axios.request(options).then((response) => {
        res.json(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
    }).catch((error) => {
        console.error(error)
    })
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))