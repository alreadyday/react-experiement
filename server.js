const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
const fetch = require('node-fetch');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/hello', (req, res) => {
    fetch(
        'https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_1101.tw|tse_1102.tw|tse_1103.tw|&json=1&delay=0&_=1552123547443'
    )
        .then(result => {
            return result.json();
        })
        .then(result => {
            console.warn(result);
            res.send(result);
        });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${ req.body.post }`
    );
});

app.listen(port, () => console.log(`Listening on port ${ port }`));
