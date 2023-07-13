import './Contacto.css'; // Importa el archivo CSS
import React from 'react';


const Contacto = () => {
return (
    <section id="contacto">
        <div class="fondo-cont">
            <div class="cuadro-cont">
                <h1>Contacto</h1>
                <div class="secc-cont">
                    <div class="fondo-clarito">
                        <div class="cont-contact">
                            <h4>Podóloga Clínica Andrea Altamirano</h4>
                            <p class="info-andrea">Rol MINSAL 3195 <br/>RNPI 38070 Superintendencia de Salud</p>
                            <h4 class="ubic">Ubicación</h4>
                            <img src="images/location.png" alt=""/>
                            <p>Calle Dirección #1234, Cunco <br/> Región de la Araucanía</p>
                            <h4 class="telef">Teléfono</h4>
                            <img src="images/whatsapp-blanco.png" alt=""/>
                            <p>+569 7537 4694</p>
                            <h4 class="horar">Horario de atención</h4>
                            <p> Lunes a Sábado <br/>10:00 a 19:00 hrs</p>
                        </div>
                    </div>
                    <div class="fondomapa">

                        <a target="_target" href="https://www.google.com/maps/@-38.9317702,-72.0360412,15.64z?entry=ttu">
                            <img src="images/mapacunco.png" alt="Clickable Image"/>
                        </a>

                    </div>
                </div>
            </div>
        </div>
        

    </section>

);
};
export default Contacto;