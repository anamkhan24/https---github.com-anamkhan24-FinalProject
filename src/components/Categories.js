import React, { useState, useEffect } from "react";
import "./Categories.css";
import { getproducts } from "./Service";

const Categories = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await getproducts();
      setProducts(response?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <section>
        <div className="logo">
          <img src="yellowlogo.png" alt="logo" />
        </div>

        <div className="cate">
          {products?.map((product) => (
            <div className="main" key={product?.id}>
              <div className="categories">
                <p>{product}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Categories;
