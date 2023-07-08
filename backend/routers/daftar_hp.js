const express = require("express");
const routeDaftarHp = express.Router()
const controllerDaftarHp = require('../controllers/daftar_hp')

routeDaftarHp.route('/daftar_hp')
    .get(controllerDaftarHp.getDaftarHp)
    .post(controllerDaftarHp.insert)

routeDaftarHp.route('/daftar_hp/:id_hp')
    .put(controllerDaftarHp.update)
    .delete(controllerDaftarHp.delete)
    .get(controllerDaftarHp.getDaftarHpByIdHp)
    
routeDaftarHp.route('/daftar_hp/nilai/:id_hp')
    .get(controllerDaftarHp.getNilaiHpByIdHp)

    
module.exports = routeDaftarHp