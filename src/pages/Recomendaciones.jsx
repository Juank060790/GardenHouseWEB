import React from "react";
import RecomCard from "../components/RecomCard/RecomCard";
import tienda from "../assets/tienda.png";
import laundry from "../assets/Laundry.jpeg";
import pharmacy from "../assets/Farmacia_Guadalajara.png";
import bazarSabado from "../assets/venadoBlanco.png";

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
          altImg={"Haus"}
          imageRecom={
            "https://scontent-mia3-2.xx.fbcdn.net/v/t1.18169-9/11083920_960275953996257_5496046907873062715_n.png?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JN0yOB8VfTUAX9WE_cY&tn=1TrjmMiUca2KvyhH&_nc_pt=1&_nc_ht=scontent-mia3-2.xx&oh=00_AT904dmrvV2Gr_JpkjHIqSAZjOf4qiya9rkmLLw0FZVcYQ&oe=62874388"
          }
          linkRecom={"http://hausfonduebistro.mx/index.html"}
          description={
            "En el Pabellón Altavista  un buen lugar de pizzas, fondues y ensaladas."
          }
        />
        <RecomCard
          altImg={"Saks"}
          imageRecom={
            "https://static.wixstatic.com/media/629fde_d0f93f7cfceb4786a5459304a1881c16~mv2.png/v1/fill/w_252,h_172,al_c,usm_0.66_1.00_0.01,enc_auto/Logo-saks-web.png"
          }
          linkRecom={"https://www.saks.com.mx/"}
          description={
            "Gastronomia del mundo donde lo puedes acompañar de un buen tequila ya que tiene una vinoteca"
          }
        />
        <RecomCard
          altImg={"La taberna del leon"}
          imageRecom={"https://tabernadelleon.com.mx/img/Logo.svg"}
          linkRecom={"https://tabernadelleon.com.mx/"}
          description={
            "Un lugar excelente para disfrutar de ceviches y ricas tostadas, te lo recomendamos."
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
          altImg={"Farmacia Guadalajara"}
          imageRecom={pharmacy}
          linkRecom={"https://goo.gl/maps/q1FzQ3wjvFfxb9cz8"}
          description={
            "Para cualquier tipo de medicina, la farmacia guadalajara es una buena opción."
          }
        />
      </div>
      <h5>Sitios de interes</h5>
      <div className="resta-container">
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
