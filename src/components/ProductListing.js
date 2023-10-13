import React, { useState, useEffect } from "react";
import { getproductListing } from "./Service";
import { useDispatch } from "react-redux";
import "./productListing.css";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const [loading, setLoading] = useState(false);
  const [productListing, setProductListing] = useState([]);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await getproductListing();
      setProductListing(response?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDetailsClick = (Product) => {
    dispatch({ type: "SET_PRODUCT", payload: Product });
  };

  {
    /*const addProductDetails = (productId) => {
    const productToAdd = productListing.find(
      (product) => product.id === productId
    );

    if (productToAdd) {
      dispatch({ type: "SET_DETAILS", payload: productToAdd });
      console.log("Product added to cart:", productToAdd);
    } else {
      console.log("Product not found.");
    }
  };

  // const addCart = (productId) => {
  //   const productToAdd = productListing.find(
  //     (product) => product.id === productId
  //   );

  //   if (productToAdd) {
  //  dispatch({ type: "SET_CART", payload: productToAdd });
  //   console.log("Product added to cart:", productToAdd);
  //  } else {
  //  console.log("Product not found.");
  // }
// }; */
  }

  return (
    <>
      <div className="pro">
        {loading ? (
          <p>Loading...</p>
        ) : (
          productListing?.map((product) => (
            <div className="list" key={product?.id}>
              <div className="listing">
                <p>
                  <img src={product?.image} alt="Product" className="pic" />
                </p>
                <p className="heading">{product?.title}</p>

                <p className="set">{product?.price}</p>
                <p className="set">{product?.image}</p>
              </div>

              {/* <button className="cart-btn">💜View Details</button> */}

              <button
                onClick={() => handleDetailsClick(product)}
                className="add"
              >
                <Link to="/productdetails">Details</Link>
              </button>

              {/* 💜Details */}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ProductListing;
