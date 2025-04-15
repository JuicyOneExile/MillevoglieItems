import CategorySection from "./CategorySection";

function ItemGrid({ itemsByCategory }) {
  return (
    <div>
      {itemsByCategory.map((category) => (
        <CategorySection
          key={category.category}
          category={category.category}
          items={category.items}
        />
      ))}
    </div>
  );
}

export default ItemGrid;
