import React from "react";
import Contactcard from "../ContactCard/ContactCard";
import "./Bienvenida.css";
const Bienvenida = () => {
  return (
    <div className="recomendaciones-block">
      <div className="text-recom">
        <h3>Bienvenid@ a Garden House</h3>
        <p>
          Soy Juan Gabriel Solorzano tu Super Host para apoyarte en tu estancia
          en la Ciudad de México y en particular en nuestro Barrio de San Ángel.
          Quisiera compartirte qué es Garden House, es un negocio familiar de
          hospedaje con doce diferentes Suites en las que todas tienen su propio
          estilo haciendo de cada una única. El jardín es nuestra firma, un
          oasis lleno de vegetación y arte, que te ayudara a desconectarte del
          bullicio de la Ciudad disfrutando desde sus terrazas un ambiente de
          tranquilidad y descanso.
          <br />
          <br />
          En Garden House tratamos de mantener un entorno de serenidad para
          nuestros Huéspedes por lo que pedimos seguir las reglas de la
          propiedad y respetar el espacio. Carlos Solorzano, mi hermano es quien
          te recibirá y apoyará en lo que necesites durante tu estadía en Garden
          House.
          <br />
          <br />
          La dirección exacta de la puedes checar en este link:
          <a
            href="https://goo.gl/maps/v8opwPpau772"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://goo.gl/maps/v8opwPpau772
          </a>
          Cerrada Reforma 119, Campestre, 01040 Ciudad de México, CDMX
          <br />
          Cualquier cosa que necesites, por favor no dudes en contactarnos.
          Bienvenido a la Ciudad de México, al Barrio de San Ángel y a Garden
          House.
        </p>
      </div>
      <div className="contact-cards">
        <Contactcard />
      </div>
    </div>
  );
};

export default Bienvenida;
