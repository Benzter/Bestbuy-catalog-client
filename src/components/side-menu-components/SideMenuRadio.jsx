import React from "react";

export default function SideMenuRadio(props) {
  return (
    <>
      <div className="form-check text-start">
        <input
          className="form-check-input"
          type="radio"
          name="Brand"
          id={props.id}
        />
        <label className="form-check-label " for={props.id}>
          {props.brand}
        </label>
      </div>
    </>
  );
}
