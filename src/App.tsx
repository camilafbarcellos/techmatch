import * as React from 'react';
import Router from './router/Router';
import { ThemeProvider } from '@mui/material';
import theme from './util/MuiTheme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;