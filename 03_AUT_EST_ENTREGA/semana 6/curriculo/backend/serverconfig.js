const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3023;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'curriculo.db'; 
const bodyParser = require('body-parser');
const { get } = require('express/lib/response');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static("../frontend/"));

app.get('/parceiros', (req, res) => {
var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM projetos ORDER BY parceiro';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close(); 
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
