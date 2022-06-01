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

//endpoint para revelar os projeto realizados 
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

 //endpoint para adicionar projetos realizados 
app.post('/addparceiro', urlencodedParser, (req, res) => {
  sql = "INSERT INTO tbprojetos (parceiro, descricao) VALUES ('" + req.body.title + "', 33, false)";
  var db = new sqlite3.Database(DBPATH); 
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); 
  res.end();
});

//endpoint para atualizar os projetos realizados 
app.post('/parceiroupdate', urlencodedParser, (req, res) => {
  sql = "UPDATE tbUser SET title = '" + req.body.title + "' WHERE userId = " + req.body.userId;
  var db = new sqlite3.Database(DBPATH); 
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); 
});

//endpoint para deletar os projetos realizados
app.post('/parceirodelete', urlencodedParser, (req, res) => {
  sql = "DELETE FROM tbUser WHERE userId = " + req.body.userId;
  var db = new sqlite3.Database(DBPATH); 
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close();
});


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
