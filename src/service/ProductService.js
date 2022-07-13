import axios from "axios";

const header = {
  "content-type": "application/json",
};

const baseUrl = "http://localhost:8080/product";

export const getAllProduct = () => {
  return axios({
    headers: header,
    url: baseUrl + "/all",
    method: "GET",
  });
};

export const updateProduct = (id, data) => {
  return axios({
    headers: header,
    method: "PUT",
    url: baseUrl + `/${id}`,
    data: data,
  });
};

export const deleteProduct = (id) => {
  return axios({
    headers: header,
    method: "PATCH",
    url: baseUrl + `/${id}`,
  });
};

export const createProduct = (data) => {
  return axios({
    headers: header,
    method: "POST",
    url: baseUrl,
    data: data,
  });
};
