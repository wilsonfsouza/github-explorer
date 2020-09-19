import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);
  // Could use useCallback
  const handleToggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
