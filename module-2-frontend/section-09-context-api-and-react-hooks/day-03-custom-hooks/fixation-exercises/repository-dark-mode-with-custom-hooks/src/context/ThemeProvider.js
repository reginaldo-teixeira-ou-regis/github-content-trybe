import { useMemo, useState } from 'react';
import AppContext from './AppContext';

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  const values = useMemo(() => ({
    dark, setDark,
  }), [dark, setDark]);

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  );
}

export default ThemeProvider;
