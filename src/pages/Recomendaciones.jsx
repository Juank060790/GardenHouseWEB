import React from "react";
import RecomCard from "../components/RecomCard/RecomCard";
import tienda from "../assets/tienda.png";
import laundry from "../assets/Laundry.jpeg";
import pharmacy from "../assets/Farmacia_Guadalajara.png";
import bazarSabado from "../assets/venadoBlanco.png";
import casadecastilla from "../assets/casadecastilla.png";
import elcardenal from "../assets/Elcardenal.png";
import eloise from "../assets/eloise.jpeg";
import haus from "../assets/haus.png";
import cluny from "../assets/cluny.png";
import bisquetsobregon from "../assets/bisquetsobregon.jpeg";
import lacasadetono from "../assets/lacasadetono.jpeg";
import ahorro from "../assets/ahorro.jpeg";
import sumesa from "../assets/sumesa.jpeg";
import portalsanangel from "../assets/portalsanangel.jpeg";
import nezahualcoyotl from "../assets/nezahualcoyotl .jpeg";
import piramidedecuicuilco from "../assets/piramidedecuicuilco.jpeg";
import kidzania from "../assets/kidzania.jpeg";
import unam from "../assets/unam.jpeg";

const Recomendaciones = () => {
  return (
    <div className="recomendaciones-block">
      <div className="text-recom">
        <h3>Recomendaciones</h3>
        <h5>¿Que comer?</h5>
        <p>
          En esta lista quisiéramos recomendar restaurantes para diferentes
          tipos de antojos, la lista es acerca de lugares, típicos, icónicos,
          lugares que visitamos regularmente y lugares que nuestros huéspedes
          nos recomiendan.
        </p>
      </div>
      <h3>Restaurantes icónicos:</h3>
      <div className="resta-container">
        <RecomCard
          altImg={"San AngelInn"}
          imageRecom={
            "https://sanangelinn.com/wp-content/themes/sai/img/logo-footer.png"
          }
          linkRecom={"https://sanangelinn.com/"}
          description={
            "El restaurante más bonito de la Ciudad de México, es un poco caro, pero puedes ir antes de la hora de comer y sentarte en su patio y tomar una copa, te recomendamos las margaritas"
          }
        />
        <RecomCard
          altImg={"Fiesole"}
          imageRecom={
            "https://fastly.4sqi.net/img/user/width960/12YAV431HSRM3CX3.jpg"
          }
          linkRecom={"https://www.fiesole.mx/main/home.php"}
          description={
            "Después del teatro un excelente lugar para comer o cenar platillos italianos, te lo recomendamos es un poco caro."
          }
        />
        <RecomCard
          altImg={"Casa de Castilla"}
          imageRecom={casadecastilla}
          linkRecom={"https://www.facebook.com/casadcastilla/"}
          description={
            "Casa de Castilla ofrece la tradicional cocina española en un menú que conjunta las típicas recetas artesanas con las nuevas tendencias culinarias."
          }
        />
        <RecomCard
          altImg={"El Cardenal"}
          imageRecom={elcardenal}
          linkRecom={"https://www.facebook.com/restauranteelcardenal"}
          description={"Cocina nacional popular mexicana desde 1969"}
        />
        <RecomCard
          altImg={"La taberna del leon"}
          imageRecom={"https://tabernadelleon.com.mx/img/Logo.svg"}
          linkRecom={"https://tabernadelleon.com.mx/"}
          description={
            "Un lugar excelente para disfrutar de ceviches y ricas tostadas, te lo recomendamos."
          }
        />
        <RecomCard
          altImg={"Eloise"}
          imageRecom={eloise}
          linkRecom={"https://www.facebook.com/RestauranteEloise"}
          description={
            "Restaurante de cocina contemporánea francesa del Chef Abel Hernández y la Sommelier Laura Santander."
          }
        />
      </div>
      <h5>Restaurantes Medios</h5>
      <div className="resta-container">
        <RecomCard
          altImg={"Cluny"}
          imageRecom={cluny}
          linkRecom={"https://maps.app.goo.gl/PDVDqTfczV2jmWmk6"}
          description={"Crepas saladas y dulces. Uno de mis lugares favoritos"}
        />
        <RecomCard
          altImg={"Saks"}
          imageRecom={
            "https://static.wixstatic.com/media/629fde_d0f93f7cfceb4786a5459304a1881c16~mv2.png/v1/fill/w_252,h_172,al_c,usm_0.66_1.00_0.01,enc_auto/Logo-saks-web.png"
          }
          linkRecom={"https://www.saks.com.mx/"}
          description={
            "Gastronomia del mundo donde lo puedes acompañar de un buen tequila ya que tiene una vinoteca. Bethel me pregunto por este restaurante"
          }
        />
        <RecomCard
          altImg={"Haus"}
          imageRecom={haus}
          linkRecom={"http://hausfonduebistro.mx/index.html"}
          description={
            "En el Pabellón Altavista  un buen lugar de pizzas, fondues y ensaladas."
          }
        />
        <RecomCard
          altImg={"Bisquets Obregon"}
          imageRecom={bisquetsobregon}
          linkRecom={"https://www.facebook.com/bisquetsobregonoficial"}
          description={
            "Bisquets Obregón inicia en en el año de 1945 con la apertura de “La Perla de Oriente en la col. Roma. Hemos logrado conservar nuestro origen como una compañía 100% mexicana que, con 75 años de experiencia, nos distinguimos por una extensa variedad de platillos, el pan artesanal horneado todos los días en cada restaurante y el tradicional café con leche."
          }
        />
      </div>
      <h5>Comida Mexicana</h5>
      <div className="resta-container">
        <RecomCard
          altImg={"Enchiladas del parque"}
          imageRecom={
            "https://tofuu.getjusto.com/orioneat-prod-resized/sSAcrfgYJWjWxnXqn-200-x.webp"
          }
          linkRecom={"https://www.enchiladasdelparque.com/pedir"}
          description={
            "Un lugar económico para desayunar o comer, muy cerca de donde estamos."
          }
        />
        <RecomCard
          altImg={"La Casa de toño"}
          imageRecom={lacasadetono}
          linkRecom={"https://www.enchiladasdelparque.com/pedir"}
          description={
            "Pozole, enchiladas, tostadas, sopes, quesadillas y de postre un flan"
          }
        />
      </div>

      <h5>Farmacias</h5>
      <div className="resta-container">
        <RecomCard
          altImg={"Farmacia Guadalajara"}
          imageRecom={pharmacy}
          linkRecom={"https://goo.gl/maps/q1FzQ3wjvFfxb9cz8"}
          description={
            "Para cualquier tipo de medicina, la farmacia guadalajara es una buena opción."
          }
        />
        <RecomCard
          altImg={"Farmacia Guadalajara"}
          imageRecom={ahorro}
          linkRecom={"https://maps.app.goo.gl/URtqRJHtqpkW6oyw5"}
          description={
            "Si necesitas una farmacia esta también está muy cerca, 10 minutos caminando."
          }
        />
      </div>

      <h5>Servicios</h5>
      <div className="resta-container">
        <RecomCard
          altImg={"La estrellita"}
          imageRecom={tienda}
          linkRecom={"https://goo.gl/maps/FPyoVneifw8nHdTcA"}
          description={
            "Tienes antojo de algo o necesitas comprar comida, la estrellita es una buena opción."
          }
        />
        <RecomCard
          altImg={"Hanna Tintorería y Lavanderia"}
          imageRecom={laundry}
          linkRecom={"https://goo.gl/maps/iWEXqNL457WLLPss9"}
          description={
            "Tienes que planchar o lavar algo, la tintoreria y lavanderia Hanna es una buena opción."
          }
        />
        <RecomCard
          altImg={"Supermercado sumesa"}
          imageRecom={sumesa}
          linkRecom={"https://maps.app.goo.gl/38mc8G7iJoC8ytf17"}
          description={"Este es supermercado mas cercano."}
        />
        <RecomCard
          altImg={"Portal San Angel"}
          imageRecom={portalsanangel}
          linkRecom={"https://maps.app.goo.gl/aCsD4oyiphhtBoT8A"}
          description={
            "El centro comercial mas cercano a 20 minutos caminando sobre Avenida Revolución, restaurantes, tiendas de ropa y cines."
          }
        />
      </div>
      <h5>Sitios de interes</h5>
      <div className="resta-container">
        <RecomCard
          altImg={"UNAM"}
          imageRecom={unam}
          linkRecom={"https://maps.app.goo.gl/JK6nfmxke2V5Eu9g9"}
          description={
            "La Universidad Nacional Autónoma de México fue fundada el 21 de septiembre de 1551 con el nombre de la Real y Pontificia Universidad de México. Es la más grande e importante universidad de México e Iberoamérica."
          }
        />
        <RecomCard
          altImg={"Kidzania"}
          imageRecom={kidzania}
          linkRecom={"https://maps.app.goo.gl/JK6nfmxke2V5Eu9g9"}
          description={
            "Es una ciudad interactiva para niños de 2 a 16 años de edad que mezcla inspiración, diversión y aprendizaje a través de actividades de juego de rol. Los niños pueden explorar libremente una ciudad a escala de más de 7.000 metros cuadrados de superficie, donde pueden experimentar más de 100 emocionantes profesiones."
          }
        />
        <RecomCard
          altImg={"Piramide de cuicuilco"}
          imageRecom={piramidedecuicuilco}
          linkRecom={"https://maps.app.goo.gl/DfZ5kVWoTURpVbRk7"}
          description={
            "Cuicuilco es una zona arqueológica mesoamericana, construida en el periodo preclásico 800 a. C. a 250 d. C. Está localizada en el extremo suroeste de la Cuenca de México, cerca lo que fue el lago de Xochimilco, en la actual Ciudad de México."
          }
        />
        <RecomCard
          altImg={"Pirámide principal de Cuicuilco"}
          imageRecom={nezahualcoyotl}
          linkRecom={"https://g.page/BazaarSabado?share"}
          description={
            "Sala Nezahualcóyotl donde se realizan conciertos de música de las Orquestas, de la Universidad Nacional Autónoma de México."
          }
        />
        <RecomCard
          altImg={"El Bazaar Sábado"}
          imageRecom={bazarSabado}
          linkRecom={"https://g.page/BazaarSabado?share"}
          description={
            "Los Sábados es día de fiesta en San Ángel y la visita es obligada al bazar del Sabado."
          }
        />
        <RecomCard
          altImg={"Teatro Helenico"}
          imageRecom={
            "https://www.helenico.gob.mx/wp-content/uploads/2019/05/logo-helenico.png"
          }
          linkRecom={"https://goo.gl/maps/nE5tM2kfEWiuPBVV8"}
          description={
            "Te gusta el teatro... en el Centro Cultural Helenico encontrarás obras de diferentes gustos y la Librería El Péndulo donde podrás tomar un café y buscar un libro que te guste."
          }
        />
        <RecomCard
          altImg={"Casa de Diego Rivera"}
          imageRecom={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.turimexico.com%2Fwp-content%2Fuploads%2F2019%2F07%2FMuseo-Casa-Estudio-Diego-Rivera-y-Frida-Kahlo-en-la-Ciudad-de-M%25C3%25A9xico.jpg&f=1&nofb=1"
          }
          linkRecom={"https://goo.gl/maps/Tr5YsV6Abmmk9yeW9"}
          description={
            "A sólo 10 minutos caminando conocerás este interesante lugar donde vivieron Frida y Diego."
          }
        />
      </div>
    </div>
  );
};

export default Recomendaciones;
