import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useSearchContext } from "@/context/SearchContext";

const SearchBar = () => {
  const { values } = useSearchContext();

  return (
    <section>
      <div className="searchbar_container">
        <div className="styled_searchbar">
          <span className="styled_search">
            <AiOutlineSearch
              size={22}
              onClick={() => {
                if (!values.searching) {
                  // Only trigger search if not currently searching
                  values.handleSearch();
                }
              }}
            />
          </span>

          <input
            type="text"
            value={values.searchText}
            onChange={values.handleChange}
            disabled={values.handleChangesearching} // Disable input while searching
          />

          <span className="search_remove">
            {values.searchText && !values.searching && (
              // Display close icon only if not currently searching
              <AiOutlineClose size={22} onClick={values.handleRemove} />
            )}
          </span>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
