//se tem nao executa 
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "devopsminda"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE portal_noticias", function (err, result) {
    if (err) throw err;
    console.log("Base Criada");
  });
});
