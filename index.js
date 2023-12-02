const translate = require('./translate.js');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/translate', (req, res) => {
    const { text, lang } = req.query;
    translate(text, lang)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

app.listen(process.env.PORT || 3000, (port) => {
    console.log(`Example app listening on port ${port}!`);
}