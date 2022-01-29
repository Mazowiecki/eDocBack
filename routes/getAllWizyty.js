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
    connection.query(`SELECT data, powod, imie as imieLekarz, nazwisko as nazwiskoLekarz, specjalizacja as specjalizacjaLekarz, plec as plecLekarz FROM wizyta LEFT JOIN lekarz USING (id_lekarz) where id_users = ${req.query.id};`, function (error, results, fields) {
        const parsedResults = Object.values(JSON.parse(JSON.stringify(results)));
        if (!error) res.json({
            data: parsedResults
        });
    });
});

module.exports = router;
