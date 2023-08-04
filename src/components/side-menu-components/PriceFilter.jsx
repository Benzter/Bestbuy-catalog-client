import React, { useState } from "react";

export default function PriceFilter() {
  // const [minValue, setMinValue] = useState(0);
  // const [maxValue, setMaxValue] = useState(999);

  return (
    <div>
      <div className="input-group mb-1 ">
        <span className="input-group-text" id="basic-addon1">
          Min
        </span>
        <input
          type="number"
          name="min"
          className="form-control"
          // value={minValue}
          aria-label="Username"
          aria-describedby="basic-addon1"
          // onChange={(e) => {
          //   setMinValue(e.target.value);
          // }}
        />
      </div>
      <div className="input-group mb-1">
        <span className="input-group-text" id="basic-addon1">
          Min
        </span>
        <input
          type="number"
          name="max"
          className="form-control"
          // value={maxValue}
          // onChange={(e) => {
          //   setMaxValue(e.target.value);
          // }}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <button type="submit" className="btn btn-primary px-5 py-2 mt-2 my-3">
        Filter
      </button>
    </div>
  );
}
