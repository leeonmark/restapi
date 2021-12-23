'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuaEthernet);

    app.route('/tampil/:id')
        .get(jsonku.tampilethernetberdasarkanid);

    app.route('/tambah')
        .post(jsonku.tambahEthernet);

    app.route('/ubah')
        .put(jsonku.ubahEthernet);

    app.route('/hapus')
        .delete(jsonku.hapusEthernet);
};