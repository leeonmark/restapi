'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("REST API!!", res)
};

//menampilkan semua data ethernet
exports.tampilsemuaethernet = function (req, res) {
    connection.query('SELECT * FROM ethernet', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });

    //menampilkan semua data ethernet berdasarkan id
    exports.tampilkanberdasarkanid = function (req, res) {
        let id = req.params.id;
        connection.query('SELECT * FROM ethernet WHERE ID = ?', [id],
            function (error, rows, fields) {
                if (error) {
                    console.log(error);
                } else {
                    response.ok(rows, res);
                }
            });
    };
}