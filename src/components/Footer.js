import './Servicios.css'; // Importa el archivo CSS
import React from 'react';


const Footer = () => {
return (

<section class="footer">
    <div class="fondo-footer">
    <div class="logo-footer">
        <a href="login.html">
            <h4>Andrea Altamirano</h4>
        </a>
        <h5>Podóloga Clínica</h5>
        

    </div>
    <div class="mapa-sitio">
        <h4>Mapa de Sitio</h4>
        <li><a href="#home">Home</a></li>
        <li><a href="#servi">Servicios</a></li>
        <li><a href="#acerca-de">Acerca de</a></li>
        <li><a href="#contacto">Contacto</a></li>

    </div>

    <div class="redes-sociales">
        <h4>Redes Sociales</h4>
        <a target="_target" href="https://www.facebook.com/andrea.altamirano.92754/"><img src="images/facebook.png" alt=""/></a>
        <a target="_target" href="https://instagram.com/podovital_chile"><img src="images/instagram.png" alt=""/></a>
        <a target="_target" href="https://wa.me/56975374694"><img src="images/whatsapp.png" alt=""/></a>

    </div>
    <p class="copy">Desarrollado por Chosim | 초심 - 2023</p>
    </div>
</section>
);
};
export default Footer;