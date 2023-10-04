import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useSearchContext } from "@/context/SearchContext";

const SearchBar = () => {
  const {
    searchText,
    searching,
    handleSearch,
    handleChange,
    handleChangesearching,
    handleRemove,
  } = useSearchContext();

  return (
    <section>
      <div className="searchbar_container">
        <div className="styled_searchbar">
          <span className="styled_search">
            <AiOutlineSearch
              size={22}
              onClick={() => {
                if (!searching) {
                  // Only trigger search if not currently searching
                  handleSearch();
                }
              }}
            />
          </span>

          <input
            type="text"
            value={searchText}
            onChange={handleChange}
            disabled={handleChangesearching} // Disable input while searching
          />

          <span className="search_remove">
            {searchText && !searching && (
              // Display close icon only if not currently searching
              <AiOutlineClose size={22} onClick={handleRemove} />
            )}
          </span>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
