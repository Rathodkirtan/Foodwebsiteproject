import React from "react";
import Categories1 from "../assets/images/category01.png";
import Categories2 from "../assets/images/category02.png";
import Categories3 from "../assets/images/category03.png";
import Categories4 from "../assets/images/category04.png";

function Item() {
  return (
    <>
      <div className="container">
        <div className="ro d-flex justify-content-between">
          <div className=" d-flex align-items-center lightred p-3 rounded">
            <img src={Categories1} alt="img" />
            <p className="rocknroll-one-regular ps-3 pe-5">Fastfood</p>
          </div>
          <div className=" d-flex align-items-center lightred p-3 rounded">
            <img src={Categories2} alt="img" />
            <p className="rocknroll-one-regular  ps-3 pe-5">Pizza</p>
          </div>
          <div className=" d-flex align-items-center lightred p-3 rounded">
            <img src={Categories3} alt="img" />
            <p className="rocknroll-one-regular  ps-3 pe-5">Asian Food</p>
          </div>
          <div className=" d-flex align-items-center lightred p-3 rounded">
            <img src={Categories4} alt="img" />
            <p className="rocknroll-one-regular  ps-3 pe-5">Row Meat</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
