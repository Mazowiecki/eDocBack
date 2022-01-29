var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var moment = require('moment');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Password',
    database : 'konowal'
});


router.post('/', (req, res, next) => {
    const convertedDate = moment(req.body.date).format('YYYY-MM-DD HH:mm:ss')
    connection.query(`INSERT INTO wizyta (data, powod, id_users, id_lekarz) values('${convertedDate}', '${req.body.powod}', '${req.body.id_users}', '${req.body.id_lekarz}');`, function (error, results, fields) {
        if (!error) res.sendStatus(200);
    });
});

module.exports = router;
