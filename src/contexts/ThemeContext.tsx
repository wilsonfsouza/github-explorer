import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { ThemeName, themes } from '../styles/themes/themes';

interface ThemeManagerContextProps {
  themeState: ThemeName;
  currentTheme: DefaultTheme;
  handleToggleTheme(): void;
}

export const ThemeManagerContext = createContext<ThemeManagerContextProps>(
  {} as ThemeManagerContextProps,
);

type PersistedStateProps<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(
  key: string,
  initialState: T,
): PersistedStateProps<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export const ThemeManager: React.FunctionComponent = ({ children }) => {
  const [themeState, setThemeState] = usePersistedState<ThemeName>(
    'THEME',
    'light',
  );
  const currentTheme = themes[themeState];

  const handleToggleTheme = useCallback(() => {
    setThemeState(themeState === 'light' ? 'dark' : 'light');
  }, [themeState, setThemeState]);

  return (
    <ThemeManagerContext.Provider
      value={{
        themeState,
        currentTheme,
        handleToggleTheme,
      }}
    >
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeManagerContext.Provider>
  );
};
