import React from "react";
import { Link } from "react-router-dom";

const Tool = ({ tool }) => {
  const {
    _id,
    name,
    img,
    desc,
    min_order_quantity,
    available_quantity,
    price,
  } = tool;
  return (
    <div className="mx-auto">
      <div className="card w-96  shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={img} className="rounded-xl" alt="" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{desc}</p>
          <p>Minimum Order Quantity : {min_order_quantity}</p>
          <p>Available Quantity : {available_quantity}</p>
          <p>
            <span className="font-mono">Price : {price}</span>
          </p>
          <div className="card-actions">
            <Link to={`purchase/${_id}`} className="btn btn-primary">
              Purchase
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
