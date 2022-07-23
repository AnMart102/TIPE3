const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',//Poner clave propia
    database: 'tipe3grupo1'
});

conn.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('La base de dato esta conectada')
    }
});

module.exports = conn;