const express = require("express");
const routeNilaiHp = express.Router()
const controllerNilaiHp = require('../controllers/nilai_hp')

routeNilaiHp.route('/nilai_hp')
    .get(controllerNilaiHp.getNilaiHp)
    .post(controllerNilaiHp.insert)

routeNilaiHp.route('/nilai_hp/:id_hp')
    .put(controllerNilaiHp.update)
    .delete(controllerNilaiHp.delete)
    .get(controllerNilaiHp.getNilaiHpByIdHp)
    
// routeNilaiHp.route('/siswa/nilai/:nim')
//     .get(controllerNilaiHp.getNilaiByNim)

    
module.exports = routeNilaiHp