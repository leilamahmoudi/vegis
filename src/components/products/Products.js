import React, { useEffect } from "react";
import ProductCard from "components/products/productCard/ProductCard";
import "./products.scss";
import PageTemplate from "components/pageTemplate/PageTemplate";

const productsItems = [
  {
    id: 1,
    title: "Apples",
    text: "Granny Smith, Royal Gala, Golden",
    price: "price $250.000",
    imgUrl:
      "https://www.wcrf-uk.org/sites/default/files/Apple_A-Z%20Fruit1.jpg",
    availability: " In Stock",
  },
  {
    id: 2,
    title: "Apricots",
    text: "Apricots can be eaten fresh or dried",
    price: "price $250.000",
    imgUrl:
      "https://www.wcrf-uk.org/sites/default/files/Apricot_A-Z%20Fruit2.jpg",
    availability: " Sold out",
  },
  {
    id: 3,
    title: "Avocados",
    text: "Sometimes called an avocado pear",
    price: "price $250.000",
    imgUrl:
      "https://www.wcrf-uk.org/sites/default/files/Avocado_A-Z%20Fruit3.jpg",
    availability: " In Stock",
  },
  {
    id: 4,
    title: "Bananas",
    text: "A great snack in a handy yellow skin! ",
    price: "price $250.000",
    imgUrl:
      "https://www.wcrf-uk.org/sites/default/files/Banana_A-Z%20Fruit4.jpg",
    availability: " Sold out",
  },
  {
    id: 5,
    title: "Butternut squash",
    text: "It can be roasted, pureed, mashed ",
    price: "price $250.000",
    imgUrl:
      "https://www.wcrf-uk.org/sites/default/files/Butternut%20A-Z%20fruit%20veg.jpg",
    availability: " Sold out",
  },
  {
    id: 6,
    title: "Cherries",
    text: "Cherries grow from stalks in pairs and a tree can produce fruit for as long as 100 years!",
    price: "price $250.000",
    imgUrl:
      "https://www.wcrf-uk.org/sites/default/files/Cherry_A-Z%20Fruit5.jpg",
    availability: " Sold out",
  },
  {
    id: 7,
    title: "Clementines",
    text: "This citrus fruit is the smallest of the tangerinesThe skin of clementines",
    price: "price $250.000",
    imgUrl:
      "https://www.wcrf-uk.org/sites/default/files/Clementine_A-Z%20Fruit6.jpg",
    availability: " In Stock",
  },
  {
    id: 8,
    title: "Dates",
    text: "These fruits come from the date palm tree and grow abundantly in Egypt",
    price: "price $250.000",
    imgUrl: "https://www.wcrf-uk.org/sites/default/files/Date_A-Z%20Fruit7.jpg",
    availability: " Sold out",
  },
  {
    id: 9,
    title: "Figs",
    text: "Figs are soft, sweet fruits, full of small seeds, and they're a great source of fibre",
    price: "price $250.000",
    imgUrl: "https://www.wcrf-uk.org/sites/default/files/Fig_A-Z%20Fruit.jpg",
    availability: " In Stock",
  },
  {
    id: 10,
    title: "Lemons",
    text: "In 1747, Scottish doctor James Lind proved that eating citrus fruit can prevent scurvy",
    price: "price $250.000",
    imgUrl:
      "https://www.wcrf-uk.org/sites/default/files/Lemon_A-Z%20Fruit14.jpg",
    availability: " Sold out",
  },
  {
    id: 11,
    title: "Apples",
    text: "Granny Smith, Royal Gala, Golden",
    price: "price $250.000",
    imgUrl:
      "https://www.wcrf-uk.org/sites/default/files/Apple_A-Z%20Fruit1.jpg",
    availability: " In Stock",
  },
  {
    id: 12,
    title: "Apricots",
    text: "Apricots can be eaten fresh or dried",
    price: "price $250.000",
    imgUrl:
      "https://www.wcrf-uk.org/sites/default/files/Apricot_A-Z%20Fruit2.jpg",
    availability: " In Stock",
  },
  {
    id: 13,
    title: "Avocados",
    text: "Sometimes called an avocado pear",
    price: "price $250.000",
    imgUrl:
      "https://www.wcrf-uk.org/sites/default/files/Avocado_A-Z%20Fruit3.jpg",
    availability: " Sold out",
  },
  {
    id: 14,
    title: "Bananas",
    text: "A great snack in a handy yellow skin! ",
    price: "price $250.000",
    imgUrl:
      "https://www.wcrf-uk.org/sites/default/files/Banana_A-Z%20Fruit4.jpg",
    availability: " In Stock",
  },
  {
    id: 15,
    title: "Butternut squash",
    text: "It can be roasted, pureed, mashed ",
    price: "price $250.000",
    imgUrl:
      "https://www.wcrf-uk.org/sites/default/files/Butternut%20A-Z%20fruit%20veg.jpg",
    availability: " Sold out",
  },
  {
    id: 16,
    title: "Cherries",
    text: "Cherries grow from stalks in pairs and a tree can produce fruit for as long as 100 years!",
    price: "price $250.000",
    imgUrl:
      "https://www.wcrf-uk.org/sites/default/files/Cherry_A-Z%20Fruit5.jpg",
    availability: " Sold out",
  },
  {
    id: 17,
    title: "Clementines",
    text: "This citrus fruit is the smallest of the tangerinesThe skin of clementines ",
    price: "price $250.000",
    imgUrl:
      "https://www.wcrf-uk.org/sites/default/files/Clementine_A-Z%20Fruit6.jpg",
    availability: " In Stock",
  },
  {
    id: 18,
    title: "Dates",
    text: "These fruits come from the date palm tree and grow abundantly in Egypt",
    price: "price $250.000",
    imgUrl: "https://www.wcrf-uk.org/sites/default/files/Date_A-Z%20Fruit7.jpg",
    availability: " Sold out",
  },
  {
    id: 19,
    title: "Figs",
    text: "Figs are soft, sweet fruits, full of small seeds, and they're a great source of fibre",
    price: "price $250.000",
    imgUrl: "https://www.wcrf-uk.org/sites/default/files/Fig_A-Z%20Fruit.jpg",
    availability: " In Stock",
  },
  {
    id: 20,
    title: "Lemons",
    text: "In 1747, Scottish doctor James Lind proved that eating citrus fruit can prevent scurvy",
    price: "price $250.000",
    imgUrl:
      "https://www.wcrf-uk.org/sites/default/files/Lemon_A-Z%20Fruit14.jpg",
    availability: " Sold out",
  },
];

const Products = () => {
  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productsItems));
  }, []);
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
