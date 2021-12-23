var dbConn = require('../../config/db.config');

var Data = function(data){
    this.nama    =   data.nama;
    this.current =   data.current;
    this.voltage =   data.voltage;
    this.time    =   new Date();
}

//menampilkan semua data
exports.tampilsemuaEthernet = function (req, res) {
    connection.query('SELECT * FROM ethernet', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data berdasarkan id
exports.tampilethernerdataberdasarkanid = function (req, res) {
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

//menambah data
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

//mengubah data berdasarkan id
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

//menghapus data berdasarkan id
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