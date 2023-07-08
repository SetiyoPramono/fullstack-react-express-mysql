import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

function TambahNilaiHp() {
  const [idHp, setIdHp] = useState('');
  const [harga, setHarga] = useState('');
  const [kode_hp, setKodeHp] = useState('');
  const [nilai_hp, setNilaiHp] = useState('');
  const [kelas_hp, setKelasHp] = useState('');

  const his= useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/nilai_hp', {
        id_hp: idHp,
        harga: harga,
        kode_hp: kode_hp,
        nilai_hp: nilai_hp,
        kelas_hp: kelas_hp
      });

      console.log(response.data); // Respon dari server
      // Lakukan pemrosesan data lainnya atau perbarui state komponen lain jika diperlukan
      his.push("/nilaihp")
    } catch (error) {
      console.error(error);
      console.log("data tidak masuk")
      // Tangani error jika terjadi
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID HP:
        <input type="text" value={idHp} onChange={(e) => setIdHp(e.target.value)} />
      </label>
      <br />
      <label>
        Harga:
        <input type="text" value={harga} onChange={(e) => setHarga(e.target.value)} />
      </label>
      <br />
      <label>
        Kode HP:
        <input type="text" value={kode_hp} onChange={(e) => setKodeHp(e.target.value)} />
      </label>
      <br />
      <label>
        Nilai HP
        <input type="text" value={nilai_hp} onChange={(e) => setNilaiHp(e.target.value)} />
      </label>
      <br />
      <label>
        Kelas:
        <input type="text" value={kelas_hp} onChange={(e) => setKelasHp(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TambahNilaiHp;
