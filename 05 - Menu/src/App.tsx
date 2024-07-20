import { useState } from "react";
import items from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const category = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(category);

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="p-5 w-full mx-auto max-w-[1170px]">
      <h1 className="text-center m-5 p-5 text-3xl">Our Menu</h1>
      <div className="flex items-center justify-center gap-x-5">
        {categories.map((category) => (
          <Categories
            key={category}
            category={category}
            filterItems={filterItems}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-x-5 px-5 lg:grid-cols-3">
        {menuItems.map((menuItem) => (
          <Menu key={menuItem.id} {...menuItem} />
        ))}
      </div>
    </div>
  );
};

export default App;
