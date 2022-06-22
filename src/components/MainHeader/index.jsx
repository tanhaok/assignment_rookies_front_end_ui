import React from "react";
import { Link } from "react-router-dom";

import { BranchIcon, SearchIcon, ShoppingCartIcon } from "../../utils/Icon";

class MainHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search_content: null,
    };

    this.textChangeHandle = this.textChangeHandle.bind(this);
  }

  textChangeHandle(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  submitSearchForm() {
    // alert("hello world");
    //TODO: handle here,
    /**
     * * step 1: get state
     * * step 2: send api and get data
     * * step 3: redirect to view product page.
     */
  }

  render() {
    return (
      <div className="main_header d-flex justify-content-between align-items-end w-100">
        <Link to={"/"}>
          <div className="header_branch d-flex align-items-end">
            <img className="branch_icon" src={BranchIcon} alt="icon" />
            <span className="fw-bold">OOK SHOP</span>
          </div>
        </Link>

        <div className="header_search input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search by author, name, ... "
            name="search_content"
            onClick={this.textChangeHandle}
          />
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={this.submitSearchForm}
          >
            <img className="search_icon" src={SearchIcon} alt="" />
          </button>
        </div>

        <div className="header_auth d-flex align-items-center">
          {/* TODO: has log in yet? */}
          <Link to={"auth"}>
            <span className="btn btn-outline-primary">Log In/Register</span>
          </Link>
          <Link to={"cart"} className="shopping-cart me-2 ms-2">
            <img
              className="shop_icon"
              src={ShoppingCartIcon}
              alt="shopping cart"
            />
            {/* TODO: view number of item in cart when cart have item */}
          </Link>
        </div>
      </div>
    );
  }
}

export default MainHeader;
