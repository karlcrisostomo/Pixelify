import { useSearchContext } from "@/context/SearchContext";

const Category = () => {
  const categories = [
    { id: 1, query: "Animals" },
    { id: 2, query: "Animation" },
    { id: 3, query: "Abstract" },
    { id: 4, query: "Landscapes" },
    { id: 5, query: "Skyscrapers" },
  ];

  const { setSearchText } = useSearchContext().values;

  const handleCategoryClick = (selectedCategoryText) => {
    setSearchText(selectedCategoryText); // Set the category

    // Use an arrow function to wrap the function call to handleCategoryClick
    // This ensures that it's only executed when the click event occurs
  };

  return (
    <div>
      <ul className="flex flex-wrap container mx-auto justify-center text-white  -mt-12 mb-32  max-md:mb-24 max-md:text-sm">
        {categories.map((categoryItem) => (
          <li
            className=" ml-2 px-2 max-md:mb-2 cursor-pointer dark:bg-gray-900 mb-12 hover:shadow-md  py-2 rounded-lg hover:font-bold transition-all hover:scale-105"
            key={categoryItem.id}
            onClick={() => handleCategoryClick(categoryItem.query)}
          >
            {categoryItem.query}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
