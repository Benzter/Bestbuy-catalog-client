import React, { useEffect, useState } from "react";
import SideMenuTitle from "./SideMenuTitle";
import SideMenuRadio from "./SideMenuRadio";
import PriceFilter from "./PriceFilter";

export default function SideMenu({ products, productFilter }) {
  const brandArray = [];
  // let uniqueBrandSet;
  const [uniqueBrandSet, setUniqueBrandSet] = useState(new Set());
  useEffect(() => {
    function filterBrand() {
      products.forEach((prod) => {
        brandArray.push(prod.brand);
      });
    }
    filterBrand();
    setUniqueBrandSet(new Set(brandArray));
    console.log(uniqueBrandSet);
  }, [products]);

  function getFormValues(event) {
    event.preventDefault();
    const brand = event.target.brand.value;
    const min = event.target.min.value;
    const max = event.target.max.value;

    productFilter(brand, min, max);
    // console.log("brand value", event.target.brand.value);
    // console.log(event.target.min.value);
    // console.log(event.target.max.value);
  }

  return (
    <div className="col-3 rounded">
      <div className="bg-light p-3">
        <form onSubmit={getFormValues}>
          <div>
            <SideMenuTitle>Brand</SideMenuTitle>
            {/* <SideMenuRadio
              id="all"
              brand="all"
              name="brand"
              value="All"
              className="d-none"
              checked
            /> */}
            {Array.from(uniqueBrandSet).map((brand, index) => (
              <SideMenuRadio
                id={index}
                brand={brand}
                name="brand"
                key={index}
                value={brand}
              />
            ))}
          </div>
          <SideMenuTitle className="pt-5">Price</SideMenuTitle>
          <PriceFilter />
        </form>
      </div>
    </div>
  );
}
