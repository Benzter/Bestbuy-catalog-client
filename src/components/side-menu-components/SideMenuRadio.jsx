import React from "react";

export default function SideMenuRadio(props) {
  return (
    <>
      <div className={`form-check text-start ${props.className}`}>
        <input
          className="form-check-input"
          type="radio"
          name={props.name}
          id={props.id}
          value={props.value}
          checked={props.checked && true}
        />
        <label className="form-check-label " htmlFor={props.id}>
          {props.brand}
        </label>
      </div>
    </>
  );
}
