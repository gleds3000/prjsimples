
var mysql = require('mysql');

var connMySQL = function () {
    console.log('Conexao com o bd foi estabelecida');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'devopsminda',
        database: 'portal_noticias'

    });
}
module.exports = function () {
   // console.log('O autoload carregou o módulo de conexão com o bd');
    console.log('bd acionado', new Date().toISOString());
    return connMySQL;
}
