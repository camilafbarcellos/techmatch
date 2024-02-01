import * as React from 'react';
import { Container, Box } from '@mui/material';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Container maxWidth='md' sx={{ px: { xs: 2, md: 4 } }}>
      <Box sx={{ my: 4 }}>
        <Home />
      </Box>
    </Container>
  );
};

export default App;