import { useSearch } from "../../contexts";
import { useEffect, useState } from "react";

const SearchForm = () => {
  const {
    setInputValue,
    inputValue,
    setSearchString,
    setShowData,
    searchString,
  } = useSearch();

  const [selectedFilterOption, setSelectedFilterOption] = useState("all");
  const [data, setData] = useState([]);

  useEffect(() => {
    const SearchAPI = async () => {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchString}`
      );
      const rawData = await response.json();
      const updatedData = rawData.map((s) => s.show);
      setData(updatedData);
    };

    SearchAPI();
  }, [searchString]);

  useEffect(() => {
    const filteredData = filterData(data, selectedFilterOption);
    setShowData(filteredData);
  }, [selectedFilterOption, data, setShowData]);

  const handleInput = (e) => {
    const newInput = e.target.value;
    setInputValue(newInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchString(inputValue);
    setInputValue("");
  };

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedFilterOption(selectedOption);
  };

  const filterData = (data, selectedFilterOption) => {
    switch (selectedFilterOption) {
      case "all":
        return data;
      case "rating":
        return data.slice().sort((a, b) => b.rating.average - a.rating.average);
      case "date":
        return data.slice().sort((a, b) => new Date(b.premiered) - new Date(a.premiered));
      case "language":
        return data.slice().sort((a, b) => a.language.localeCompare(b.language));
      default:
        return data;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} required />
        <input type="submit" value="search" />
      </form>
      <select className="filter-Movies" onChange={handleSortChange}>
        <option value="all">All</option>
        <option value="rating">Rating</option>
        <option value="date">Date</option>
        <option value="language">Language</option>
      </select>
    </>
  );
};

export default SearchForm;
