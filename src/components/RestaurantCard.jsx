import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import '../styles/RestaurantCard.css'

const RestaurantCard = ({ restaurant, isFavorite, onToggleFavorite }) => {
  return (
    <div className="restaurant-card">
      <div className="card-image">
        <img src={restaurant.image} alt={restaurant.name} />
        <button 
          className="favorite-btn" 
          onClick={() => onToggleFavorite(restaurant.id)}
        >
          {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
        </button>
      </div>
      <div className="card-content">
        <h3>{restaurant.name}</h3>
        <p className="description">{restaurant.description}</p>
        <div className="details">
          <span className="category">{restaurant.category}</span>
          <span className="price-range">{restaurant.priceRange}</span>
          <span className="rating">⭐ {restaurant.rating}</span>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard