import React from "react";
import { Input } from '@chakra-ui/react'
import "./form.scss";
import { Button } from "@chakra-ui/react";
const Form = (props) => {
  return (
    <div className="seccion">
      <div className="form" style={{ flex: 1 }}>
        <p className="title">{props.title}</p>
        <p>{props.subtitle}</p>
  
        <Input className="input" variant='flushed' placeholder={props.nombre} />
        <Input className="input" variant='flushed' placeholder={props.email} />
        <Input className="input" variant='flushed' placeholder={props.servicio} />
        <Input className="input" variant='flushed' placeholder={props.descripcion} />
        <Button className="boton-enviar">{props.buttonOne}</Button>
      </div>
      <div style={{ flex: 1 }}>
        <img src={props.img} alt="" />
      </div>
    </div>
  );
};

Form.propTypes = {};

export default Form;
