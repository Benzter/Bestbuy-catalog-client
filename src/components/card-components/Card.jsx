import React from "react";

export default function (props) {
  return (
    <div class="col h-100">
      <div class="card border-0 shadow-sm">
        <img src={props.imageUrl} class="card-img-top" alt="product image" />
        <div class="card-body text-start">
          <h5 class="card-title">{props.title}</h5>
          <h6>{props.price}</h6>
          <p class="card-text mb-0">Brand : {props.brand}</p>
        </div>
      </div>
    </div>
  );
}
