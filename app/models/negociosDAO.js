function NegocioDAO(connection){

    this._connection = connection;    

}



NegocioDAO.prototype.getNoticias = function(callback){

    this._connection.query('select * from lavagem  order by data_criacao desc',callback);

}



NegocioDAO.prototype.getNoticia = function(id_lavagem, callback) {

    console.log(id_lavagem.id_lavagem);

    this._connection.query('SELECT * FROM lavagem WHERE id_lavagem = ' + id_lavagem.id_lavagem, callback);

}



NegocioDAO.prototype.salvarNoticia = function(lavagem,  callback) {

    this._connection.query('INSERT INTO lavagem SET ?', lavagem, callback)                                                                                                                                                                                                                                                                                                                                                                                                                                             }



NegocioDAO.prototype.get5UltimasInformacoes = function(callback){



    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);

}



module.exports = function () {

    return NoticiasDAO;

}


