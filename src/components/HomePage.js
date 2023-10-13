import React from "react";
import NavBar from "./NavBar";
import Categories from "./Categories";
import ProductListing from "./ProductListing";
import Electronics from "./Electronics";

//import Jewelery from "./Jewelery";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Categories />
      <ProductListing />
      <Electronics />

      <Link to="./proDetails">ProDetails</Link>
      <Link to="./cart">Cart</Link>
      <Link to="./electronics">Electronics</Link>
      {/*  <Link to="./jewelery">Jewelery</Link> */}
    </>
  );
};

export default HomePage;
