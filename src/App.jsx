import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import NewRestaurant from './pages/NewRestaurant'

function App() {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "La Trattoria",
      description: "Auténtica cocina italiana con pasta fresca y pizzas al horno de leña.",
      category: "Italiana",
      priceRange: "$$",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590"
    },
    {
      id: 2,
      name: "Sushi Palace",
      description: "Sushi fresco preparado por chefs japoneses con ingredientes importados.",
      category: "Japonesa",
      priceRange: "$$$",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c"
    },
    {
      id: 3,
      name: "Burger House",
      description: "Hamburguesas artesanales con carne 100% Angus.",
      category: "Americana",
      priceRange: "$",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
      {
    id: 4,
    name: "Chilacas",
    description: "Los mejores burritos y tacos al mejor precio",
    category: "Mexicana",
    address: "Avenida 80 Calle 67",
    priceRange: "$$",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1653084019129-1f2303bb5bc0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
  ]);

  const [favorites, setFavorites] = useState([]);

  const addRestaurant = (newRestaurant) => {
    setRestaurants([...restaurants, { ...newRestaurant, id: restaurants.length + 1 }]);
  };

  const toggleFavorite = (restaurantId) => {
    if (favorites.includes(restaurantId)) {
      setFavorites(favorites.filter(id => id !== restaurantId));
    } else {
      setFavorites([...favorites, restaurantId]);
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Home 
            restaurants={restaurants} 
            favorites={favorites}
            onToggleFavorites={toggleFavorite}
          />} 
        />
        <Route path="/new" element={
          <NewRestaurant 
            onAddRestaurant={addRestaurant}
          />} 
        />
      </Routes>
    </Router>
  )
}

export default App