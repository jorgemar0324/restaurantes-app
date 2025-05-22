import React, { useState, useEffect } from 'react'
import RestaurantCard from '../components/RestaurantCard'
import SearchFilter from '../components/SearchFilter'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'

const Home = ({ restaurants, favorites, onToggleFavorites }) => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    rating: '',
    onlyFavorites: false
  });

  const navigate = useNavigate();

  useEffect(() => {
    let results = [...restaurants];

    if (searchTerm) {
      results = results.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.category) {
      results = results.filter(restaurant => restaurant.category === filters.category);
    }

    if (filters.priceRange) {
      results = results.filter(restaurant => restaurant.priceRange === filters.priceRange);
    }

    if (filters.rating) {
      results = results.filter(restaurant => restaurant.rating >= parseFloat(filters.rating));
    }

    if (filters.onlyFavorites) {
      results = results.filter(restaurant => favorites.includes(restaurant.id));
    }

    setFilteredRestaurants(results);
  }, [restaurants, searchTerm, filters, favorites]);

  return (
    <div className='home-container'>
      <div className='home-header'>
        <h1>Directorio de Restaurantes</h1>
        <button className='add-restaurant-btn' onClick={() => navigate('/new')}>
          Añadir Restaurante
        </button>
      </div>

      <SearchFilter 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filters={filters}
        onFilterChange={setFilters}
      />

      <div className='restaurant-cards'>
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map(restaurant => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              isFavorite={favorites.includes(restaurant.id)}
              onToggleFavorite={onToggleFavorites}
            />
          ))
        ) : (
          <p className='no-results'>No se encontraron restaurantes que coincidan con los criterios de búsqueda.</p>
        )}
      </div>
    </div>
  )
}

export default Home