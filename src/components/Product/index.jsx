import React, { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG"];

const AddProduct = () => {
  const [files, setFiles] = useState([]);

  const uploadFile = (file) => {
    const tempFiles = files;
    for (const element of file) {
      tempFiles.push(element);
    }

    setFiles(tempFiles);
  };

  return (
    <div className="add-product">
      <form className="input-group row g-3 needs-validation" noValidate>
        {/* Name of product */}
        <div className="mb-3 name-product col-md-12">
          <label htmlFor="nameProductInput" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameProductInput"
            placeholder="Enter name of product"
            required
          />
          <div className="invalid-feedback">Please provide a product name</div>
        </div>

        {/* TODO: get category and show and chose */}
        <div class="category-product input-group mb-3">
          <label class="input-group-text" for="categoryGroupSelect">
            Category
          </label>
          <select class="form-select" id="categoryGroupSelect">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        {/* description of  product*/}
        <div className="mb-3 description-product col-md-12">
          <label htmlFor="descriptionProductInput" className="form-label">
            Product Description
          </label>
          <textarea
            rows="3"
            id="descriptionProductInput"
            cols="30"
            className="form-control"
            required
          ></textarea>
          <div className="invalid-feedback">
            Please provide a product description
          </div>
        </div>

        {/* Number of product */}
        <div className="number-product col-md-6">
          <label htmlFor="numberProductInput" className="form-label">
            Number of Product
          </label>
          <input
            id="numberProductInput"
            type="number"
            class="form-control"
            placeholder="Number of Product"
            min={0}
            max={1000}
            required
          />
          <div className="invalid-feedback">
            Please provide a number of product{" "}
          </div>
        </div>

        {/* Price of product */}
        <div class="price-product col-md-6">
          <label htmlFor="priceProductInput" className="form-label">
            Price:
          </label>
          <div className="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">
              $
            </span>
            <input
              id="priceProductInput"
              type="number"
              class="form-control"
              placeholder="Price"
              min={0}
              max={1000}
              required
            />
            <div className="invalid-feedback">
              Please provide a price of product{" "}
            </div>
          </div>
        </div>

        {/* upload image */}
        <div className="images-product col-md-12">
          <FileUploader
            handleChange={uploadFile}
            name="file"
            types={fileTypes}
            multiple={true}
          />
          {/* TODO: Make it work */}
          {files && (
            <div>
              {files.map((file) => (
                <p>{file.name}</p>
              ))}
            </div>
          )}
        </div>

        {/* Button create new product */}
        <div className="col-12 btn-save ">
          <button className="btn-primary btn">Create New Product</button>
        </div>
      </form>
    </div>
  );
};

const ViewAndModifyProduct = () => {
  return <div></div>;
};

const Product = (props) => {
  return (
    <div className="product modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">
            {props.action === "add" ? "Add New Product" : "View Product"}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          {/* include field input for product */}
          {props.action === "add" ? <AddProduct /> : <ViewAndModifyProduct />}
        </div>

        {/* <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          {props.action === "add" ? (
            <button type="button" class="btn btn-primary">
              Save
            </button>
          ) : (
            <>
              {/* button to delete product */}
        {/* <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Delete
              </button>

              {/* button to edit product */}
        {/* <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Edit
              </button>

              {/* button to update */}
        {/* <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Save Change
              </button>
            </>
          )}
        </div>  */}
      </div>
    </div>
  );
};

export default Product;
