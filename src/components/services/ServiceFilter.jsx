import React from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";
import "../../styles/Services.css";

const ServiceFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onResetFilters,
  totalResults,
}) => {
  return (
    <div className="services-toolbar">
      {/* Search Bar Input */}
      <div className="search-input-wrapper">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Search by architecture, keyword (e.g. Kubernetes, AI, SOC 2, React)..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
          aria-label="Search services and products"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            style={{
              position: "absolute",
              right: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--text-muted)",
            }}
            aria-label="Clear search query"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Category Pills & Results Counter */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div className="filter-categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onSelectCategory(category)}
              className={`filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <span>Showing <strong>{totalResults}</strong> solutions</span>
          {(searchQuery || selectedCategory !== "All") && (
            <button
              onClick={onResetFilters}
              style={{
                color: "var(--accent-blue)",
                textDecoration: "underline",
                fontSize: "0.82rem",
              }}
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceFilter;
