interface CategoriesProps {
  category: string;
  filterItems: (category: string) => void;
}

const Categories = ({ category, filterItems }: CategoriesProps) => {
  return (
    <button
      onClick={() => filterItems(category)}
      className="bg-orange-400 rounded-md px-2 py-1 text-white hover:bg-orange-600 transition-all duration-300"
    >
      {category}
    </button>
  );
};

export default Categories;
