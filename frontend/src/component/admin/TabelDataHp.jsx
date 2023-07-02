import React, { Component } from "react";
import axios from "axios";
import SemuaHpByIdHp from "./SemuaHpByIdHp";
import { NavLink } from "react-router-dom";

class TabelDataHp extends Component {
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
    axios
      .get("http://localhost:8000/data_hp")
      .then((response) => {
        this.setState({ datahp: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleEditChange = (event) => {
    const { selectedItem } = this.state;
    const { name, value } = event.target;
    selectedItem[name] = value;
    this.setState({ selectedItem });
  };

  handleSave = () => {
    const { selectedItem } = this.state;

    axios
      .put(
        `http://localhost:8000/data_hp/${selectedItem.kode_hp}`,
        selectedItem
      )
      .then((response) => {
        // Handle successful response
        console.log("Data berhasil diperbarui");
        // Reset selected item and reload data
        this.setState({ selectedItem: null }, this.getDataHp);
      })
      .catch((error) => {
        // Handle error
        console.error("Error dalam memperbarui data:", error);
      });
  };

  handleCancel = () => {
    this.setState({ selectedItem: null });
  };

  handleEdit = (item) => {
    this.setState({ selectedItem: item });
  };

  handleDelete = (item) => {
    axios
      .delete(`http://localhost:8000/data_hp/${item.kode_hp}`)
      .then((response) => {
        // Handle successful response
        console.log("Data berhasil dihapus");
        // Reload data
        this.getDataHp();
      })
      .catch((error) => {
        // Handle error
        console.error("Error dalam menghapus data:", error);
      });
  };

  render() {
    const { datahp, selectedItem } = this.state;

    return (
      <>
        <h1 className="text-center">Data Siswa Kelas 1</h1>
        <div className="container mt-3">
          <NavLink to="/tmbdaftarhp" className="btn btn-primary btn-sm">
            Tambah Daftar
          </NavLink>
          <SemuaHpByIdHp />
          <div className="">
            {selectedItem ? (
              <div>
                <input
                  type="text"
                  name="kode_hp"
                  value={selectedItem.kode_hp}
                  onChange={this.handleEditChange}
                />
                <input
                  type="text"
                  name="merek"
                  value={selectedItem.merek}
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
              <table className="table table-sm" style={{ width: "500px" }}>
                <thead className="">
                  <tr>
                    <th>Kode HP</th>
                    <th>Merek</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {datahp.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.kode_hp}</td>
                      <td>{item.merek}</td>
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
            )}
          </div>
        </div>
      </>
    );
  }
}

export default TabelDataHp;
