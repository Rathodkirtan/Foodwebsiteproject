import React, { useEffect, useState } from "react";
import axios from 'axios'

function Cart() {
  const [data, setdata] = useState([])
  useEffect(()=>{
    const getcartitem=async()=>{
      await axios.get('http://localhost:8000/api/getitem').then((res)=>{
        setdata(res.data)
      }).catch((err)=>{
        console.log(err);
      }); 
    }
    getcartitem();
  },[])

  console.log(data)
  return (
    <div className="container">
      <div className="row d-flex flex-wrap">
        <span className="rounded-circle d-flex justify-content-end position-sticky top-50 end-0 z-1 mb-5"></span>
        <div className="col-12">
          <h3 className="text-center rocknroll-one-regular fs-1 mb-5">
            All Food
          </h3>
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-info mb-4">
               Add Categories
            </button>
          </div>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-between ">
            {data.map((productItem) => {
              return (
                <div className="cart" key={productItem.id}>
                  <img
                    src={productItem.image.mobile}
                    alt="img"
                    style={{ width: "240px" }}
                    className="rounded zoom"
                  />
                  <div className="cart-body">
                    <p
                      className="mb-0"
                      style={{
                        fontFamily: "Red Hat Text, sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {productItem.name}
                    </p>
                    <p
                      className="mb-0"
                      style={{
                        fontFamily: "Red Hat Text, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {productItem.category}
                    </p>
                    <p
                      style={{
                        fontFamily: "Red Hat Text, sans-serif",
                        fontWeight: 800,
                      }}
                    >
                      $ {productItem.price}
                    </p>
                    <div className="d-flex mb-3">
                      <button type="button" className="btn btn-outline-danger">
                        Delete
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary ms-3"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
