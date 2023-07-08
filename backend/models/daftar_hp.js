const sql = require("./db")


module.exports = {
     insert : (daftarHpBaru,result) => {
       sql.query("insert into daftar_hp SET ?",daftarHpBaru,(err,res)=>{
           if (err) {
               console.log("error",err);
               result(err,null)
               return;
           }
           result(null, {id: res.insertId, ...daftarHpBaru});
       }) 
    },

    getDaftarHp : (result) =>{
        let query = "Select * From daftar_hp";
        sql.query(query,(err,res)=>{
            if (err) {
                console.log("error",err);
                result(null,err);
                return;
            }
            result(null,res)
        })
    },

    getDaftarHpByIdHp : (id_hp, result) =>{
        let query = `Select * From daftar_hp Where id_hp ="${id_hp}"`;
        console.log(id_hp)
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
    update:(id_hp,daftar_hp,result)=>{
        sql.query(
            "UPDATE daftar_hp SET nama = ?, tahun = ?, jenis = ? WHERE id_hp = ?",
            [daftar_hp.nama, daftar_hp.tahun, daftar_hp.jenis, id_hp],
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
                console.log("updated daftar_hp : ",{id_hp: id_hp, ...daftar_hp});
                result(null,{id_hp: id_hp, ...daftar_hp});   
            }
        )
    },
    delete: (id_hp, result) =>{
        sql.query("DELETE FROM daftar_hp WHERE id_hp = ?", id_hp,(err,res)=>{
            if (err) {
                console.log("error : ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({kind : "not_found"},null);
                return;
            }
            console.log("deleted daftar_hp with Id Hp : ",id_hp);
            result(null,res);
        });
    },
    getNilaiHpByIdHp:(id_hp,result) =>{
        try {
            sql.query(`SELECT daftar_hp.id_hp,daftar_hp.nama,daftar_hp.tahun,daftar_hp.jenis,data_hp.kode_hp,nilai_hp.harga,nilai_hp.kode_hp,nilai_hp.kelas_hp
            FROM daftar_hp,data_hp,nilai_hp
            WHERE daftar_hp.id_hp=${id_hp} and nilai_hp.id_hp=${id_hp} and nilai_hp.kode_hp=data_hp.kode_hp`,(err,res) =>
            {
                result(null,res)
            }
            );
        } catch (error) {
            result(error,null)
        }
    // }
    // getNilaiHpByIdHp: (id_hp, result) => {
    //     try {
    //       const query = `
    //         SELECT daftar_hp.id_hp, daftar_hp.nama, daftar_hp.tahun, daftar_hp.jenis, data_hp.kode_hp, nilai_hp.harga, nilai_hp.kode_hp, nilai_hp.kelas_hp
    //         FROM daftar_hp
    //         JOIN data_hp ON data_hp.kode_hp = nilai_hp.kode_hp
    //         JOIN nilai_hp ON nilai_hp.id_hp = daftar_hp.id_hp
    //         WHERE daftar_hp.id_hp = ?
    //       `;
    //       sql.query(query, [id_hp], (err, res) => {
    //         if (err) {
    //           console.log("Error executing query:", err);
    //           result(err, null);
    //           return;
    //         }
    //         result(null, res);
    //       });
    //     } catch (error) {
    //       result(error, null);
    //     }
    //   }
    }
}