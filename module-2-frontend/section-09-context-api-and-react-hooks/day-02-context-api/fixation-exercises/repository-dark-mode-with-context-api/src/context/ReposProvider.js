import { createContext, useMemo, useState } from 'react';

export const ReposContext = createContext();

function ReposProvider({ children }) {
  const [gitRepos, setGitRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

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

  const values = useMemo(() => ({
    isLoading, errors, gitRepos, fetchRepos,
  }), [isLoading, errors, gitRepos]);

  return (
    <ReposContext.Provider value={ values }>
      { children }
    </ReposContext.Provider>
  );
}

export default ReposProvider;
