import React from "react";

import { CheckCircleIcon } from "@chakra-ui/icons";
import { Button, UnorderedList, ListItem, ListIcon } from "@chakra-ui/react";

import "./seccion.scss";
const Seccion = (props) => {
  return (
    <div className="seccion-one">
      <div className="seccion-left">
        <p className="title">{props.title}</p>
        <p className="subtitle">{props.subtitle}</p>
        <div className="lista">
          <UnorderedList styleType="none">
            <ListItem>
              <ListIcon className="icon" as={CheckCircleIcon} />
              {props.item1}
            </ListItem>
            <ListItem>
              <ListIcon className="icon" as={CheckCircleIcon} />
              {props.item2}
            </ListItem>
            <ListItem>
              <ListIcon className="icon" as={CheckCircleIcon} />
              {props.item3}
            </ListItem>
          </UnorderedList>
        </div>
        <div className="text-one">{props.text1}</div>
        <div className="text-two">{props.text2}</div>
        <div className="botones">
          <Button className="boton-registrate">{props.buttonOne}</Button>
          <Button className="boton-sesion">{props.buttonTwo}</Button>
        </div>
      </div>
      <div className="seccion-rigth">
        <img src={props.img} alt={props.alt} />
      </div>
    </div>
  );
};

Seccion.propTypes = {};

export default Seccion;
