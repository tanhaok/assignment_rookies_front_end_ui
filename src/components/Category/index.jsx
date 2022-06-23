import React from "react";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: this.props.action,
      cate_name: this.props.cate_name,
      cate_des: this.props.cate_des,
      cate_id: this.props.id,
    };

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let title = "Create New Category";
    if(this.state.action === "View"){
      title = "Category"
    }
    return (
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {title}
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
                name="name"
                onChange={this.handleTextChange}
                value={this.state.cate_name}
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
                name="des"
                onChange={this.handleTextChange}
                value={this.state.cate_des}
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            {this.state.cate_id && (
              <>
                <button type="button" className="btn btn-primary">
                  Edit
                </button>
                <button type="button" className="btn btn-primary">
                  Delete
                </button>
              </>
            )}
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;