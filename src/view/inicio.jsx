/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Button from "./components/Button";
import Panel from "./components/Panel";
import Respositorios from "./components/repositorios";
import GetRepos from "./script/getRepos";
import GetStarred from "./script/getStarred";
import GetUser from "./script/getUser";

export default () => {
  const [filtervalue, setfiltervalue] = useState("");
  const [repoText, setrepoText] = useState("");
  const [dadosUser, setdadosUser] = useState([]);
  const [dadosRepo, setdadosRepo] = useState([]);
  const [find, setfind] = useState({
    user: false,
    repo: false,
  });

  const getRespos = () => {
    GetRepos(filtervalue).then((resp) => setdadosRepo([...resp]));
    setfind({ ...find, repo: true });
    setrepoText("Repositorios do Usuário");
  };

  const getSta = () => {
    GetStarred(filtervalue).then((resp) => setdadosRepo([...resp]));
    setfind({ ...find, repo: true });
    setrepoText("Repositorios mais vistos");
  };

  const findUser = () => {
    GetUser(filtervalue).then((resp) => {
      setdadosUser(resp);
      setfind({ user: true, repo: false });
    });
  };

  useEffect(() => {
    filtervalue.length === 0
      ? setfind({
          user: false,
          repo: false,
        })
      : "";
    console.log(filtervalue.length);
  }, [filtervalue]);

  return (
    <div className="container">
      <Header appearance="inverse" title="Git Tools" />
      <div className="content container">
        <main className="main">
          <Filter onKeyPress={setfiltervalue} dadosUser={setdadosUser} />
          <Button text="Buscar" click={findUser} />
          <Button text="repos" click={getRespos} />
          <Button text="starred" click={getSta} />
          <div className="main__filter">
            {find.user ? <Panel user={dadosUser} /> : ""}
            {find.repo ? <Respositorios repos={dadosRepo} text={repoText} /> : ""}
          </div>
        </main>
      </div>
      <footer>Criada por Julio Mendes Tonon</footer>
    </div>
  );
};
