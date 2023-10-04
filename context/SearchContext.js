import { fetchDataFromPexels } from "@/pages/api/pexelsAPI";
import { createContext, useContext, useEffect, useState } from "react";
const SearchContext = createContext();

export const useSearchContext = () => {
  return useContext(SearchContext);
};

const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searching, setSearching] = useState(false); // Track whether a search is in progress
  const [category, setCategory] = useState("");
  const [numImages, setNumImages] = useState(11); //initial data
  const [isLoading, setLoading] = useState(false);

  // save the data to local
  const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  const handleSearch = async () => {
    if (searchText.trim() !== "") {
      try {
        setLoading(true);
        setSearching(true); // Start searching
        let response = await getFromLocalStorage(searchText); // Await the result
        if (!response) {
          response = await fetchDataFromPexels(searchText, numImages);

          if (response) {
            saveToLocalStorage(searchText, response);
          }
        }
        setSearchResult(response || []);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      } finally {
        setLoading(false);
        setSearching(false); // Done searching, reset the flag
      }
    }
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    setCategory(e.target.value);
  };

  const handleRemove = () => {
    setSearchText("");
    setCategory("");
    // setSearchResult([]);
  };

  const handleLoadMore = async () => {
    // Double the number of images to display
    const newNumImages = numImages * 2;
    setNumImages(newNumImages);

    try {
      setSearching(true);
      setLoading(true);
      const response = await fetchDataFromPexels(searchText, newNumImages); // Fetch more images

      if (response) {
        setSearchResult(response || []);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setSearching(false);
    }
  };
  useEffect(() => {
    // Perform the initial search when the component mounts
    if (searchText.trim() !== "") {
      handleSearch();
    }
  }, []);

  useEffect(() => {
    // Check if "Enter" key was pressed
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };

    // Attach the key press event listener
    document.addEventListener("keydown", handleKeyPress);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [searchText]);

  return (
    <SearchContext.Provider
      value={{
        searchText,
        setSearchText,
        searchResult,
        setSearchResult,
        handleChange,
        handleSearch,
        handleRemove,
        searching,
        category,
        setCategory,
        numImages,
        handleLoadMore,
        isLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
