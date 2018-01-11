const express = require('express');
const app = express();

const session = require('express-session');
const sessionConfig = {
    saveUninitialized: true,
    secret: 'dsn393h92nf8249',
    resave: false,
    name:'session',
    rolling: true,
    cookie:{
        secure: false,
        httpOnly: false,
        maxAge: 360000,
    }
}
app.use(session(sessionConfig));

const cookieParser = require('cookie-parser');
app.use(cookieParser('tsdgn459wfn3823'));

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
