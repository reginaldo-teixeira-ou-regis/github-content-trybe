import React from 'react';

function Repos({ gitRepos }) {
  return (
    <div className="repos">
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

export default Repos;
