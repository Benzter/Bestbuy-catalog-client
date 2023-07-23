import React from "react";

export default function PriceFilter() {
  return (
    <div>
      <div class="input-group mb-1 ">
        <span class="input-group-text" id="basic-addon1">
          Min
        </span>
        <input
          type="text"
          class="form-control"
          value={0}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group mb-1">
        <span class="input-group-text" id="basic-addon1">
          Min
        </span>
        <input
          type="text"
          class="form-control"
          value={999}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <button type="submit" class="btn btn-primary px-5 py-2 mt-2 my-3">
        Search
      </button>
    </div>
  );
}
