import React from "react";
import styles from "../style/Login.module.css";
import { NavLink } from "react-router-dom";

function Registration() {
  return (
    <div className="container-fluid mb-3">
      <div className="row w-100">
        <div
          className={`${styles.img} d-flex align-items-center text-white fs-1 ps-4 col-12 rocknroll-one-regular`}
        >
          sign up
        </div>

        <div className="m-auto text-center col-12 ">
          <form className="form mb-5 mt-5 light-red">
            <div className="form__group ">
              <input
                type="text"
                placeholder="Full Name"
                className=" m-"
                required
              />
            </div>
            <div className="form__group ">
              <input
                type="email"
                placeholder="Email"
                className=" m-4"
                required
              />
            </div>
            <div className="form__group">
              <input
                type="password"
                placeholder="Password"
                required
                className=""
              />
            </div>
            <button
              type="submit"
              className="addTOCart__btn btn btn-danger rouded mt-3 mb-0 text-white px-4"
            >
              Sign up
            </button>
          </form>
          <NavLink to="/login">Already have an account? Login</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Registration;
