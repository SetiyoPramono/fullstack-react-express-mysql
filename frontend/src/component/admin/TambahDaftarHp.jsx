import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

function TambahDaftarHp() {
  const [idHp, setIdHp] = useState('');
  const [nama, setNama] = useState('');
  const [tahun, setTahun] = useState('');
  const [jenis, setJenis] = useState('');

  const his= useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/daftar_hp', {
        id_hp: idHp,
        nama: nama,
        tahun: tahun,
        jenis: jenis
      });

      console.log(response.data); // Respon dari server
      // Lakukan pemrosesan data lainnya atau perbarui state komponen lain jika diperlukan
      his.push("/daftarhp")
    } catch (error) {
      console.error(error);
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
        Nama:
        <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} />
      </label>
      <br />
      <label>
        Tahun:
        <input type="text" value={tahun} onChange={(e) => setTahun(e.target.value)} />
      </label>
      <br />
      <label>
        Jenis:
        <input type="text" value={jenis} onChange={(e) => setJenis(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TambahDaftarHp;
