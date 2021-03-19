/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./button.scss";

export default (props) => {
  return (
    <button className="button" onClick={() => props.click && props.click()}>
      {props.text}
    </button>
  );
};
