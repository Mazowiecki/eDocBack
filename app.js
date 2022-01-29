var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var postLogin = require('./routes/postLogin');
var postDane = require('./routes/postDane');
var postWizyta = require('./routes/postWizyta');
var getAllWizyty = require('./routes/getAllWizyty');
var getLekarz = require('./routes/getLekarz');

var app = express();

app.listen(process.env.PORT || 5001, () => console.log(`Example app listening on port ${5001}!`));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  next();
})
app.options('*', cors());



app.use('/login', postLogin);
app.use('/dane', postDane);
app.use('/wizyta', postWizyta);
app.use('/allWizyty', getAllWizyty);
app.use('/lekarze', getLekarz);



module.exports = app;
