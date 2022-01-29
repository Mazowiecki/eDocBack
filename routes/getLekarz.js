var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Password',
    database : 'konowal'
});

router.get('/', (req, res, next) => {
    connection.query(`select * from lekarz;`, function (error, results, fields) {
        const parsedResults = Object.values(JSON.parse(JSON.stringify(results)));
        res.json({
            data: parsedResults
        });
    });
});

module.exports = router;
