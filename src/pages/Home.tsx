import { Box, Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingContainer from '../components/LandingContainer';

const Home: React.FC = () => {

  return (
    <Container
      maxWidth='md'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        px: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          my: 'auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Header />
        <LandingContainer />
        <Footer />
      </Box>
    </Container>
  );
};

export default Home;