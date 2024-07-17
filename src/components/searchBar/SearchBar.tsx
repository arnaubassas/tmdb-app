import "./searchBar.scss";

interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const SearchBar: React.FC<SearchBarProps> = ({
  search,
  setSearch,
  setSearchActive,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (search !== "") {
      setSearchActive(true);
    }
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
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
