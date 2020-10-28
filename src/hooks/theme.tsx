import React, { createContext, useState, useCallback, useContext } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { ThemeName, themes } from '../styles/themes/themes';

interface ThemeManagerContextProps {
  themeState: ThemeName;
  currentTheme: DefaultTheme;
  handleToggleTheme(): void;
}

const ThemeManagerContext = createContext<ThemeManagerContextProps>(
  {} as ThemeManagerContextProps,
);

const ThemeManager: React.FunctionComponent = ({ children }) => {
  const [themeState, setThemeState] = useState<ThemeName>('light');
  const currentTheme = themes[themeState];

  const handleToggleTheme = useCallback(() => {
    setThemeState(themeState === 'light' ? 'dark' : 'light');
  }, [themeState]);

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

function useTheme(): ThemeManagerContextProps {
  const context = useContext(ThemeManagerContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeManagerContext');
  }
  return context;
}
export { ThemeManager, useTheme };
