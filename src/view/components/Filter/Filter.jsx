/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./filter.scss";

export default (props) => {
  let time = null;
  const handlekeyup = (event) => {
    clearTimeout(time);
    time = setTimeout(() => {
      props.onKeyPress(event.target.value);
    }, 1000);
  };

  return <input className="filtro" placeholder="Usuário do Git" onChange={handlekeyup} />;
};
