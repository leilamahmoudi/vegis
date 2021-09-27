import React from "react";
import ProductCard from "components/products/productCard/ProductCard";
import "./products.scss";
import PageTemplate from "components/pageTemplate/PageTemplate";

const productsItems = [
  {
    id: 1,
    title: "Card title",
    text: "This is a wider card",
    rate: "Rate *****",
    price: "price $250.000",
  },
  {
    id: 2,
    title: "Card title1",
    text: "This is a wider card",
    rate: "Rate *****",
    price: "price $250.000",
  },
  {
    id: 3,
    title: "Card title2",
    text: "This is a wider card",
    rate: "Rate *****",
    price: "price $250.000",
  },
  {
    id: 4,
    title: "Card title3",
    text: "This is a wider card",
    rate: "Rate *****",
    price: "price $250.000",
  },
  {
    id: 5,
    title: "Card title4",
    text: "This is a wider card",
    rate: "Rate *****",
    price: "price $250.000",
  },
];

const Products = () => {
  return (
    <div className="Products">
      <div className="container">
        <PageTemplate>
          <div className="products-bar">
            <div className="card-group">
              {productsItems.map((item) => {
                return <ProductCard item={item} key={item.id} />;
              })}
            </div>
          </div>
        </PageTemplate>
      </div>
    </div>
  );
};
export default Products;
