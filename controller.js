'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("REST API punyaku paling dabbest!!",res)
};

//menampilkan semua data ethernet
exports.tampilsemuaethernet = function(req,res){
    connection.query('SELECT * FROM ethernet', function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};
