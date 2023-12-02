
const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.static('save'));

app.listen(process.env.PORT || 3000, (port) => {
    console.log(`Example app listening on port ${port}!`);
});