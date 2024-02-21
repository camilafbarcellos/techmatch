import { Box, Container, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Answer } from '../types/answer';
import {
  calculateTotalScore,
  calculateGeneralScore,
  calculateCategoryPercentage,
} from '../utils/matchingAlgorithm';
import TextWithLogo from '../components/TextWithLogo';
import SecondaryCircleProgress from '../components/SecondaryCircleProgress';
import MainCircleProgress from '../components/MainCircleProgress';

const Results: React.FC = () => {

  const [totalScore, setTotalScore] = useState<number>(0);
  const [generalAnswers, setGeneralAnswers] = useState<Answer[]>([]);
  const categoryPercentage = (category: string) =>
    Math.round(calculateCategoryPercentage(generalAnswers, category));
  const navigate = useNavigate();

  const title: string = 'Eai, deu match?';
  const text: string = 'Este quiz aborda diferentes áreas da TI para identificar não só a sua afinidade com a Computação, mas também com as suas subáreas. Confira o seu resultado e conta para gente!';
  const handleButton = () => {
    // Redirect to Google Forms 
  };

  // Effect that recovers the user answers on sessionStorage
  useEffect(() => {
    const storedAnswers = sessionStorage.getItem('userAnswers');
    // In case of any answers, redirect to home page
    if (!storedAnswers) {
      navigate('/');
    }
    const parsedAnswers = JSON.parse(storedAnswers!) as Answer[];

    // Calculate the scores
    const totalScore = calculateTotalScore(parsedAnswers);
    setTotalScore(totalScore);
    const generalAnswers = calculateGeneralScore(parsedAnswers);
    setGeneralAnswers(generalAnswers);
  }, [navigate]);

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
        <TextWithLogo title={title} text={text} buttonAction='Responder à pesquisa' handleButton={handleButton} />
      </Box>

      <Box sx={{
        display: 'flex', alignItems: 'center', gap: '1rem',
        justifyContent: 'center', flexDirection: 'column',
      }} my={4}>
        <MainCircleProgress value={totalScore} text={`${totalScore}%`} />
        <Typography variant='h4' fontWeight='600'>
          TI
        </Typography>

        <Box display='flex' justifyContent='space-around'>
          <Box textAlign='center'>
            <Typography variant='h6' fontWeight='600'>
              Desenvolvimento
            </Typography>
            <SecondaryCircleProgress value={categoryPercentage('Desenvolvimento')} text={`${categoryPercentage('Desenvolvimento')}%`} />
          </Box>
          <Box textAlign='center'>
            <Typography variant='h6' fontWeight='600'>
              Infraestrutura de TI
            </Typography>
            <SecondaryCircleProgress value={categoryPercentage('Infraestrutura de TI')} text={`${categoryPercentage('Infraestrutura de TI')}%`} />
          </Box>
          <Box textAlign='center'>
            <Typography variant='h6' fontWeight='600'>
              Ciência de Dados
            </Typography>
            <SecondaryCircleProgress value={categoryPercentage('Ciência de Dados')} text={`${categoryPercentage('Ciência de Dados')}%`} />
          </Box>
          <Box textAlign='center'>
            <Typography variant='h6' fontWeight='600'>
              Cibersegurança
            </Typography>
            <SecondaryCircleProgress value={categoryPercentage('Cibersegurança')} text={`${categoryPercentage('Cibersegurança')}%`} />
          </Box>
        </Box>
      </Box>

      <Footer />
    </Container>
  );
}

export default Results;