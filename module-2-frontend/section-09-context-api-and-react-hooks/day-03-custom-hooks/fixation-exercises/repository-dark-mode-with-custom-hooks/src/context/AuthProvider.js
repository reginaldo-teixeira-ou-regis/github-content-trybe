/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useMemo } from 'react';
import useAuth from '../hooks/useAuth';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const { errors, isLoading, performLogin, gitData } = useAuth();

  const values = useMemo(() => ({
    isLoading, errors, gitData, performLogin,
  }), [isLoading, errors, gitData]);

  return (
    <AuthContext.Provider value={ values }>
      { children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;
