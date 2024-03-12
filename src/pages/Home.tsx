import { Box, Container, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import useDocumentTitle from '../utils/useDocumentTitle';
import ActionButton from '../components/ActionButton';
import LaptopImage from '../components/LaptopImage';

interface HomeProps {
  pageTitle: string;
}

const Home: React.FC<HomeProps> = ({ pageTitle }) => {

  useDocumentTitle(`TechMatch | ${pageTitle}`);

  const navigate = useNavigate();
  const handleButton = () => {
    navigate('/quiz');
  };

  return (
    <Container
      maxWidth='md'
      sx={{
        display: 'flex', flexDirection: 'column',
        minHeight: '100vh', px: { xs: 2, md: 4 },
      }}
    >
      <Header />

      <Box sx={{
        flexGrow: '1', display: 'flex', gap: '2rem', textAlign: 'center',
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
      }}>
        <LaptopImage />
        <Typography variant='h3' fontFamily='Comfortaa' fontWeight='700' component='div' >
          <span style={{ color: '#430F7E' }}>&gt;</span>
          <span style={{ color: '#FE7E15' }}>_&nbsp;</span>
          Você dá match com a Computação?
        </Typography>
        <Typography variant='subtitle1' color='primary.light' width='80%'>
          Será que a TI é a sua praia?
          A falta de afinidade com a área pode até mesmo levar à evasão!
          Faça o teste e descubra se você tem o perfil ideal para embarcar nessa carreira!
        </Typography>
        <ActionButton text='Começar' onClick={handleButton} />
      </Box>

      <Footer />
    </Container>
  );
};

export default Home;