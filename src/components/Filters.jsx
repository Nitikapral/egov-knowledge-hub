
const CATEGORIES = ["All", "Beauty", "Fragrances", "Furniture", "Groceries"];

function Filters({ searchTerm, onSearch, selectedCategory, onCategory }) {
  
  return (
    <div className="filters-wrapper" role="search">
      <div className="search-group">
        <label htmlFor="resource-search" className="search-label">
          Search resources
        </label>
        <div className="search-input-wrap">
          <span className="search-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            id="resource-search"
            type="search"
            className="search-input"
            placeholder="Search by name…"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            aria-label="Search resources by name"
            autoComplete="off"
            spellCheck="false"
          />
          {searchTerm && (
            <button
              className="search-clear"
              onClick={() => onSearch("")}
              aria-label="Clear search"
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      
      <div className="category-group" role="group" aria-label="Filter by category">
        <span className="category-label" aria-hidden="true">Filter:</span>
     <ul className="category-pills" role="list">
  {CATEGORIES.map((cat) => (
    <li key={cat}>
      <button
        className={`pill${selectedCategory.toLowerCase() === cat.toLowerCase() ? " pill-active" : ""}`}
        onClick={() => onCategory(cat)}
        aria-pressed={selectedCategory.toLowerCase() === cat.toLowerCase()}
        aria-label={`Filter by ${cat}`}
      >
        {cat}
      </button>
    </li>
  ))}
</ul>
      </div>
    </div>
  );
}

export default Filters;