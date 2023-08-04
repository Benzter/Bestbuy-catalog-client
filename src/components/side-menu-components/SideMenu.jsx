import React, { useEffect, useState } from "react";
import SideMenuTitle from "./SideMenuTitle";
import SideMenuRadio from "./SideMenuRadio";
import PriceFilter from "./PriceFilter";

export default function SideMenu({ products, productFilter, filterReset }) {
  const brandArray = [];
  const [brand, setBrand] = useState(null);
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);

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
    // const brand = event.target.brand.value;
    // const min = event.target.min.value;
    // const max = event.target.max.value;
    setBrand(event.target.brand.value);
    setMin(event.target.min.value);
    setMax(event.target.max.value);

    productFilter(brand, min, max);
    // console.log("brand value", event.target.brand.value);
    // console.log(event.target.min.value);
    // console.log(event.target.max.value);
  }

  // function resetFilter() {
  //   console.log("filter remove");
  //   setBrand(null);
  //   setMin(null);
  //   setMax(null);
  //   productFilter(brand, min, max);
  // }

  return (
    <div className="col-3 rounded">
      <div className="bg-light p-3">
        <form onSubmit={getFormValues}>
          <div>
            <SideMenuTitle>Brand</SideMenuTitle>
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
          <PriceFilter filterReset={filterReset} />
        </form>
      </div>
    </div>
  );
}
