import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../../components/Dashboard";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="admin d-flex">
        <Dashboard />
        <Outlet />
      </div>
    );
  }
}

export default Admin;
