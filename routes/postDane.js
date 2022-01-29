var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Password',
  database : 'konowal'
});

router.post('/', (req, res, next) => {
  connection.query(`insert into daneUsera (imie, nazwisko, pesel, miasto ) values('${req.body.imie}', '${req.body.nazwisko}', '${req.body.pesel}', '${req.body.miasto}');`, function (error, results, fields) {
    connection.query(`UPDATE users SET id_daneUsera = ${results.insertId} WHERE id_users = ${req.body.id};`, function (error, results, fields) {
      if (!error) res.sendStatus(200);
    });
  });
});

module.exports = router;
