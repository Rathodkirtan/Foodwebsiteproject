import React from "react";
import Navlogo from "../assets/images/reslogo.png";

function Navbar() {
  return (
    <>
      <nav>
        <div className="container ">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-4 pt-3 ">
              <img
                src={Navlogo}
                alt="logo"
                style={{ width: "20%" }}
                className="ms-3"
              />
              <h5 style={{ fontWeight: "700" }}>Tasty Treat</h5>
            </div>
            <div className="col-4">
              <ul
                className="d-lg-flex list-unstyled justify-content-between d-none"
                style={{ fontWeight: "500" }}
              >
                <li>Home</li>
                <li>Foods</li>
                <li>Franchise Enquiry</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <i
                className="fa-solid fa-cart-shopping"
                style={{ fontSize: "1.2rem" }}
              ></i>
              <i
                className="fa-solid fa-user ms-4"
                style={{ fontSize: "1.2rem" }}
              ></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
