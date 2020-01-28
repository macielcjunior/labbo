const mysql = require('mysql');

//AMBIENTE MYSQL
const HOST = process.env.MYSQL_HOST;
const USER = process.env.MYSQL_USER;
const PSSWRD = process.env.MYSQL_PSSWRD;
const DATABASE = process.env.MYSQL_DATABASE;

function createDBConnection(){
    return mysql.createConnection({
        host: HOST,
        user: USER,
        password: PSSWRD,
        database: DATABASE
    });
}

module.exports = function(){
    return createDBConnection;
}