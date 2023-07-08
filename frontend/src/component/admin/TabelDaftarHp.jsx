import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class TabelDaftarHp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datahp: [],             // Array untuk menyimpan data HP
      selectedItem: null,     // Item yang dipilih untuk diedit
      searchId: "",           // Nilai pencarian berdasarkan ID HP
      searchResult: null      // Hasil pencarian
    };
  }

  componentDidMount() {
    this.getDataHp();        // Memanggil fungsi untuk mengambil data HP
  }

  // Mengambil data HP dari API
  getDataHp = () => {
    axios
      .get("http://localhost:8000/daftar_hp")
      .then((response) => {
        this.setState({ datahp: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Mengubah nilai input pada saat pengguna memasukkan ID HP
  handleSearchIdChange = (event) => {
    this.setState({ searchId: event.target.value });
  };

  // Melakukan pencarian berdasarkan ID HP yang dimasukkan
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

  // Mengubah nilai input saat pengguna mengedit data HP
  handleEditChange = (event) => {
    const { selectedItem } = this.state;
    const { name, value } = event.target;
    selectedItem[name] = value;
    this.setState({ selectedItem });
  };

  // Menyimpan perubahan data HP yang diedit
  handleSave = () => {
    const { selectedItem } = this.state;

    axios
      .put(
        `http://localhost:8000/daftar_hp/${selectedItem.id_hp}`,
        selectedItem
      )
      .then((response) => {
        console.log("Data berhasil diperbarui");
        this.setState({ selectedItem: null }, this.getDataHp);
      })
      .catch((error) => {
        console.error("Error dalam memperbarui data:", error);
      });
  };

  // Membatalkan proses edit dan menghapus data yang sudah diubah
  handleCancel = () => {
    this.setState({ selectedItem: null });
  };

  // Memilih data HP yang akan diedit
  handleEdit = (item) => {
    this.setState({ selectedItem: item });
  };

  // Menghapus data HP
  handleDelete = (item) => {
    axios
      .delete(`http://localhost:8000/daftar_hp/${item.id_hp}`)
      .then((response) => {
        console.log("Data berhasil dihapus");
        this.getDataHp();
      })
      .catch((error) => {
        console.error("Error dalam menghapus data:", error);
      });
  };

  render() {
    const { datahp, selectedItem, searchId, searchResult } = this.state;
    const hpList = searchResult || datahp;

    return (
      <>
        <h1 className="text-center">Daftar HP</h1>
        <div className="container mt-3">
          <NavLink to="/tmbdaftarhp" className="btn btn-primary btn-sm">
            Tambah Daftar
          </NavLink>
          <div className="">
            {selectedItem ? (
              <div>
                {/* Tampilan saat melakukan edit */}
                <input
                  type="text"
                  name="nama"
                  value={selectedItem.nama}
                  onChange={this.handleEditChange}
                />
                <input
                  type="text"
                  name="tahun"
                  value={selectedItem.tahun}
                  onChange={this.handleEditChange}
                />
                <input
                  type="text"
                  name="jenis"
                  value={selectedItem.jenis}
                  onChange={this.handleEditChange}
                />
                <button
                  className="btn btn-primary btn-sm"
                  onClick={this.handleSave}
                >
                  Simpan
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={this.handleCancel}
                >
                  Batal
                </button>
              </div>
            ) : (
              <>
                {/* Tampilan saat tidak melakukan edit */}
                <div className="form-group">
                  <label htmlFor="searchId">Search by ID HP:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cari berdasarkan ID HP"
                    id="searchId"
                    value={searchId}
                    onChange={this.handleSearchIdChange}
                  />
                </div>
                <button className="btn btn-primary" onClick={this.handleSearch}>
                  Search
                </button>
                <table className="table table-sm" style={{ width: "500px" }}>
                  <thead className="">
                    <tr>
                      <th>Id HP</th>
                      <th>Nama</th>
                      <th>Tahun</th>
                      <th>Jenis</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hpList.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.id_hp}</td>
                        <td>{item.nama}</td>
                        <td>{item.tahun}</td>
                        <td>{item.jenis}</td>
                        <td>
                          <button
                            className="btn btn-warning btn-sm"
                            onClick={() => this.handleEdit(item)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => this.handleDelete(item)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default TabelDaftarHp;
