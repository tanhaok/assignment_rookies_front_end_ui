import React from "react";
import Header from "./layout/Header/";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Custom style
import "./asset/style/sizing.css"
import "./asset/style/tag.css"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Routes></Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default  App;