function contatoDAO(connection){
    this._connection = connection;
}

contatoDAO.prototype.insert = function(dados, callback){
    this._connection.query('INSERT INTO contato SET ?', dados, callback);
}

module.exports = function(){
    return contatoDAO;
};