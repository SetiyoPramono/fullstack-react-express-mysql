const sql = require("./db")


module.exports = {
     insert : (nilaiHpBaru,result) => {
       sql.query("insert into nilai SET ?",nilaiHpBaru,(err,res)=>{
           if (err) {
               console.log("error",err);
               result(err,null)
               return;
           }
           result(null, {id: res.insertId, ...nilaiHpBaru});
       })
    },

    getNilaiHp : (result) =>{
        let query = "Select * From nilai_hp";
        sql.query(query,(err,res)=>{
            if (err) {
                console.log("error",err);
                result(null,err);
                return;
            }
            result(null,res)
        })
    },

    getNilaiHpByIdHp : (id_hp, result) =>{
        let query = `Select * From nilai_hp Where id_hp =${id_hp}`;
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
    update:(id_hp,nilai_hp,result)=>{
        sql.query(
            "UPDATE nilai_hp SET harga = ?, kode_hp = ?, nilai_hp = ?, kelas_hp = ? WHERE id_hp = ?",
            [nilai_hp.harga, nilai_hp.kode_hp, nilai_hp.nilai_hp_hp, nilai_hp.kelas_hp, id_hp],
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
                console.log("updated nilai Hp : ",{id_hp: id_hp, ...nilai_hp});
                result(null,{id_hp: id_hp, ...nilai_hp});   
            }
        )
    },
    delete: (id_hp, result) =>{
        sql.query("DELETE FROM nilai_hp WHERE id_hp = ?", id_hp,(err,res)=>{
            if (err) {
                console.log("error : ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({kind : "not_found"},null);
                return;
            }
            console.log("deleted nilai with id Hp : ",id_hp);
            result(null,res);
        });
    },
    // getNilaiHpByIdHp:(nim,result) =>{
    //     try {
    //         sql.query(`SELECT matakuliah.kdMk, matakuliah.matakuliah,nilai.dosen,nilai.semester,nilai.nilai 
    //         FROM siswa,matakuliah,nilai
    //         WHERE siswa.nim=${nim} and nilai.nim=${nim} and nilai.kdMk=matakuliah.kdMk`,(err,res) =>
    //         {
    //             result(null,res)
    //         }
    //         );
    //     } catch (error) {
    //         result(error,null)
    //     }
    // }
}