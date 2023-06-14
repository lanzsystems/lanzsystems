import React from "react";

import { Button } from "@chakra-ui/react";

import "./seccionTwo.scss";
const SeccionTwo = (props) => {
  return (
    <div className="seccion-two">
      <div className="seccion-left">
        <p className="title">{props.title}</p>
        <p className="subtitle">{props.subtitle}</p>
        <div className="texto"><div className="text-one">{props.text1}</div>
        <div className="text-two">{props.text2}</div></div>
        <div className="botones">
          <Button className="boton-registrate">{props.buttonOne}</Button>
        </div>
      </div>
      <div className="seccion-rigth">
        <img src={props.img} alt={props.alt} />
      </div>
    </div>
  );
};

SeccionTwo.propTypes = {};

export default SeccionTwo;
