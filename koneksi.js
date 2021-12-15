var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    port: '3306',
    host:'dbkelompoka.gmedia.bz',
    user:'gmedia_magangb',
    password:'indo1945!merdeka',
    database:'gmedia_magangb',
    connection:'mysql',
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = conn;