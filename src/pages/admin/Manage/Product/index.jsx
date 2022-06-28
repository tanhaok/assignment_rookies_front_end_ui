import React, { useState, useEffect } from "react";
import Product from "../../../../components/Product";

const ProductManage = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    //TODO:get all data from backend
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="product-manage">
      <div className="product-view">all products will be show here</div>

      {/* * Add new product * */}
      <div className="product-add">
        {/* Button trigger modal */}
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#addProduct"
          className="btn btn-primary me-1"
        >
          ADD NEW PRODUCT
        </button>

        {/* modal */}
        <div
          className="modal fade"
          id="addProduct"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <Product action="add" />
        </div>
      </div>
    </div>
  );
};

export default ProductManage;
