import React, { useState } from "react";
import Navlogo from "../assets/images/reslogo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [Toggle, setToggle] = useState(true);
  return (
    <>
      <nav className=" position-sticky top-0 bg-white shadow-sm z-2">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center ">
            <div className="col-4 pt-3">
              <NavLink to="/">
                <img
                  src={Navlogo}
                  alt="logo"
                  style={{ width: "20%" }}
                  className="ms-3 zoom"
                />
              </NavLink>

              <h5 style={{ fontWeight: "700" }}>Tasty Treat</h5>
            </div>
            <div className="col-4">
              <ul
                className="d-lg-flex list-unstyled justify-content-between d-none"
                style={{ fontWeight: "500" }}
              >
                <li>
                  <NavLink to="/" className="text-dark text-decoration-none">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/food"
                    className="text-dark text-decoration-none"
                  >
                    Foods
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/franchise"
                    className="text-dark text-decoration-none"
                  >
                    Franchise Enquiry
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="text-dark text-decoration-none"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <i
                className="fa-solid fa-cart-shopping"
                style={{ fontSize: "1.2rem" }}
              ></i>
              <NavLink to="/login">
                <i
                  className="fa-solid fa-user ms-4 text-dark"
                  style={{ fontSize: "1.2rem" }}
                ></i>
              </NavLink>
              <div onClick={() => setToggle(!Toggle)} className="d-block d-lg-none">
                {Toggle ? (
                  <i className="fa-solid fa-bars fs-5 ps-3"></i>
                ) : (
                  <i class="fa-solid fa-xmark fs-5 ps-3"></i>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
