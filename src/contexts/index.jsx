import { useState, useContext, createContext } from "react";

const SearchContext = createContext();
// eslint-disable-next-line react/prop-types
export const SearchProvider = ({ children }) => {
  const [showData, setShowData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchString, setSearchString] = useState("");
  return (
    <SearchContext.Provider
      value={{
        showData,
        setShowData,
        inputValue,
        setInputValue,
        searchString,
        setSearchString,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSearch = () => useContext(SearchContext);