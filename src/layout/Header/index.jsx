import React from "react";
import MainHeader from "../../components/MainHeader";
import Navbar from "../../components/Navbar";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render() {
    return (
      <div className="header d-flex flex-column p-2">
        <MainHeader />
        <Navbar />
      </div>
    );
  }
}

export default Header;
