import React from 'react'
import { useLocation } from "react-router-dom";
import { Box, Flex, Link, Button, useColorModeValue } from "@chakra-ui/react";
import Logo from "../../assets/logo/logo-lanzsystems.svg";
import "./navbar.scss"

const Navbar = props => {
  const location = useLocation();
  const activeColor = useColorModeValue("teal.500", "teal.200");
  const inactiveColor = useColorModeValue("gray.600", "gray.300");
  return (
    <Box className='navbar'>
    <Flex justify="space-between" align="center">
    <img src={Logo} alt="Logo" />
      <Flex className='opciones'>
        <Link className="secciones" href="/" color={location.pathname === "/" ? activeColor : inactiveColor} mr={4}>Inicio</Link>
        <Link className="secciones" href="/nosotros" color={location.pathname === "/nosotros" ? activeColor : inactiveColor} mr={4}>Nosotros</Link>
        <Link className="secciones" href="/videojuegos" color={location.pathname === "/videojuegos" ? activeColor : inactiveColor} mr={4}>Videojuegos</Link>
        <Link className="secciones" href="/contacto" color={location.pathname === "/contacto" ? activeColor : inactiveColor}  mr={4}>Contacto</Link>
        <Button className='boton-sesion' >Iniciar sesión</Button>
        <Button className='boton-cuenta'variant="solid">Abrir una cuenta</Button>
      </Flex>
    </Flex>
  </Box>
  )
}

Navbar.propTypes = {}

export default Navbar