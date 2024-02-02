import * as React from 'react';
import './App.css';
import Router from './router/Router';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1F2024',
      light: '#71727A'
    },
    secondary: {
      main: '#430F7E',
      dark: '#683e97',
      light: '#d9cfe5'
    },
    info: {
      main: '#FE7E15',
      light: '#fee5d0'
    }
  },
  typography: {
    fontFamily: ['Poppins', 'Roboto', 'sans-serif', 'Arial'].join(',')
  }
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;