const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/belt');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const path = require('path');
app.use(express.static(__dirname + '/angular-app/dist'));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, () => console.log("listening on port 8000"));
