import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import ContactPage from "./pages/ContactPage";
import ProductPageList from "./pages/ProductPageList";
import ErrorPage from "./pages/ErrorPage";
import UsersPage from "./pages/UsersPage";
import LoginPage from "./pages/LoginPage";
import SeparateProduct from "./components/SeparateProduct";
import Cart from "./pages/Cart";

const Page = () => {
  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route path="/products" exact component={ProductPageList} />
      <Route path="/products/:id" exact component={SeparateProduct} />
      <Route path="/contact" exact component={ContactPage} />
      <Route path="/admin" exact component={AdminPage} />
      <Route path="/users" exact component={UsersPage} />
      <Route path="/login" component={LoginPage} />
      <Route exact component={ErrorPage} />
      <Route path="/cart" component={Cart} />
    </>
  );
};

export default Page;
