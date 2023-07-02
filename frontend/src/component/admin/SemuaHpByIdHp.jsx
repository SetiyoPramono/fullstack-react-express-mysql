import { useState } from "react";
import { useHistory } from 'react-router-dom'

const SemuaHpByIdHp = () =>{
    const [id_hp, setIdHp] = useState('')
    const his= useHistory()
    const getDataHpByIdHp = (e) =>{
        e.preventDefault();
        console.log(id_hp)
        his.push({
            pathname : '/adminkonter',
            query : {'id_hp': id_hp}
        })
    }
    return(
        <div className="container py-1">
            <form onSubmit={getDataHpByIdHp}>
                <div className=""> 
                <div className=""> </div>
                <div className="d-flex flex-reverse">
                        <input type='text' className="form-control" placeholder="Cari Id Hp" value={id_hp} onChange={(e)=>setIdHp(e.target.value)}/>
                        <input type="submit" value="Cari"  className="btn btn-dark ms-1 fs-6"/>
                </div>
                </div>
            </form>
        </div>
    )
}

export default SemuaHpByIdHp;
