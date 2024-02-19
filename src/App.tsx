import * as React from 'react';
import Router from './router/Router';
import { ThemeProvider } from '@mui/material';
import theme from './utils/MuiTheme';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <SpeedInsights />
    </ThemeProvider>
  );
};

export default App;