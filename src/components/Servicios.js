import './Servicios.css'; // Importa el archivo CSS
import React from 'react';


const Servicios = () => {
return (

    <section id="servi">
        <div class="fondo-serv">
            <div class="fondo-claro-serv">
                <h1 class="titulo-serv">Conoce nuestros servicios</h1>
                <div class="services">
                    <div class="servicios">
                        <input type="checkbox" id="checkserv1"/>
                        <h4>Atención Podológica Normal
                        </h4>
                        <img src="images/normal.png" alt="atenciónnormal"/>
                        <div class="serv1">
                            <p> Asepsia del pie
                                <br/> Inspección completa del pie
                                <br/> Evaluación de sensibilidad
                                <br/> Limpieza de surcos ungueales
                                <br/> Onicotomia (corte de uñas)
                                <br/> Retiro de durezas y callosidades (hiperqueratosis)
                                <br/> Pullido de piel
                                <br/>Masaje e hidratación del pie
                                <br/>Tratamiento de Onicomicosis (hongos en las uñas)
                                <br/>Tratamiento de Dermatomicosis (hongos en la piel)
                                </p>
                        </div>
                        <label class="lab-serv1" for="checkserv1">Más información</label>
                    </div>
                    <div class="servicios">
                        <input type="checkbox" id="checkserv2"/>
                        <h4>Onicocriptosis <br/>(Uña Encarnada)</h4>
                        <img src="images/pata1.png" alt="uñaencarnada"/>
                        <div class="serv2">
                            <p>Asepsia completa del area afectada del dedo <br/> Despiculización <br/> Curación de avanzada <br/> A cada paciente se le entregarán las indicaciones de cuidado post procedimiento. <br/>En caso de requerir curación de avanzada,
                                esto tendrá un valor adicional<br/></p>
                        </div>
                        <label class="lab-serv2" for="checkserv2">Más información</label>
                    </div>
                    <div class="servicios">
                        <input type="checkbox" id="checkserv3"/>
                        <h4>Tratamiento Verruga <br/> Plantar</h4>
                        <img src="images/plantar.png" alt="verruga"/>

                        <div class="serv3">
                            Detalles de servicio y sesiones correspondientes a acordar con podóloga.
                        </div>
                        <label class="lab-serv3" for="checkserv3">Más información</label>
                    </div>
                    <div class="servicios">
                        <input type="checkbox" id="checkserv4"/>
                        <h4>Curación de Avanzada</h4>
                        <img src="images/avanzada.png" alt="avanzada"/>

                        <div class="serv4">
                            Servicio disponible en caso de ser necesario según la atención recibida.
                        </div>
                        <label class="lab-serv4" for="checkserv4">Más información</label>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Servicios;