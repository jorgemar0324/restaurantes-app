import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import NewRestaurant from './pages/NewRestaurant'
import { getRestaurants, addRestaurant as addRestaurantToDB } from './services/firebaseRestaurant'

function App() {
  const [restaurants, setRestaurants] = useState([])
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants()
        setRestaurants(data)
        setLoading(false)
      } catch (error) {
        console.error("Error loading restaurants: ", error)
        setLoading(false)
      }
    }

    fetchRestaurants()
  }, [])

  const handleAddRestaurant = async (newRestaurant) => {
    try {
      const addedRestaurant = await addRestaurantToDB(newRestaurant)
      setRestaurants([...restaurants, addedRestaurant])
    } catch (error) {
      console.error("Error adding restaurant: ", error)
    }
  }

  const toggleFavorite = (restaurantId) => {
    setFavorites(prev => 
      prev.includes(restaurantId)
        ? prev.filter(id => id !== restaurantId)
        : [...prev, restaurantId]
    )
  }

  if (loading) {
    return <div className="loading">Cargando restaurantes...</div>
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Home 
            restaurants={restaurants} 
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />} 
        />
        <Route path="/new" element={
          <NewRestaurant 
            onAddRestaurant={handleAddRestaurant}
          />} 
        />
      </Routes>
    </Router>
  )
}

export default App