/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

function Home({ git }) {
  const [gitRepos, setGitRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  // parametro 1: side-effect function
  // parametro 2: array de dependências
  // - Se o array de dependências não existe: EU DEPENDENDO DE TUDO. LOGO, VOU EXECUTAR MINHA CALLBACK TODA HORA QUE O RENDER ACONTECER
  // - Se o array de dependências é vazio: EU NAO DEPENDO DE NINGUEM. ENTAO, VOU RODAR APENAS UMA VEZ
  // - Se o array tem algo: VOU RODAR A FUNCAO TODA VEZ QUE ALGUMA DEPENDENCIA QUE ESTA DENTRO DESSE ARRAY FOR ATUALIZADA
  useEffect(() => {
    // const url = git.gitData.repos_url;
    const { gitData: { repos_url: reposUrl } } = git;

    const fetchRepos = async (url) => {
      try {
        setIsLoading(true);

        const response = await fetch(url);

        if (!response.ok) {
          const newError = await response.json();
          throw newError.message;
        }

        const results = await response.json();
        setGitRepos(results);
      } catch (error) {
        setErrors(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos(reposUrl);
  }, []);

  if (errors) {
    return (<h1>{`Ops, algo de errado não está certo ${errors}`}</h1>);
  }

  return (

    <div className="Home">
      <h1>HOME</h1>
      {isLoading && <h2>Carregando ...</h2>}
      <h1>Repositórios</h1>

      {
        gitRepos.map((repo) => (
          <div key={ repo.id } className="repo">
            <p>{repo.name}</p>
            <p>{repo.html_url}</p>
          </div>
        ))
      }

    </div>
  );
}

export default Home;
