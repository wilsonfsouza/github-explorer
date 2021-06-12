import { useContext } from 'react';
import { DefaultTheme } from 'styled-components';
import { ThemeManagerContext } from '../contexts/ThemeContext';
import { ThemeName } from '../styles/themes/themes';

interface ThemeManagerContextProps {
  themeState: ThemeName;
  currentTheme: DefaultTheme;
  handleToggleTheme(): void;
}

export function useTheme(): ThemeManagerContextProps {
  const context = useContext(ThemeManagerContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeManagerContext');
  }
  return context;
}
