import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  // const [isActive, setisActive] = useState(second)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 text-light py-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand h1" to="/" style={{ color: "orange" }}>
          MAKAZI
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="listings" className="nav-link">
                All Listings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/buy" className="nav-link">
                Buy
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="rent" className="nav-link">
                Rent
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="new" className="nav-link btn text-light" style={{ backgroundColor: "orange"}}>
                Add Listing
              </NavLink>
            </li>

            <li className="nav-item dropdown mr-auto">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My Account
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink to="login" className="dropdown-item">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="profile" className="dropdown-item">
                    Profile
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink to="home" className="dropdown-item">
                    Settings
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
