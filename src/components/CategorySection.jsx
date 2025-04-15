function CategorySection({ category, items }) {
    return (
      <section className="category-section">
        <h2>{category}</h2>
        <div className="item-grid">
          {items.map((item) => (
            <div
              key={item.code}
              className="item-card"
            >
              <h3>{item.name}</h3>
              <p>{item.code}</p>
              <p className="price">
                {item.price ? `$${item.price.toFixed(2)}` : <span className="no-price">N/A</span>}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default CategorySection;
  