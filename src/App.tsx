import React, { useEffect, useMemo, useState } from 'react';
import Router from './router/Router';
import { ThemeProvider } from '@mui/material';
import theme from './utils/MuiTheme';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Question } from './types/question';
import { fetchData } from './utils/fetchData';
import { AppContext } from './context/AppContext';

const App: React.FC = () => {

  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    fetchData().then((data: Question[]) => {
      setQuestions(data);
    });
  }, []);

  // Memoized value to store the fetched questions
  const value = useMemo(() => ({ questions }), [questions]);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={value}>
        <Router />
      </AppContext.Provider>
      <SpeedInsights />
    </ThemeProvider>
  );
};

export default App;