'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuadata);

    app.route('/tampil/:id')
        .get(jsonku.tampildataberdasarkanid);
    app.route('/tambah')
        .post(jsonku.tambahData);

    app.route('/ubah')
        .put(jsonku.ubahData);
    app.route('/hapus')
        .delete(jsonku.hapusData);
};