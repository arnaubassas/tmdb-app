import { useState } from "react";
import "./searchBar.scss";

interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  const [inicialSearch, setInicialSearch] = useState(search);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInicialSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inicialSearch !== "") {
      setSearch(inicialSearch);
    }
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inicialSearch}
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
