import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import { ThemeManager } from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <>
      <ThemeManager>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeManager>
    </>
  );
};

export default App;
