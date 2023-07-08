const res = require('express/lib/response')
const DataHp = require('../models/data_hp')

module.exports = {

    getDataHp: (req, res) => {
        DataHp.getDataHp((err, data) => {
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
    DataHp.insert(req.body,(err,data) =>{
        if (err) {
            res.status(500).send({
                message : err.message || "Terjadi Error"
            })
        }else{
            res.send(data) 
        }
    })},

    getDataHpByKodeHp : (req,res)=>{
        DataHp.getDataHpByKodeHp(req.params.kode_hp,(err,data)=>{
           if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message : `DataHp dengan kode HP ${req.params.kode_hp} tidak di temukan`
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
        DataHp.update(req.params.kode_hp,req.body,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `DataHp dengan kode HP ${req.params.kode_hp} tidak di temukan`
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
        DataHp.delete(req.params.kode_hp,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `DataHp dengan kodemapel ${req.params.kode_hp} tidak di temukan`
                    });
                }
                else{
                    res.status(500).send({
                        message : "Data tidak tersedia"
                    });
                }
               }
               else{
                   res.send({message: `DataHp sudah di hapus`});
               }            
        });
    },
    getDataHpByKodeHp : (req,res)=>{
        DataHp.getDataHpByKodeHp(req.params.kode_hp,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `DataHp dengan kode HP ${req.params.kode_hp} tidak di temukan`
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