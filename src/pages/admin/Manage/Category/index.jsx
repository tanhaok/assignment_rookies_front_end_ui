import React from "react";
import { Category } from "../../../../components";
import axios from "axios";
import moment from "moment";
class CategoryManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    await axios({
      headers: {
        "content-type": "application/json",
      },
      method: "GET",
      url: "http://localhost:8080/category",
    })
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((error) => {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  }
  render() {
    return (
      <div className="main-admin category-manage d-flex flex-column align-items-center justify-content-center">
        <div className="show-category mb-3">
          <table className="table table-responsive">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Create Date</th>
                <th scope="col">Last Update</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {this.state.data.map((item) => (
                <>
                  <tr
                    key={item.id}
                    className=""
                    data-bs-toggle="modal"
                    data-bs-target={"#viewCate" + item.id}
                  >
                    <th scope="row">{item.status}</th>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{moment(item.createDate).format("LLL")}</td>
                    <td>{moment(item.updateDate).format("LLL")}</td>
                  </tr>
                  {/* Modal to add category */}
                  <div
                    className="modal fade"
                    id={"viewCate" + item.id}
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <Category
                      action="View"
                      id={item.id}
                      cate_name={item.name}
                      cate_des={item.description}
                    />
                  </div>
                </>
              ))}
            </tbody>
          </table>
        </div>

        <div className="manage">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#addCate"
            className="btn btn-primary me-1"
          >
            Add New Category
          </button>

          {/* Modal to add category */}
          <div
            className="modal fade"
            id="addCate"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <Category action="Add" />
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryManage;

// TODO: Add field number of book have same category
