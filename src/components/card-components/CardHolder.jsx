import React from "react";

export default function CardHolder(props) {
  return (
    <div className="col-9">
      <div className="row row-cols-1 row-cols-md-3 g-4 ps-3">
        {props.children}
      </div>
    </div>
  );
}
