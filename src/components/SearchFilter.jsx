import React from 'react'
import '../styles/SearchFilter.css'

const SearchFilter = ({ searchTerm, onSearchChange, filters, onFilterChange }) => {
  const categories = ["Italiana", "Japonesa", "Americana", "Mexicana", "China", "Vegetariana"];
  const priceRanges = ["$", "$$", "$$$", "$$$$"];

  return (
    <div className="search-filter">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar restaurantes..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="filters">
        <select
          value={filters.category}
          onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
        >
          <option value="">Todas las categorías</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={filters.priceRange}
          onChange={(e) => onFilterChange({ ...filters, priceRange: e.target.value })}
        >
          <option value="">Todos los precios</option>
          {priceRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>

        <select
          value={filters.rating}
          onChange={(e) => onFilterChange({ ...filters, rating: e.target.value })}
        >
          <option value="">Cualquier rating</option>
          <option value="4">⭐ 4+</option>
          <option value="4.5">⭐ 4.5+</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={filters.onlyFavorites}
            onChange={(e) => onFilterChange({ ...filters, onlyFavorites: e.target.checked })}
          />
          Solo favoritos
        </label>
      </div>
    </div>
  )
}

export default SearchFilter