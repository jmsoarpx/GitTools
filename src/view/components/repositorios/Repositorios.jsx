/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./repositorios.scss";

export default (props) => {
  return (
    <div id="result" className="card__repos">
      <div>{props.text}</div>
      <div className="card__repos__body">
        {props.repos.map((e) => {
          return (
            <>
              <div className="card__repos__nome">
                Nome Repositorio:&nbsp;
                <a class="github-card-repo-headline" href={e.html_url} target="_black">
                  <b>{e.name}</b>
                </a>
              </div>
              <div className="card__repos__nome">Descrição: {e.description || ""}</div>
              <div className="card__repos__nome">Linguagem: {e.language || ""}</div>
              <br />
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
};
