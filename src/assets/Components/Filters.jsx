export default function Filters({ setSearch, setCategory, setSortOrder, categories }) {
  return (
    <>
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select onChange={(e) => setSortOrder(e.target.value)} name="sort">
        <option value="default">Sort by</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </>
  );
};
