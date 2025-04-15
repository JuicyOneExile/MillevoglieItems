function SearchBox({ search, setSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
