import React from "react";
import SeccionOne from "../../assets/images/negocio.png";
import Gamepass from "../../assets/images/gamepass.png";
import Xbox from "../../assets/images/xbox.png";
import Streaming from "../../assets/images/streaming.png";
import Navbar from "../../components/navbar/navbar";
import Seccion from "../../components/seccion/seccion";
import SeccionTwo from "../../components/seccionTwo/seccionTwo";
import Footer from "../../components/footer/footer";
import Logo from "../../assets/logo/logo.svg";
import "./videojuegos.scss";
const Videojuegos = () => {
  return (
    <>
      <Navbar />
      <Seccion
        title="GAME PASS ULTIMATE"
        subtitle="Lorem ipsum dolor sit amet consectetur!"
        item1="Lorem ipsum dolor sit amet consectetur."
        item2="Lorem ipsum dolor sit amet consectetur."
        item3="Lorem ipsum dolor sit amet consectetur."
        buttonOne="Regístrate"
        buttonTwo="Inicia Sesión"
        img={Gamepass}
      />
     <Seccion
        title="VIDEOJUEGOS XBOX"
        subtitle="Lorem ipsum dolor sit amet consectetur!"
        item1="Lorem ipsum dolor sit amet consectetur."
        item2="Lorem ipsum dolor sit amet consectetur."
        item3="Lorem ipsum dolor sit amet consectetur."
        buttonOne="Regístrate"
        buttonTwo="Inicia Sesión"
        img={Xbox}
      />
        <Seccion
        title="SERVICIO DE STREAMING"
        subtitle="Lorem ipsum dolor sit amet consectetur!"
        item1="Lorem ipsum dolor sit amet consectetur."
        item2="Lorem ipsum dolor sit amet consectetur."
        item3="Lorem ipsum dolor sit amet consectetur."
        buttonOne="Regístrate"
        buttonTwo="Inicia Sesión"
        img={Streaming}
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

export default Videojuegos;
