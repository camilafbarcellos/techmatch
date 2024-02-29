import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Router from './router/Router';
import { ThemeProvider } from '@mui/material';
import theme from './utils/MuiTheme';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Question } from './types/question';
import { AppContext } from './context/AppContext';
import { api } from './utils/api';

const App: React.FC = () => {

  const [questions, setQuestions] = useState<Question[]>([]);

  const fetchData = useCallback(async () => {
    try {
      await api.get('/questions')
        .then(response => {
          setQuestions(response.data);
        });
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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