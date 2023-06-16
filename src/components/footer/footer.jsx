import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Divider } from '@chakra-ui/react';

import "./footer.scss";
import facebook from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"

const Footer = (props) => {
  return (
    <Box as="footer" className="footer-global" color="white">
      <div className="footer">
        <div>
          <img src={props.src} alt={props.alt} />
        </div>
        <div className="opciones">
          <p className="title">{props.title}</p>
          <p className="text">{props.itemA}</p>
          <p className="text">{props.itemB}</p>
          <p className="text">{props.itemC}</p>
        </div>
        <div className="opciones">
          <p className="title">{props.title2}</p>
          <p className="text">
            <EmailIcon />
            {props.itemD}
          </p>
          <p className="text">
            <PhoneIcon />
            {props.itemE}
          </p>
          <p className="text">
            <PhoneIcon />
            {props.itemF}
          </p>
        </div>
        <div className="opciones">
          <p className="title">{props.title3}</p>
          <p className="text">{props.itemG}</p>
          <p className="text">{props.itemH}</p>
          <p className="text">{props.itemI}</p>
        </div>
      </div>
      <Divider my={4} />
      <Flex justifyContent="center">
        <Link href="https://github.com/tu-usuario-github" isExternal mx={2}>
          <img src={facebook} alt="facebook" />
        </Link>
        <Link
          href="https://linkedin.com/in/tu-usuario-linkedin"
          isExternal
          mx={2}
        >
          <img src={instagram} alt="instagram" />
        </Link>
      
      </Flex>
     
      <Text textAlign="center" mt={2}>
        Todos los derechos reservados &copy; 2023
      </Text>
    </Box>
  );
};

Footer.propTypes = {};

export default Footer;
