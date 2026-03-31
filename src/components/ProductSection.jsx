import { useState, useEffect, useMemo } from "react";
import { getProducts } from "../services/ProductService";
import Filters from "./Filters.jsx";
import ProductCard from "./ProductCard.jsx";

function ProductSection() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const data = await getProducts();

        const formatted = data.map((item) => ({
          id: item.id,
          name: item.title,
          image: item.thumbnail,
          description: item.description,
          category: item.category,
          price: "Free",
          date: "2025-01-01",
          readTime: "5 min read",
        }));

        if (isMounted) setProducts(formatted);
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase().trim());

      const matchesCategory =
        selectedCategory.toLowerCase() === "all" ||
        item.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  const resultLabel =
    filteredProducts.length === 1
      ? "1 result"
      : `${filteredProducts.length} results`;

  return (
    <section
      className="product-section"
      id="resources"
      aria-labelledby="resources-heading"
    >
      <div className="ps-header">
        <p className="section-eyebrow">Knowledge hub</p>
        <h2 id="resources-heading" className="section-heading">
          Latest at <strong>eCom</strong>
        </h2>
        <p className="section-sub">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam neque quam corrupti sit exercitationem totam autem, repellat quasi perspiciatis cumque.
        </p>
      </div>

      <Filters
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategory={setSelectedCategory}
      />

      {!loading && (
        <p className="result-count" aria-live="polite">
          {searchTerm || selectedCategory !== "All"
            ? `Showing ${resultLabel}`
            : `All ${products.length} resources`}
        </p>
      )}

      {loading && (
        <div className="loading-text" aria-busy="true">
          Loading resources...
        </div>
      )}

      {!loading && filteredProducts.length > 0 && (
        <ul className="product-grid" role="list">
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}

      {!loading && filteredProducts.length === 0 && (
        <div className="empty-state" role="status">
          <h3 className="empty-title">No resources found</h3>
          <p className="empty-body">
            Try adjusting your search or filters.
          </p>
          <button
            className="btn-primary"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductSection;