import React, { useEffect, useState } from "react";
import SideMenu from "../components/side-menu-components/SideMenu";
import CardHolder from "../components/card-components/CardHolder";
import Card from "../components/card-components/Card";
import SearchBar from "../components/SearchBar";

import axios from "axios";
import { getProducts } from "../util/http-get";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filterOn, setFilterOn] = useState(false);
  const [filterBrand, setFilterBrand] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  async function getSearchProduct(keyword) {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/products/${keyword}`
      );
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.log(err);
    }
  }

  const productFilter = (brand, min, max) => {
    setFilterOn(true);
    if (brand) setFilterBrand(brand);
    if (min) setMin(min);
    if (max) setMax(max);
  };

  let filteredProducts;

  const filterReset = () => {
    console.log("filter off");
    setFilterOn(false);
  };

  filteredProducts = filterBrand
    ? products.filter((product) => product.brand === filterBrand)
    : products;

  filteredProducts = min
    ? filteredProducts.filter((product) => product.price > min)
    : filteredProducts;

  filteredProducts = max
    ? filteredProducts.filter((product) => product.price < max)
    : filteredProducts;

  return (
    <>
      <SearchBar getSearchProduct={getSearchProduct} />
      <div className="row row-cols-2 mt-4">
        <SideMenu
          products={products}
          productFilter={productFilter}
          filterReset={filterReset}
        />
        <CardHolder>
          {filterOn &&
            filteredProducts.length > 0 &&
            filteredProducts.map((product) => (
              <Card
                title={product.title}
                brand={product.brand}
                imageUrl={product.imgUrl}
                price={product.price}
                category={product.category}
                key={product.id}
              />
            ))}
          {!filterOn &&
            products.length > 0 &&
            products.map((product) => (
              <Card
                title={product.title}
                brand={product.brand}
                imageUrl={product.imgUrl}
                price={product.price}
                category={product.category}
                key={product.id}
              />
            ))}
        </CardHolder>
      </div>
    </>
  );
}
