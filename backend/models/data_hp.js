const sql = require("./db")


module.exports = {
     insert : (dataHpBaru,result) => {
       sql.query("insert into data_hp SET ?",dataHpBaru,(err,res)=>{
           if (err) {
               console.log("error",err);
               result(err,null)
               return;
           }
           result(null, {id: res.insertId, ...dataHpBaru});
       })
    },

    getDataHp : (result) =>{
        let query = "Select * From data_hp";
        sql.query(query,(err,res)=>{
            if (err) {
                console.log("error",err);
                result(null,err);
                return;
            }
            result(null,res)
        })
    },

    getDataHpByKodeHp : (kode_hp, result) =>{
        let query = `Select * From data_hp Where kode_hp =${kode_hp}`;
        console.log(kode_hp)
        sql.query(query, (err, res)=>{
            if (err) {
                console.log("error",err);
                result(null,err);
                return;
            }
            if (res.length) {
                result(null,res[0]);
                return
            }
            console.log(res)
            result ({kind : "not_found"},null)
        })
    },
    
    update:(kode_hp,data_hp,result)=>{
        sql.query(
            "UPDATE data_hp SET merek = ? WHERE kode_hp = ?",
            [data_hp.merek, kode_hp],
            (err,res) => {
                if (err) {
                    console.log("error",err);
                    result(null,err);
                    return;
                }
                if (res.affectedRows = 0) {
                    result(null, err);
                    return;
                }
                console.log("updated data hp : ",{kode_hp: kode_hp, ...data_hp});
                result(null,{kode_hp: kode_hp, ...data_hp});   
            }
        )
    },
    delete: (kode_hp, result) =>{
        sql.query("DELETE FROM data_hp WHERE kode_hp = ?", kode_hp,(err,res)=>{
            if (err) {
                console.log("error : ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({kind : "not_found"},null);
                return;
            }
            console.log("deleted siswa with kode hp : ",kode_hp);
            result(null,res);
        });
    },
    getNilaiHpByKodeHp:(nim,result) =>{
        try {
            sql.query(`SELECT data_hp.kode_hp, data_hp.merek,nilai_hp.harga,nilai_hp.kode_hp,nilai_hp.kelas_hp 
            FROM daftar_hp,data_hp,nilai_hp
            WHERE daftar_hp.id_hp=${id_hp} and nilai_hp.id_hp=${id_hp} and nilai_hp.kode_hp=data_hp.kode_hp`,(err,res) =>
            {
                result(null,res)
            }
            );
        } catch (error) {
            result(error,null)
        }
    }
}