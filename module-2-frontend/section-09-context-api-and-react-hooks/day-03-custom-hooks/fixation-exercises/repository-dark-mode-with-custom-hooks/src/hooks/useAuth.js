import { useState } from 'react';
import useFetch from './useFetch';

function useAuth() {
  const { errors, isLoading, makeFetch } = useFetch();
  const [gitData, setGitData] = useState(null);

  const performLogin = async (username) => {
    const result = await makeFetch(`https://api.github.com/users/${username}`);
    setGitData(result);
  };

  const performLogout = () => {
    setGitData(null);
  };

  return {
    performLogin, isLoading, errors, gitData, performLogout,
  };
}

export default useAuth;
