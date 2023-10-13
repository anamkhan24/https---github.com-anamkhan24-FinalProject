import React from "react";
import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { allowUser } from "./Service";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await allowUser();

      localStorage.removeItem("token", response.token);
      navigate("/login");
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <>
      <header>
        <div className="navbar">
          <h2>Shopping App</h2>

          <div className="nav-address border">
            <p className="add-first">Deliver to</p>
            <div className="add-icon">
              <i className="fa-solid fa-location-dot"></i>
              <p className="add-second">Pakistan</p>
            </div>
          </div>

          <div className="nav-search">
            <select className="search-select">
              <option>All</option>
            </select>
            <input placeholder="Search" class="search-input" />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className="nav-singin border">
              <p></p>
            </div>
          </div>

          <div className="nav-cart border">
            <i className="fa-solid fa-cart-shopping"></i>
            CART
          </div>

          <div class="panel">
            <div class="panel-all">
              <i class="fa-solid fa-bars"></i>
            </div>
            <div class="panel-ops"></div>
            <div class="panel-deals">
              <p>Shop Great Deals Now</p>
            </div>
          </div>

          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="panel-two"></div>
      </header>
      <div className="panel-two">
        <div className="hpd">
          <NavLink to exact path="/home" className="navlink">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to exact path="/prodetails" className="navlink">
            ProDetails
          </NavLink>
        </div>
        <div>
          <NavLink to exact path="/cart" className="navlink">
            Cart
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Navbar;
