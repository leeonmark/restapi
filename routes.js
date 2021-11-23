'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuaethernet);

    app.route('/tampil/:id')
        .get(jsonku.tampilkanberdasarkanid);
    app.route('/tambah')
        .post(jsonku.tambahEthernet);

    app.route('/ubah')
        .put(jsonku.ubahEthernet);
    app.route('/hapus')
        .delete(jsonku.hapusEthernet);
}