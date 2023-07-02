import React, { Component } from 'react';
import axios from 'axios';
import SemuaHpByIdHp from './SemuaHpByIdHp';

class DataSemuaHp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datahp: [],
    };
  }

  componentDidMount() {
    this.getDataHp();
  }

  getDataHp = () => {
    axios.get('http://localhost:8000/daftar_hp')
      .then((response) => {
        this.setState({ datahp: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { datahp } = this.state;

    return (
      <>
        <h1 className="text-center">Data Siswa Kelas 1</h1>
        <div className="container mt-3">
          <SemuaHpByIdHp />
          <div className="w-100">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Id HP</th>
                <th>Nama</th>
                <th>Tahun</th>
                <th>Jenis</th>
                <th>Kode HP</th>
                <th>Harga</th>
                <th>Kelas HP</th>
              </tr>
            </thead>
            <tbody>
              {datahp.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.id_hp}</td>
                  <td>{item.nama}</td>
                  <td>{item.tahun}</td>
                  <td>{item.jenis}</td>
                  <td>{item.kode_hp}</td>
                  <td>{item.harga}</td>
                  <td>{item.kelas_hp}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </>
    );
  }
}

export default DataSemuaHp;
