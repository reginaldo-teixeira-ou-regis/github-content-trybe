import { useMemo, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [dark, setDark] = useState(true);
  const [gitData, setGitData] = useState(null);

  const values = useMemo(() => ({
    dark, setDark, gitData, setGitData,
  }), [dark, setDark, gitData, setGitData]);

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
