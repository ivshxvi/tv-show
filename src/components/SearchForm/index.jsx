import { useSearch } from "../../Context";
import { useEffect } from "react";

const SearchForm = () => {
  const {
    setInputValue,
    inputValue,
    setSearchString,
    setShowData,
    searchString,
  } = useSearch();

  useEffect(() => {
    const SearchAPI = async () => {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchString}`
      );
      const rawData = await response.json();
      const data = rawData.map((s) => s.show);
      setShowData(data);
    };
    SearchAPI();
  }, [searchString, setShowData]);

  const handleInput = (e) => {
    const newInput = e.target.value;
    setInputValue(newInput);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchString(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput} required />
      <input type="submit" value="search" />
    </form>
  );
}

export default SearchForm;