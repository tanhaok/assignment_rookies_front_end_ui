import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Admin, Home } from "./pages";

import Layout from "./layout";
import { Cart, Fiction, FictionType, NonFiction } from "./components";
import { ProductManage, CategoryManage } from "./pages/admin/Manage";


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="admin" element={<Admin />}>
            <Route path="product" element={<ProductManage />} />
            <Route path="category" element={<CategoryManage />} />
          </Route>

          <Route
            path="auth"
            element={<div> this is log in log out page </div>}
          />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/fiction" element={<Fiction />} />
            <Route path="/fiction/:type" element={<FictionType />} />
            <Route path="/nonfiction/:type" element={<NonFiction />} />
            <Route path="/recommend" element={<p>recommend </p>} />
            <Route path="/new_releases" element={<p>new release</p>} />
            <Route path="/best_sellers" element={<p>Best seller</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;