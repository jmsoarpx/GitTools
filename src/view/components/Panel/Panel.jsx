/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./panel.scss";

export default (props) => {
  return (
    <div className="card__container">
      <div className="card__header">
        <img className="card__img" src={props.user.avatar_url || ""} alt="" />
      </div>
      <hr />
      <div className="card__body">
        <div className="card__nome">Nome: {props.user.name || ""}</div>
        <div className="card__nome">Seguidores: {props.user.followers || ""}</div>
        <div className="card__nome">Seguindo: {props.user.following || ""}</div>
        <div className="card__nome">Seguindo: {props.user.following || ""}</div>
        <div className="card__nome">Criado: {props.user.created_at || ""}</div>
        <div className="card__nome">Ultima atualização: {props.user.updated_at || ""}</div>
        <p>
          <a className="btn" href={props.user.html_url} role="button" target="_black">
            Ver detalhes
          </a>
        </p>
      </div>
    </div>
  );
};
