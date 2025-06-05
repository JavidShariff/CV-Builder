import React from "react";
import { Link } from "react-router-dom";
// import App from "../App";
import "./Navbar.css"
const Navbar = (props) => {
  const {setCurrentuser} = props;
  const logout = ()=>{
    setCurrentuser(false)
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            CV-Builder
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/introrv">
                Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/introjo">
                Job-Order
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn" onClick={logout} style={{width: "100px"}}> Logout</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
