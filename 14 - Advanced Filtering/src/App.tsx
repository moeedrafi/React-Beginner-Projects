import { useState } from "react";
import Nav from "./Navigation/Nav";
import Product from "./Products/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data";
import Card from "./components/Card";
import { Data } from "./types";
import { AiFillStar } from "react-icons/ai";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  // Input Filter
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Radio Filter
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(e.target.value);
  };

  // Buttons Filter
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCategory(e.currentTarget.value);
  };

  const filteredData = (products: Data[], selected: string, query: string) => {
    let filteredProducts = products;

    // Filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, reviews, prevPrice, newPrice }) => {
        const starIcon = <AiFillStar className="rating-icon" />;
        return (
          <Card
            key={Math.random()}
            img={img}
            title={title}
            star={starIcon}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
          />
        );
      }
    );
  };

  const result = filteredData(
    products,
    selectedCategory ? selectedCategory : "",
    query
  );

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Product result={result} />
    </>
  );
};

export default App;
