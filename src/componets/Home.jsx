import React from "react";
import guyImg from "../assets/images/hero.png";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <section>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-6">
            <div className="hero__content">
              <h5 className="mb-3 rocknroll-one-regular">
                Easy way to
                <span className="red fs-4 ps-1">
                  <ReactTyped
                    strings={[
                      " make an order",
                      " Satisfy Your Cravings!",
                      " Get Food Delivered Fast!",
                      " Dine Without the Hassle!",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />
                </span>
              </h5>
              <h1 className="mb-4 hero__title rocknroll-one-regular">
                <span className="red">HUNGRY? </span> Just wait food at{" "}
                <span className="red"> your door</span>
              </h1>
              <p>
                Satisfy your cravings with just a few clicks! Explore a variety
                of cuisines, enjoy exclusive deals, and get your favorite dishes
                delivered hot and fresh to your doorstep. Your next meal is just
                a tap away!
              </p>
              <button
                type="button"
                class="btn btn-danger rocknroll-one-regular"
              >
                Order now{" "}
              </button>
              <button
                type="button"
                class="btn btn-white border border-danger ms-5 rocknroll-one-regular"
              >
                See all foods
              </button>
            </div>
          </div>

          <div className="col-6">
            <div className="hero__img">
              <img src={guyImg} alt="delivery-guy" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
