import React from "react";
import RecomCard from "../components/RecomCard/RecomCard";

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
          imageRecom={
            "https://tofuu.getjusto.com/orioneat-prod-resized/sSAcrfgYJWjWxnXqn-200-x.webp"
          }
          linkRecom={"https://www.enchiladasdelparque.com/pedir"}
          description={
            "Un lugar económico para desayunar o comer, muy cerca de donde estamos."
          }
        />
        <RecomCard
          imageRecom={
            "https://sanangelinn.com/wp-content/themes/sai/img/logo-footer.png"
          }
          linkRecom={"https://sanangelinn.com/"}
          description={
            "El restaurante más bonito de la Ciudad de México, es un poco caro, pero puedes ir antes de la hora de comer y sentarte en su patio y tomar una copa, te recomendamos las margaritas"
          }
        />
        <RecomCard
          imageRecom={
            "https://lh3.googleusercontent.com/geougc/AF1QipPTWR9Xks0RecKl2hhiSZ2WwDCabs9l-GguKOwZ=h400-no"
          }
          linkRecom={"https://www.fiesole.mx/main/home.php"}
          description={
            "Después del teatro un excelente lugar para comer o cenar platillos italianos, te lo recomendamos es un poco caro."
          }
        />
        <RecomCard
          imageRecom={
            "https://scontent-mia3-2.xx.fbcdn.net/v/t1.18169-9/11083920_960275953996257_5496046907873062715_n.png?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JN0yOB8VfTUAX9WE_cY&tn=1TrjmMiUca2KvyhH&_nc_pt=1&_nc_ht=scontent-mia3-2.xx&oh=00_AT904dmrvV2Gr_JpkjHIqSAZjOf4qiya9rkmLLw0FZVcYQ&oe=62874388"
          }
          linkRecom={"http://hausfonduebistro.mx/index.html"}
          description={
            "En el Pabellón Altavista  un buen lugar de pizzas, fondues y ensaladas."
          }
        />
        <RecomCard
          imageRecom={
            "https://static.wixstatic.com/media/629fde_d0f93f7cfceb4786a5459304a1881c16~mv2.png/v1/fill/w_252,h_172,al_c,usm_0.66_1.00_0.01,enc_auto/Logo-saks-web.png"
          }
          linkRecom={"https://www.saks.com.mx/"}
          description={
            "Gastronomia del mundo donde lo puedes acompañar de un buen tequila ya que tiene una vinoteca"
          }
        />
        <RecomCard
          imageRecom={"https://tabernadelleon.com.mx/img/Logo.svg"}
          linkRecom={"https://tabernadelleon.com.mx/"}
          description={
            "Un lugar excelente para disfrutar de ceviches y ricas tostadas, te lo recomendamos."
          }
        />
      </div>
    </div>
  );
};

export default Recomendaciones;
