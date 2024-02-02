import { Box, Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingContainer from '../components/LandingContainer';

const Home: React.FC = () => {

  return (
    <Container maxWidth='md' sx={{ px: { xs: 2, md: 4 } }}>
      <Box sx={{ my: 4 }}>
        <Header />
        <LandingContainer/>
        <Footer />
      </Box>
    </Container>
  );
};

export default Home;