import React from "react";
import Somos from "../../assets/images/somos.png";
import Mision from "../../assets/images/mision.png";
import Vision from "../../assets/images/vision.png";
import Navbar from "../../components/navbar/navbar";
import Seccion from "../../components/seccion/seccion";
import SeccionTwo from "../../components/seccionTwo/seccionTwo";
import Footer from "../../components/footer/footer";
import Logo from "../../assets/logo/logo.svg";
import "./nosotros.scss";
const Nosotros = () => {
  return (
    <>
      <Navbar />
      <Seccion
        title="¿QUIÉNES SOMOS?"
        subtitle="Lorem ipsum dolor sit amet consectetur!"
        item1="Lorem ipsum dolor sit amet consectetur."
        item2="Lorem ipsum dolor sit amet consectetur."
        item3="Lorem ipsum dolor sit amet consectetur."
        buttonOne="Regístrate"
        buttonTwo="Inicia Sesión"
        img={Somos}
      />
      <SeccionTwo
        title="Misión"
        subtitle="Lorem ipsum dolor sit amet consectetur!"
        text1="Lorem ipsum dolor sit amet consectetur. Venenatis consectetur morbi vel quisque malesuada lacus."
        text2="Lorem ipsum dolor sit amet consectetur. Venenatis consectetur morbi vel quisque malesuada lacus.Venenatis consectetur morbi vel quisque malesuada lacus.Lorem ipsum dolor sit amet consectetur. Venenatis consectetur morbi vel quisque malesuada lacus.Venenatis consectetur morbi vel quisque malesuada lacus."
        buttonOne="Contacto"
        img={Mision}
      />
      <SeccionTwo
        title="Visión"
        subtitle="Lorem ipsum dolor sit amet consectetur!"
        text1="Lorem ipsum dolor sit amet consectetur. Venenatis consectetur morbi vel quisque malesuada lacus."
        text2="Lorem ipsum dolor sit amet consectetur. Venenatis consectetur morbi vel quisque malesuada lacus.Venenatis consectetur morbi vel quisque malesuada lacus.Lorem ipsum dolor sit amet consectetur. Venenatis consectetur morbi vel quisque malesuada lacus.Venenatis consectetur morbi vel quisque malesuada lacus."
        buttonOne="Contacto"
        img={Vision}
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

export default Nosotros;
