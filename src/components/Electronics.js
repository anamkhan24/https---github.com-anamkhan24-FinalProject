import React, { useState, useEffect } from "react";
import { getjewelery } from "./Service";

const Electronics = () => {
  const [loading, setLoading] = useState(false);
  const [electronics, setElectronics] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await getjewelery();
      const data = response.data;
      const Array = Object.values(data);
      setElectronics(Array);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(electronics);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="pro">
        {loading ? (
          <p>Loading...</p>
        ) : (
          electronics?.map((product) => (
            <div className="list" key={product?.id}>
              <div className="listing">
                <p>
                  <img src={product?.image} alt="Product" className="pic" />
                </p>
                <p className="heading">{product?.category}</p>
                {/* <p>{product?.description}</p>
                <p>{product?.id}</p>*/}
                <p>{product?.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Electronics;
