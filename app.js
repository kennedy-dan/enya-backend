const express = require('express');
const app = express();
const axios = require('axios');
//const port = 3000;

const enya = async(req, res) => {

    const {base, currency} = req.query
    try {
        const results = await axios.get(`https://api.exchangeratesapi.io/latest?base=${ base }&symbols=${ currency }`)

        

        return res.status(200).send({
            results: results.data 
        });
          
    } catch (error) {
        return res.status(400).send({
            detail: error.message,
            message: 'request unsuccessful'
        })
    }
}

app.get ('/api/rates/', enya)



app.listen(process.env.PORT || 3000, () => {
    console.log('server has started on 3000')
});
