import React, { useState } from "react";
import Tree from "../assets/images/icon-carbon-neutral.svg";
import { useLocation } from "react-router-dom";
import Cartimg from './Cartimg'

function Addproduct() {
  const location = useLocation();
  const [cart, setcart] = useState(location.state || []);

  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setcart(updatedCart);
  };

  const orderTotal = cart.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );
  return (
    <>
    {
      cart.length==0 && <Cartimg/>
    }

    <div>
      <h1 className="red rocknroll-one-regular text-center mt-3">Add To Cart</h1>
    </div>
      {cart.map((item, index) => {
        return (
          <div
            className="container-fluid d-flex justify-content-between align-items-center"
            key={index}
          >
            <div className="AddCart">
              <h6>{item.name}</h6>
              <div className="price d-flex">
                <p>{item.quantity} x</p>
                <p className="ps-2">@{item.price}</p>
                <p className="ps-2">={item.quantity * item.price}</p>
              </div>
            </div>
            <i
              className="fa-solid fa-xmark pb-3 rounded-circle"
              onClick={() => handleDelete(item.id)}
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        );
      })}

      <div className="total d-flex justify-content-between p-2">
        <p>Order Total</p>
        <h3>{orderTotal}</h3>
      </div>

      <div
        className="img-cart text-center p-3 m-2 rounded"
        style={{ backgroundColor: "hsl(14, 52%, 74%)" }}
      >
        <img src={Tree} alt="Carbon Neutral Delivery" />
        <p>
          This is a <b>carbon-neutral</b> delivery
        </p>
      </div>

      <div
        className="btn d-flex justify-content-center"
        style={{ width: "100%" }}
      >
        <button
          style={{
            background: "hsl(14, 64%, 47%)",
            color: "white",
            width: "100%",
          }}
          className="border-0 rounded-pill px-2 p-1"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Confirm Order
        </button>
      </div>
    </>
  );
}

export default Addproduct;
