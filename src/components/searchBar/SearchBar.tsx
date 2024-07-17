import { useState } from "react";
import "./searchBar.scss";

interface SearchBarProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const SearchBar: React.FC<SearchBarProps> = ({
  setSearch,
  setSearchActive,
}) => {
  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (input !== "") {
      setSearch(input);
      setSearchActive(true);
    }
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search"
        className="searchBar__input"
      />
      <button type="submit" className="searchBar__button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
