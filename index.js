'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('./utils/db');

app.use(bodyParser.urlencoded({extended: false}));

db.on('connected', () => {
    app.listen(3000);
});

// for parsing html form x-www-form-urlencoded
// and/or app.use(express.json()); // for parsing application/json
app.use('/cat', require('./routes/catRoute'));

