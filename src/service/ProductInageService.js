import axios from "axios";

const header = {
  "content-type": "application/json",
};

const baseUrl = "http://localhost:8080/image";

export const deleteImage = (id) => {
  return axios({
    headers: header,
    url: baseUrl + `/${id}`,
    method: "DELETE",
  });
};
