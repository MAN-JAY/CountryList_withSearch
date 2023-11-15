import "./Search.css";
const Search = ({ setSearchText }) => {
  return (
    <div className="schmain">
      <input
        type="text"
        id="searchInput"
        placeholder="Search for a country"
        onChange={(e) => setSearchText(e.target.value)}
      />
      {/* <button id="btn">Search</button> */}
    </div>
  );
};
export default Search;
