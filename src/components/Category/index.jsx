import React from "react";
import axios from "axios";
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: this.props.action,
      cate_name: this.props.cate_name,
      cate_des: this.props.cate_des,
      cate_id: this.props.id,
      hasEdit: false,
      error: null,
      success: null,
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleChangeStatusButton = this.handleChangeStatusButton.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
  }

  componentDidMount() {
    let action = this.state.action;
    if (action === "View") {
      this.setState({ hasEdit: true });
    }
  }

  handleEditButton() {
    this.setState({ hasEdit: false });
  }

  async handleChangeStatusButton() {
    let id = this.state.cate_id;
    console.log(id);
    await axios({
      headers: { "content-type": "application/json" },
      method: "PATCH",
      url: `http://localhost:8080/category/${id}`,
    })
      .then((res) => {
        this.setState({ success: "Status was change to: " + res.data.status });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: err.message });
      });
  }

  async handleSaveButton() {
    let hasEdit = this.state.hasEdit;
    let action = this.state.action;

    let id = this.state.cate_id;
    let name = this.state.cate_name;
    let des = this.state.cate_des;

    if (name && des) {
      if (action === "View") {
        await axios({
          headers: { "content-type": "application/json" },
          method: "PUT",
          url: `http://localhost:8080/category/${id}`,
          data: {
            cateName: name,
            cateDescription: des,
          },
        })
          .then((res) => {
            this.setState({ success: "Category was changed successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
        this.setState({ hasEdit: true });
      } else {
        await axios({
          headers: { "content-type": "application/json" },
          method: "POST",
          url: `http://localhost:8080/category/`,
          data: {
            cateName: name,
            cateDescription: des,
          },
        })
          .then((res) => {
            this.setState({ success: "Category was created successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      this.setState({ error: "All field are required" });
    }
  }

  handleTextChange(e) {
    this.setState({ [e.target.name]: e.target.value, error: null });
  }

  render() {
    let title = "Create New Category";
    if (this.state.action === "View") {
      title = "Category";
    }
    return (
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {title}
              {this.state.error && (
                <p className="text-danger fs-6 text-opacity-50">
                  {this.state.error}
                </p>
              )}

              {this.state.success && (
                <p className="text-success fs-6 text-opacity-50">
                  {this.state.success}
                </p>
              )}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label for="name_category" className="form-label">
                Category Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name_category"
                placeholder="name..."
                name="cate_name"
                onChange={this.handleTextChange}
                value={this.state.cate_name}
                disabled={this.state.hasEdit}
              />
            </div>
            <div className="mb-3">
              <label for="description_category" className="form-label">
                Category Description
              </label>
              <textarea
                className="form-control"
                id="description_category"
                rows="5"
                name="cate_des"
                onChange={this.handleTextChange}
                value={this.state.cate_des}
                disabled={this.state.hasEdit}
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => window.location.reload()}
            >
              Close
            </button>
            {this.state.cate_id && (
              <>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleEditButton}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleChangeStatusButton}
                >
                  Change Status
                </button>
              </>
            )}
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleSaveButton}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
