import React from "react";
import Tree from "../assets/images/icon-carbon-neutral.svg";

function Addproduct() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-between align-items-center" >
        <div className="AddCart" >
          <h6>Pizza</h6>
          <div className="price d-flex">
            <p>4 x</p>
            <p className="ps-2">@200</p>
            <p className="ps-2">= 800</p>
          </div>
        </div>
        <i
          className="fa-solid fa-xmark pb-3 rounded-circle"
          // onClick={() => onDelete(item.id, item)}
          style={{ cursor: "pointer" }}
        ></i>
      </div>
      <div className="total d-flex justify-content-between p-2">
        <p>Order Total</p>
        <h3>800</h3>
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
