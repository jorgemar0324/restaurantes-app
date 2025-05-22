import React from 'react'
import { FaUtensils } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'




const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to= '/' className='navbar-logo'>
          <FaUtensils className='logo-icon' />
          <span className='logo-text'>Directorio de Restaurantes</span> 
        </Link>
        <div className='navbar-links'>   
          <Link to='/' className='navbar-link'>Inicio</Link>
          <Link to='/new' className='navbar-link'>Añadir Restaurante</Link>          
        </div>
      </div>

    </nav>
  );
}

export default Navbar

