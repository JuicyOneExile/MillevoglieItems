import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import ItemGrid from "./components/ItemGrid";
import "./index.css";

function App() {
  const [itemsByCategory, setItemsByCategory] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch the items grouped by category from the backend
  useEffect(() => {
    fetch("https://your-api-endpoint.com/items")
      .then((response) => response.json())
      .then((data) => setItemsByCategory(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  // Filter items by search input (case insensitive)
  const filteredItems = itemsByCategory.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  }));

  return (
    <div className="container mx-auto p-4">
      <SearchBox search={search} setSearch={setSearch} />
      <ItemGrid itemsByCategory={filteredItems} />
    </div>
  );
}

export default App;
