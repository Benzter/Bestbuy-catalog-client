import React, { useEffect, useState } from "react";
import SideMenu from "../components/side-menu-components/SideMenu";
import CardHolder from "../components/card-components/CardHolder";
import Card from "../components/card-components/Card";
import SearchBar from "../components/SearchBar";

import axios from "axios";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3000/api/products/`);
        const data = response.data;
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

  return (
    <>
      <SearchBar getSearchProduct={getSearchProduct} />
      <div className="row row-cols-2 mt-4">
        <SideMenu products={products} />
        <CardHolder>
          {products.length > 0 &&
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
