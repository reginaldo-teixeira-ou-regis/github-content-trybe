/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import Repos from '../components/Repos';
import { AuthContext } from '../context/AuthProvider';
import { ReposContext } from '../context/ReposProvider';
import '../styles/Home.css';

function Home() {
  const { fetchRepos, isLoading, gitRepos, errors } = useContext(ReposContext);
  const { gitData } = useContext(AuthContext);

  useEffect(() => {
    const { repos_url: reposUrl } = gitData;
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

      <Repos gitRepos={ gitRepos } />

    </div>
  );
}

export default Home;
