import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

function TambahDataHp() {
  const [kode_hp, setKodeHp] = useState('');
  const [merek, setMerek] = useState('');

  const his= useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/data_hp', {
        kode_hp: kode_hp,
        merek: merek,
        
      });

      console.log(response.data); // Respon dari server
      // Lakukan pemrosesan data lainnya atau perbarui state komponen lain jika diperlukan
      his.push("/datahp")
    } catch (error) {
      console.error(error);
      // Tangani error jika terjadi
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Kode HP:
        <input type="text" value={kode_hp} onChange={(e) => setKodeHp(e.target.value)} />
      </label>
      <br />
      <label>
        Merek:
        <input type="text" value={merek} onChange={(e) => setMerek(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TambahDataHp;
