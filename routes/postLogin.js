var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Mazowiecki112',
  database : 'konowal'
});

router.post('/', (req, res, next) => {
  connection.query('SELECT id_users as id, login, password, isAdmin, isLekarz, isPacjent, imie, nazwisko, pesel, miasto from users LEFT JOIN daneUsera USING (id_daneUsera) ORDER BY id;', function (error, results, fields) {
    if (error) throw error;
    const parsedResults = Object.values(JSON.parse(JSON.stringify(results)));

    for (const user of parsedResults) {
      if (user.login === req.body.login && user.password === req.body.password) {
        res.json({
          data: user
        });
        return;
      }
    }
    res.sendStatus(500);
  });
});

module.exports = router;
