import { Box, Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TextField from '../components//TextField';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {

  const title: string = 'Você dá match com a Computação?';
  const text: string = 'Será que a TI é a sua praia? A falta de afinidade com a área pode até mesmo levar à evasão! Faça o teste e descubra se você tem o perfil ideal para seguir essa carreira!';

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
      <Box
        sx={{
          my: 'auto', flexGrow: 1,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center'
        }}
      >
        <TextField title={title} text={text} handleButton={handleButton} />
      </Box>
      <Footer />
    </Container>
  );
};

export default Home;