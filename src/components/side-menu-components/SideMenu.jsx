import React from "react";
import SideMenuTitle from "./SideMenuTitle";
import SideMenuRadio from "./SideMenuRadio";
import PriceFilter from "./PriceFilter";

export default function SideMenu(props) {
  return (
    <div className="col-3 rounded">
      <div className="bg-light p-3">
        <form>
          <div>
            {}
            <SideMenuTitle>Brand</SideMenuTitle>
            <SideMenuRadio id="1" brand="Samsung" />
            <SideMenuRadio id="2" brand="Apple" />
            <SideMenuRadio id="3" brand="Xiomi" />
            <SideMenuRadio id="4" brand="Oneplus  " />
          </div>
          <SideMenuTitle className="pt-5">Price</SideMenuTitle>
          <PriceFilter />
        </form>
      </div>
    </div>
  );
}
