'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("REST 4 API!!", res)
};

//menampilkan semua data ethernet
exports.tampilsemuaEthernet = function (req, res) {
    connection.query('SELECT * FROM ethernet', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data ethernet berdasarkan id
exports.tampilethernetberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM ethernet WHERE id = ?', [ID],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menambah data ethernet
exports.tambahEthernet = function (req, res) {
    var nama = req.body.nama;
    var current = req.body.current;
    var voltage = req.body.voltage;

    connection.query('INSERT INTO ethernet (nama,current,voltage) VALUES(?,?,?)',
        [nama, current, voltage],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

//mengubah data ethernet berdasarkan id
exports.ubahEthernet = function (req, res) {
    var nama = req.body.nama;
    var current = req.body.current;
    var voltage = req.body.voltage;

    connection.query('UPDATE ethernet SET nama=?, current=?, voltage=? WHERE id=?', [nama, current, voltage, ID],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
};

//menghapus data ethernet berdasarkan id
exports.hapusEthernet = function (req, res) {
    var id = req.body.ID;
    connection.query('DELETE FROM Ethernet WHERE id=?', [ID],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
};