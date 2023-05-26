/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import Repos from '../components/Repos';
import { AuthContext } from '../context/AuthProvider';
import '../styles/Home.css';
import useFetch from '../hooks/useFetch';

function Home() {
  const { gitData } = useContext(AuthContext);
  const { isLoading, errors, makeFetch } = useFetch();
  const [gitRepos, setGitRepos] = useState([]);

  useEffect(() => {
    const { repos_url: reposUrl } = gitData;

    const getRepos = async (url) => {
      const repos = await makeFetch(url);
      setGitRepos(repos);
    };

    getRepos(reposUrl);
  }, []);

  if (errors) {
    return (<h1>{`Ops, algo de errado não está certo ${errors}`}</h1>);
  }

  const { name, avatar_url: avatarUrl } = gitData;

  return (
    <div className="Home">
      <h1>HOME</h1>
      {isLoading && <h2>Carregando ...</h2>}
      <h1>Repositórios</h1>
      <h3>{name}</h3>
      <img src={ avatarUrl } alt="avatar" width={ 100 } />
      <Repos gitRepos={ gitRepos } />

    </div>
  );
}

export default Home;
