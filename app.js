require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.SERVER_PORT;
const app = express();

app.use(express.static("./uploads"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use ('/upload', express.static('./upload'))

const router = require('./src/routers/index');

app.use('/api/v1', router);

app.listen(port, () => {
    console.log(`\n App Listen port ${port}`)
});

module.exports = app