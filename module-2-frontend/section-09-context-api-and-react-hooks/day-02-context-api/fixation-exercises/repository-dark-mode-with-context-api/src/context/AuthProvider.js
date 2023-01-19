import { createContext, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [gitData, setGitData] = useState(null);
  const history = useHistory();

  const fetchData = async (username) => {
    try {
      setIsLoading(true);

      const data = await fetch(`https://api.github.com/users/${username}`);

      if (!data.ok) {
        console.log(data);
        const newError = await data.json();
        console.log(newError);
        throw newError.message;
      }

      const json = await data.json();
      setGitData(json);
      history.push('/home');
    } catch (error) {
      setErrors(error);
    } finally {
      setIsLoading(false);
    }
  };

  const values = useMemo(() => ({
    isLoading, gitData, errors, fetchData,
  }), [isLoading, gitData, errors]);

  return (
    <AuthContext.Provider value={ values }>
      { children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;
