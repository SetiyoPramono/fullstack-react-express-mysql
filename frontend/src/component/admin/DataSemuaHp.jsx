import React, { Component } from 'react';
import axios from 'axios';

class DataSemuaHp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datahp: [],
      searchId: '',
      searchResult: null,
    };
  }

  componentDidMount() { 
    this.getDataHp();
  }

  getDataHp = () => {
    axios
      .get('http://localhost:8000/daftar_hp')
      .then((response) => {
        this.setState({ datahp: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSearchIdChange = (e) => {
    this.setState({ searchId: e.target.value });
  };

  handleSearch = () => {
    const { searchId } = this.state;
    axios
      .get(`http://localhost:8000/daftar_hp/nilai/${searchId}`)
      .then((response) => {
        this.setState({ searchResult: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ searchResult: null });
      });
  };

  render() {
    const { datahp, searchResult } = this.state;
    const hpList = searchResult || datahp;

    return (
      <>
        <h1 className="text-center">Data Semua HP</h1>
        <div className="container mt-3">
          <div className="w-100">
            <div className="form-group">
              <label htmlFor="searchId">Search by ID HP:</label>
              <input
                type="text"
                className="form-control"
                id="searchId"
                value={this.state.searchId}
                onChange={this.handleSearchIdChange}
              />
            </div>
            <button className="btn btn-primary" onClick={this.handleSearch}>
              Search
            </button>
            <table className="table table-sm mt-3">
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
                {hpList.map((item, idx) => (
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
