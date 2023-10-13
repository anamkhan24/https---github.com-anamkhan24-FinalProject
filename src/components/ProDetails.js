import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProDetails = () => {
  const List = useSelector((state) => state?.data?.details);
  console.log("Data:", List.id);

  return (
    <>
      <Link to="/">Home</Link>
      <div className="details">
        <p>
          <img src={List?.image} alt="List" />
        </p>
        <p>{List?.id}</p>
        <p>{List?.title}</p>
      </div>

      <button>Add To Cart</button>
    </>
  );
};

export default ProDetails;
