const res = require('express/lib/response')
const NilaiHp = require('../models/nilai_hp')

module.exports = {

    getNilaiHp: (req, res) => {
        NilaiHp.getNilaiHp((err, data) => {
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
    NilaiHp.insert(req.body,(err,data) =>{
        if (err) {
            res.status(500).send({
                message : err.message || "Terjadi Error"
            })
        }else{
            res.send(data) 
        }
    })},

    getNilaiHpByIdHp : (req,res)=>{
        NilaiHp.getNilaiHpByIdHp(req.params.id_hp,(err,data)=>{
           if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message : `Nilai dengan id Hp ${req.params.id_hp} tidak di temukan`
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
        NilaiHp.update(req.params.id_hp,req.body,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `Nilai dengan id HP ${req.params.id_hp} tidak di temukan`
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
        NilaiHp.delete(req.params.id_hp,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `Nilai dengan Nim ${req.params.id_hp} tidak di temukan`
                    });
                }
                else{
                    res.status(500).send({
                        message : "Data tidak tersedia"
                    });
                }
               }
               else{
                   res.send({message: `Nilai sudah di hapus`});
               }            
        });
    },
    getNilaiHpByIdHp : (req,res)=>{
        NilaiHp.getNilaiHpByIdHp(req.params.id_hp,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `Nilai dengan id HP ${req.params.id_hp} tidak di temukan`
                    });
                }
                else{
                    res.status(500).send({
                        nilai : []
                    });
                }
               }
               else{
                   res.send(data);
               }            
        });
    }
}