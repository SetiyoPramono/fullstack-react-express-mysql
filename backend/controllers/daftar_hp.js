const res = require('express/lib/response')
const DaftarHp = require('../models/daftar_hp')

module.exports = {

    getDaftarHp: (req, res) => {
        DaftarHp.getDaftarHp((err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Terjadi Error",
                });
            } else {
                res.send(data);
            }
        })
    },

    insert : (req,res)=>{
        //Ambil data request dari front end
        if (!req.body) {
            res.status(400).send({message : "Data tidak boleh kosong"})
        }
        DaftarHp.insert(req.body,(err,data) =>{
        if (err) {
            res.status(500).send({
                message : err.message || "Terjadi Error"
            })
        }else{
            res.send(data) 
        }
    })},

    getDaftarHpByIdHp : (req,res)=>{
        DaftarHp.getDaftarHpByIdHp(req.params.id_hp,(err,data)=>{
           if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message : `Siswa dengan id HP ${req.params.id_hp} tidak di temukan`
                })
            }
            else{
                res.status(500).send({
                    message : "Data tidak tersedia"
                })
            }
           }
           else{
               res.send(data)
           }
        }) 
    },

    update : (req,res)=>{
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be  empty"
            });
        }
        DaftarHp.update(req.params.id_hp,req.body,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `Siswa dengan id HP ${req.params.id_hp} tidak di temukan`
                    })
                }
                else{
                    res.status(500).send({
                        message : "Data tidak tersedia"
                    })
                }
               }
               else{
                   res.send(data)
               }    
        })
    },

    delete : (req,res)=>{
        DaftarHp.delete(req.params.id_hp,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `Siswa dengan id HP ${req.params.id_hp} tidak di temukan`
                    });
                }
                else{
                    res.status(500).send({
                        message : "Data tidak tersedia"
                    });
                }
               }
               else{
                   res.send({message: `Siswa sudah di hapus`});
               }            
        });
    },
    getNilaiHpByIdHp : (req,res)=>{
        DaftarHp.getNilaiHpByIdHp(req.params.id_hp,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `Siswa dengan id HP ${req.params.id_hp} tidak di temukan`
                    });
                }
                else{
                    res.status(500).send({
                        nilai_hp : []
                    });
                }
               }
               else{
                   res.send(data);
               }            
        });
    }
}