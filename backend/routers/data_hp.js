const express = require("express");
const routeDataHp = express.Router()
const controllerDataHp = require('../controllers/data_hp')

routeDataHp.route('/data_hp')
    .get(controllerDataHp.getDataHp)
    .post(controllerDataHp.insert)

routeDataHp.route('/data_hp/:kode_hp')
    .put(controllerDataHp.update)
    .delete(controllerDataHp.delete)
    .get(controllerDataHp.getDataHpByKodeHp)
    
// routeDataHp.route('/siswa/nilai/:nim')
//     .get(controllerDataHp.getNilaiByNim)

    
module.exports = routeDataHp