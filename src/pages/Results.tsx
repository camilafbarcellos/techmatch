import { Box, Container, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { createRef, useEffect, useState } from 'react';
import { Answer } from '../types/answer';
import { calculateTotalScore, calculateCategoryPercentage, } from '../utils/matchingAlgorithm';
import ImageTextButton from '../components/ImageTextButton';
import MainCircleProgress from '../components/MainCircleProgress';
import CategoryBox from '../components/CategoryBox';
import ActionButton from '../components/ActionButton';
import useDocumentTitle from '../utils/useDocumentTitle';
import { useScreenshot, createFileName } from 'use-react-screenshot';

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

  const title: string = 'Eai, deu match?';
  const text: string = 'Este quiz aborda diferentes áreas da TI para identificar não só a sua afinidade com a Computação, mas também com as suas subáreas. Confira o seu resultado e conta para gente!';

  const handleButton = () => {
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
  const [image, takeScreenshot] = useScreenshot({
    type: 'image/jpeg',
    quality: 1.0
  });

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
        display: 'flex', flexDirection: 'column',
        minHeight: '100vh', px: { xs: 2, md: 4 },
      }}
    >
      <Header />
      <Box
        sx={{
          my: 'auto', flexGrow: 1, py: { xs: 2, md: 4 },
          display: 'flex', flexDirection: 'column', gap: '2rem',
          justifyContent: 'center', alignItems: 'center',
        }} ref={ref}>
        <ImageTextButton title={title} text={text} />

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
          pb: { xs: 2, md: 4 },
          display: 'flex', flexDirection: 'row', gap: '1rem',
          justifyContent: 'center', alignItems: 'center',
        }}>
        <ActionButton text='Salvar resultado' onClick={downloadScreenshot} />
        <ActionButton text='Responder à pesquisa' onClick={handleButton} />
      </Box>
      <Footer />
    </Container>
  );
}

export default Results;