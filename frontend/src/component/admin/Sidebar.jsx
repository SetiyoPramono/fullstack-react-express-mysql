import React from "react";
import { NavLink } from "react-router-dom";


function Sidebar() {
  
  return (
    <>  
      <div
        className=" text-center d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: 260, height: "87vh"}}
      >
          <h5 className="fs-4 ">Admin</h5>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/adminkonter" className="nav-link text-white bg-dark" aria-current="page" >
              Semua Data
            </NavLink>
          </li>
          <li>
            <NavLink to="/daftarhp" className="nav-link text-white bg-dark">
              Daftar Hp
            </NavLink>
          </li>
          <li>
            <NavLink to="/datahp" className="nav-link text-white bg-dark">
              Data Hp
            </NavLink>
          </li>
          <li>
            <NavLink to="/nilaihp" className="nav-link text-white bg-dark">
              Nilai Hp
            </NavLink>
          </li>
        </ul>
        <hr />
        {/* <button  className="btn btn-outline-light">
          Log out
        </button> */}
      </div>
    </>
  );
}

export default Sidebar;
