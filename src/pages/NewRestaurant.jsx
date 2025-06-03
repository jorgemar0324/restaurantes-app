import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/NewRestaurant.css'

const NewRestaurant = ({ onAddRestaurant }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    priceRange: '$',
    rating: 0,
    image: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 /* const handleSubmit = (e) => {
    e.preventDefault();
    onAddRestaurant(formData);
    navigate('/');
  };*/

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await onAddRestaurant(formData);
    navigate('/');
  } catch (error) {
    console.error("Error adding restaurant: ", error);
    alert("Hubo un error al agregar el restaurante");
  }
};

  return (
    <div className="new-restaurant-container">
      <h1>Añadir Nuevo Restaurante</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Descripción:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Categoría:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una categoría</option>
            <option value="Italiana">Italiana</option>
            <option value="Japonesa">Japonesa</option>
            <option value="Americana">Americana</option>
            <option value="Mexicana">Mexicana</option>
            <option value="China">China</option>
            <option value="Vegetariana">Vegetariana</option>
          </select>
        </div>

        <div className="form-group">
          <label>Rango de precios:</label>
          <select
            name="priceRange"
            value={formData.priceRange}
            onChange={handleChange}
            required
          >
            <option value="$">$ (Económico)</option>
            <option value="$$">$$ (Moderado)</option>
            <option value="$$$">$$$ (Caro)</option>
            <option value="$$$$">$$$$ (Muy caro)</option>
          </select>
        </div>

        <div className="form-group">
          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            min="0"
            max="5"
            step="0.1"
            value={formData.rating}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>URL de la imagen:</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <button type="button" onClick={() => navigate('/')} className="cancel-btn">
            Cancelar
          </button>
          <button type="submit" className="submit-btn">
            Guardar Restaurante
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewRestaurant