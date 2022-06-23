import React from "react";
import { Category } from "../../../../components";
class CategoryManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data :[
        {
          id:1,
          name: "fiction",
          des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, unde hic, delectus obcaecati accusantium exercitationem similique tempore amet, sint rerum ipsum sequi cupiditate quos nam laborum omnis alias repellendus dolore!",
          lastUpdate: new Date(),
        },
        {
          id:2,
          name: "fiction",
          des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, unde hic, delectus obcaecati accusantium exercitationem similique tempore amet, sint rerum ipsum sequi cupiditate quos nam laborum omnis alias repellendus dolore!",
          lastUpdate: new Date(),
        },
        {
          id:3,
          name: "fiction",
          des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, unde hic, delectus obcaecati accusantium exercitationem similique tempore amet, sint rerum ipsum sequi cupiditate quos nam laborum omnis alias repellendus dolore!",
          lastUpdate: new Date(),
        },
        {
          id:4,
          name: "fiction",
          des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, unde hic, delectus obcaecati accusantium exercitationem similique tempore amet, sint rerum ipsum sequi cupiditate quos nam laborum omnis alias repellendus dolore!",
          lastUpdate: new Date(),
        },
        {
          id:5,
          name: "fiction",
          des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, unde hic, delectus obcaecati accusantium exercitationem similique tempore amet, sint rerum ipsum sequi cupiditate quos nam laborum omnis alias repellendus dolore!",
          lastUpdate: new Date(),
        },{
          id:6,
          name: "fiction",
          des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, unde hic, delectus obcaecati accusantium exercitationem similique tempore amet, sint rerum ipsum sequi cupiditate quos nam laborum omnis alias repellendus dolore!",
          lastUpdate: new Date(),
        },
      ],
      category: {
        id:"",
        name:"",
        des:"",
      }

    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, e){
    const data = this.state.data;
    this.setState({category : data[index-1]})
  }

  render() {
    return (
      <div className="main-admin category-manage d-flex flex-column align-items-center justify-content-center">
        <div className="show-category mb-3">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Last Update</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {this.state.data.map((item) => (
                <>
                  <tr
                    key={item.id}
                    onClick={(e) => this.handleClick(item.id, e)}
                    className=""
                    data-bs-toggle="modal"
                    data-bs-target="#test"
                  >
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.des}</td>
                    <td>{item.lastUpdate.getTime.toString()}</td>
                  </tr>
                  {/* Modal to add category */}
                  <div
                    className="modal fade"
                    id="test"
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
                      cate_des={item.des}
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
