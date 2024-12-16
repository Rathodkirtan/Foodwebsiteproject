import React from "react";
import Tasty from "../assets/images/location.png";

function TastyTreat() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={Tasty} alt="img" className="w-100 zoom" />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="rocknroll-one-regular">
            Why <span className="red">Tasty Treat?</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            minus. Tempora reprehenderit a corporis velit, laboriosam vitae
            ullam, repellat illo sequi odio esse iste fugiat dolor, optio
            incidunt eligendi deleniti!
          </p>
          <div className="mt-5">
            <h5 style={{ fontWeight: "700" }} ><i className="fa-solid fa-check pe-2" style={{color:" #ff0000"}}></i>Fresh and tasty foods</h5>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
              voluptatibus.
            </p>
          </div>
          <div className="mt-5">
            <h5 style={{ fontWeight: "700" }} className="mb-3"><i className="fa-solid fa-check pe-2" style={{color:" #ff0000"}}></i>Quality support</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              earum.
            </p>
          </div>
          <div className="mt-5">
            <h5 style={{ fontWeight: "700" }}><i className="fa-solid fa-check pe-2" style={{color:" #ff0000"}}></i>Order from any location</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              earum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TastyTreat;
