import React from "react";

export default function (props) {
  return (
    <div className="col h-100">
      <div className="card border-0 shadow-sm">
        <img
          src={props.imageUrl}
          className="card-img-top"
          alt="product image"
        />
        <div className="card-body text-start">
          <h5 className="card-title">{props.title}</h5>
          <h6>{props.price}$</h6>
          <p className="card-text mb-0">Brand : {props.brand}</p>
        </div>
      </div>
    </div>
  );
}
