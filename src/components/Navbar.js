import './Navbar.css'; // Importa el archivo CSS
import React from 'react';


const Navbar = () => {
    return (
    <header>
        <a href="#" className="logo">
        <img src="images/LOGO_blancoturq.png" alt="logo-podovital" />
        </a>
        <nav>
        <a href="#home" className="nav-link">Inicio</a>
        <a href="#servi" className="nav-link">Servicios</a>
        <a href="#acerca-de" className="nav-link">Conócenos</a>
        <a href="#contacto" className="nav-link">Contacto</a>
        </nav>
    </header>
    );
};

export default Navbar;