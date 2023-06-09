import React from "react";
import SeccionOne from "../../assets/images/negocio.png";
import Diseño from "../../assets/images/diseño.png";
import Grafico from "../../assets/images/grafico.png";
import Marketing from "../../assets/images/marketing.png";
import Navbar from "../../components/navbar/navbar";
import Seccion from "../../components/seccion/seccion";
import SeccionTwo from "../../components/seccionTwo/seccionTwo";
import Footer from "../../components/footer/footer";
import Logo from "../../assets/logo/logo.svg";
import "./inicio.scss";
const Home = () => {
  return (
    <>
      <Navbar />
      <Seccion
        title="SOMOS LA MEJOR OPCIÓN PARA TU NEGOCIO"
        subtitle="Lorem ipsum dolor sit amet consectetur!"
        item1="Lorem ipsum dolor sit amet consectetur."
        item2="Lorem ipsum dolor sit amet consectetur."
        item3="Lorem ipsum dolor sit amet consectetur."
        buttonOne="Regístrate"
        buttonTwo="Inicia Sesión"
        img={SeccionOne}
      />
      <SeccionTwo
        title="DISEÑO WEB"
        subtitle="Lorem ipsum dolor sit amet consectetur!"
        text1="Lorem ipsum dolor sit amet consectetur. Venenatis consectetur morbi vel quisque malesuada lacus."
        text2="Lorem ipsum dolor sit amet consectetur. Venenatis consectetur morbi vel quisque malesuada lacus.Venenatis consectetur morbi vel quisque malesuada lacus.Lorem ipsum dolor sit amet consectetur. Venenatis consectetur morbi vel quisque malesuada lacus.Venenatis consectetur morbi vel quisque malesuada lacus."
        buttonOne="Cotizar"
        img={Diseño}
      />
      <SeccionTwo
        title="DISEÑO GRÁFICO"
        subtitle="Lorem ipsum dolor sit amet consectetur!"
        text1="Lorem ipsum dolor sit amet consectetur. Venenatis consectetur morbi vel quisque malesuada lacus."
        text2="Lorem ipsum dolor sit amet consectetur. Venenatis consectetur morbi vel quisque malesuada lacus.Venenatis consectetur morbi vel quisque malesuada lacus.Lorem ipsum dolor sit amet consectetur. Venenatis consectetur morbi vel quisque malesuada lacus.Venenatis consectetur morbi vel quisque malesuada lacus."
        buttonOne="Cotizar"
        img={Grafico}
      />
        <SeccionTwo
        title="MARKETING DIGITAL"
        subtitle="Lorem ipsum dolor sit amet consectetur!"
        text1="Lorem ipsum dolor sit amet consectetur. Venenatis consectetur morbi vel quisque malesuada lacus."
        text2="Lorem ipsum dolor sit amet consectetur. Venenatis consectetur morbi vel quisque malesuada lacus.Venenatis consectetur morbi vel quisque malesuada lacus.Lorem ipsum dolor sit amet consectetur. Venenatis consectetur morbi vel quisque malesuada lacus.Venenatis consectetur morbi vel quisque malesuada lacus."
        buttonOne="Cotizar"
        img={Marketing}
      />
      <Footer 
       src={Logo}
       title="INICIO"
       itemA="Diseño Web"
       itemB="Diseño Gráfico"
       itemC="Marketing Digital"
       title2="CONTACTO"
       itemD="lanzsystems@gmail.com"
       itemE="+58 4140265515"
       itemF="+58 4129840048"
       title3="VIDEOJUEGOS"
       itemG="Game Pass Ultimate"
       itemH="Videojuego Xbox"
       
       />
    </>
  );
};

export default Home;
