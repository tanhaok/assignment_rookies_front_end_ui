import React, { useState, useEffect } from "react";
import Product from "../../../../components/Product";
import { CardHorizontal } from "../../../../components/Card";
import { getAllProduct } from "../../../../service/ProductService.js";

const ProductManage = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    getAllProduct()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main-admin product-manage  d-flex flex-column align-items-center">
      <div className="product-manage-header d-flex justify-content-evenly align-items-center w-75 ">
        <div className="fs-1">List of product</div>
        {/* filter */}
        <select name="filter" id="filter">
          <option value="1">Rate</option>
          <option value="2">Name</option>
          <option value="3">Price</option>
          <option value="4">Status</option>
        </select>

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
            className="modal fade "
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

      <div className="product-view w-75 ">
        {data.map((item) => (
          <CardHorizontal key={item.proId} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductManage;
