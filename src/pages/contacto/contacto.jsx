import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Logo from "../../assets/logo/logo.svg";
import Contactos from "../../assets/images/contacto.svg";

import "./contacto.scss"
import Form from "../../components/form/form";
const Contacto = () => {
  return (
    <>
      <Navbar />
      <Form 
         title="CONTÁTANOS"
         subtitle="Cotiza nuestros servicios o solicita videojuegos"
         img={Contactos}
         nombre="Nombre"
         email="Email"
         servicio="Servicos a consultar"
         descripcion="Descripción"
         buttonOne="Enviar"
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

export default Contacto;
