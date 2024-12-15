import React from "react";
import Service01 from "../assets/images/service01.png";
import Service02 from "../assets/images/service02.png";
import Service03 from "../assets/images/service03.png";

function Serve() {
  return (
    <>
      <div className="container text-center " style={{marginTop:"50px"}}>
        <h4 className="red rocknroll-one-regular mt-5">What we serve</h4>
        <h1 className="mb-4 hero__title rocknroll-one-regular">
          <span className="blue">Just sit back at home we will</span>{" "}
          <span className="red">take care</span>
        </h1>
        <p>
          Satisfy your cravings with just a few clicks! Explore a variety of
          cuisines, enjoy exclusive deals, and get your favorite dishes
          delivered hot and fresh to your doorstep. Your next meal is just a tap
          away!
        </p>
        <div className="row d-flex justify-content-between" style={{margin:"0px,100px"}}>
          <div className="col-4">
            <img src={Service01} alt="img" />
            <h4>Quick Delivery</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
              doloremque.
            </p>
          </div>
          <div className="col-4">
            <img src={Service02} alt="img" />
            <h4>Quick Delivery</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
              doloremque.
            </p>
          </div>
          <div className="col-4">
            <img src={Service03} alt="img" />
            <h4>Quick Delivery</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
              doloremque.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Serve;
