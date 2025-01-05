import React, { useState } from "react";
import styles from "../style/Login.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, serform] = useState({});
  const navigate=useNavigate();
  const changelogin = (e) => {
    // e.preventDefault();
    serform({ ...form, [e.target.name]: e.target.value });
  };

  const sendlogin = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/login", form)
      .then((res) => {
        console.log(res.data)
        // document.cookie=`Token=${res.data.token}`;
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
     
  };
  return (
    <>
      <div className="container-fluid mb-3">
        <div className="row w-100">
          <div
            className={`${styles.img} d-flex align-items-center text-white fs-1 ps-4 col-12 rocknroll-one-regular`}
          >
            login
          </div>

          <div className="m-auto text-center col-12 ">
            <form
              className="form mb-5 mt-5 light-red"
              action="http://localhost:8000/login"
              method="post"
            >
              <div className="form__group ">
                <input
                  type="email"
                  placeholder="Email"
                  className=" m-4"
                  name="email"
                  onChange={changelogin}
                  required
                />
              </div>
              <div className="form__group">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                  onChange={changelogin}
                  className=""
                />
              </div>
              <button
                type="submit"
                onClick={sendlogin}
                className="addTOCart__btn btn btn-danger rouded mt-3 mb-0 text-white px-4"
              >
                Login
              </button>
            </form>
            <NavLink to="/registration">
              Don't have an account? Create an account
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
