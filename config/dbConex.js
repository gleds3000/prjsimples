
var mysql = require('mysql');

var connMySQL = function () {
    console.log('Conexao com o bd - Ok');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'devopsminda',
        database: 'portal_servicos'

    });
}
module.exports = function () {
   // console.log('O autoload carregou o módulo de conexão com o bd');
    console.log('bd carregado', new Date().toISOString());
    return connMySQL;
}

