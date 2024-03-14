import { createRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScreenshot, createFileName } from 'use-react-screenshot';
import { Box, Container, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainCircleProgress from '../components/MainCircleProgress';
import CategoryBox from '../components/CategoryBox';
import ActionButton from '../components/ActionButton';
import Logo from '../components/Logo';
import { Answer } from '../types/answer';
import useDocumentTitle from '../utils/useDocumentTitle';
import { calculateTotalScore, calculateCategoryPercentage, } from '../utils/matchingAlgorithm';

interface ResultsProps {
  pageTitle: string;
}

const Results: React.FC<ResultsProps> = ({ pageTitle }) => {

  useDocumentTitle(`TechMatch | ${pageTitle}`);
  const ref = createRef();

  const [answers, setAnswers] = useState<Answer[]>([]);
  const [totalScore, setTotalScore] = useState<number>(0);

  const categoryPercentage = (category: string) =>
    Math.round(calculateCategoryPercentage(answers, category));

  const navigate = useNavigate();

  const handleFormClick = () => {
    // Redirect to Google Forms 
    window.open(process.env.REACT_APP_FORM_URL as string, '_blank');
  };

  // Effect that recovers the user answers on sessionStorage
  useEffect(() => {
    const storedAnswers = sessionStorage.getItem('userAnswers');
    // In case of any answers, redirect to home page
    if (!storedAnswers) {
      navigate('/');
      return;
    }
    const parsedAnswers = JSON.parse(storedAnswers) as Answer[];
    setAnswers(parsedAnswers);

    // Calculate the scores
    const totalScore = calculateTotalScore(parsedAnswers);
    setTotalScore(Math.round(totalScore));
  }, [navigate]);

  // Screenshot related
  const [image, takeScreenshot] = useScreenshot();

  // Download screenshot
  const download = (image: any, { name = 'techmatch-results', extension = 'jpg' } = {}) => {
    const a = document.createElement('a');
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenshot(ref.current).then(download);

  return (
    <Container
      maxWidth='md'
      sx={{
        display: 'flex', flexDirection: 'column', gap: '1rem',
        minHeight: '100vh', px: { xs: 2, md: 4 }, alignItems: 'center'
      }}
    >
      <Header />

      <Box sx={{
        display: 'flex', alignItems: 'center', gap: '2rem', pt: '1rem',
        justifyContent: 'center', flexDirection: 'column'
      }} ref={ref}>


        <Box sx={{
          display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'center',
          justifyContent: 'center', flexDirection: 'column'
        }}>
          <Logo className='large-logo' priority={true} />
          <Typography variant='h3' fontFamily='Comfortaa' fontWeight='700' component='div' >
            <span style={{ color: '#430F7E' }}>&gt;</span>
            <span style={{ color: '#FE7E15' }}>_&nbsp;</span>
            Eai, deu match?
          </Typography>
          <Typography variant='subtitle1' color='primary.light' width='80%'>
            Este quiz aborda diferentes áreas da TI para identificar não só a sua afinidade
            com a Computação, mas também com as suas subáreas.
            Confira o seu resultado e conta para gente!
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex', alignItems: 'center', gap: '1rem', my: 'auto',
          justifyContent: 'center', flexDirection: 'column',
        }}>
          <MainCircleProgress value={totalScore} text={`${totalScore}%`} />
          <Typography variant='h4' fontWeight='600'>
            TI
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex', alignItems: 'center', gap: '1rem', alignContent: 'center',
          justifyContent: 'center', flexDirection: 'column',
        }}>
          <CategoryBox name='Desenvolvimento' percentage={categoryPercentage('Desenvolvimento')} />
          <CategoryBox name='Infraestrutura de TI' percentage={categoryPercentage('Infraestrutura de TI')} />
          <CategoryBox name='Ciência de Dados' percentage={categoryPercentage('Ciência de Dados')} />
          <CategoryBox name='Cibersegurança' percentage={categoryPercentage('Cibersegurança')} />
        </Box>
      </Box>

      <Box
          sx={{
            display: 'flex', flexDirection: 'row', gap: '1rem',
            justifyContent: 'center', alignItems: 'center', pb: '1rem'
          }}>
          <ActionButton text='Salvar resultado' onClick={downloadScreenshot} />
          <ActionButton text='Responder à pesquisa' onClick={handleFormClick} />
        </Box>

      <Footer />
    </Container>
  );
}

export default Results;