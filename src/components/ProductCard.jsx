const CATEGORY_COLORS = {
  "Case Study":     ["#d1fae5", "#065f46"],
  "Newsletter":     ["#dbeafe", "#1e40af"],
  "Report":         ["#fef9c3", "#713f12"],
  "Whitepaper":     ["#ede9fe", "#4c1d95"],
  "Strategy Paper": ["#fce7f3", "#831843"],
};


function ProductCard({ product }) {
  const [bg, text] = CATEGORY_COLORS[product.category] ?? ["#f3f4f6", "#374151"];

  return (
    <article
      className="product-card"
      tabIndex={0}
      aria-labelledby={`card-title-${product.id}`}
      role="listitem"
    >
      <div className="card-img-wrap">
        <img
          src={product.image}
          alt={`Thumbnail for ${product.name}`}
          className="card-img"
          width={400}
          height={220}
          loading="lazy"
        />
        <span
          className="card-badge"
          style={{ background: bg, color: text }}
          aria-label={`Category: ${product.category}`}
        >
          {product.category}
        </span>
      </div>

      <div className="card-body">
        <div className="card-meta">
          <time dateTime={product.date} className="card-date">
            {product.date}
          </time>
          <span className="card-dot" aria-hidden="true">·</span>
          <span className="card-read">{product.readTime}</span>
        </div>

        <h3 id={`card-title-${product.id}`} className="card-title">
          {product.name}
        </h3>

        <p className="card-desc">{product.description}</p>

        <div className="card-footer">
          <span className="card-price">₹{product.price}</span>
          <a
            href="#"
            className="card-link"
            aria-label={`Read more about ${product.name}`}
          >
            Read more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;



































// import { useEffect, useState } from "react";

// const CATEGORIES = ["All", "Beauty", "Fragrances", "Furniture", "Groceries"];

// function Filters() {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // ✅ API CALL
//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((res) => {
//         setData(res.products); // 🔥 important
//       });
//   }, []);

//   // ✅ FILTER LOGIC
//   const filteredData = data.filter((item) => {
//     const matchCategory =
//       selectedCategory === "All" ||
//       item.category.toLowerCase() === selectedCategory.toLowerCase();

//     const matchSearch = item.title
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());

//     return matchCategory && matchSearch;
//   });

//   return (
//     <div className="filters-wrapper">

//       {/* 🔍 SEARCH */}
//       <div className="search-group">
//         <label>Search resources</label>

//         <input
//           type="search"
//           placeholder="Search by name…"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         {searchTerm && (
//           <button onClick={() => setSearchTerm("")}>✕</button>
//         )}
//       </div>

//       {/* 🔥 CATEGORY FILTER */}
//       <div className="category-group">
//         <span>Filter:</span>

//         <ul className="category-pills">
//           {CATEGORIES.map((cat) => (
//             <li key={cat}>
//               <button
//                 className={selectedCategory === cat ? "active" : ""}
//                 onClick={() => setSelectedCategory(cat)}
//               >
//                 {cat}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="products">
//         {filteredData.map((item) => (
//           <div key={item.id} className="card">
//             <img src={item.thumbnail} alt={item.title} width="120" />
//             <h3>{item.title}</h3>
//             <p>{item.category}</p>
//             <p>₹ {item.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Filters;