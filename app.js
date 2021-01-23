const express = require('express');
const app = express();
const axios = require('axios');
//const port = 3000;



app.get ('/api/rates/', async(req, res) => {

    const {base, currency} = req.query
    try {
        const results = await axios({
            url: encodeURI(`https://api.exchangeratesapi.io/latest?base=${ base }&symbols=${ currency }`),
            method: 'get',
        })

        return res.status(200).send({
            status_code: 200,
            results: results.data 
        });
          
    } catch (error) {
        return res.status(400).send({
            status_code: 400,
            detail: error.message,
            message: 'Invalid request'
        })
    }
})



app.listen(process.env.PORT || 3000, () => {
    console.log('server has started')
});
