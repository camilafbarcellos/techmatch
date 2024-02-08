import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Header from '../components/Header';
import QuestionCard from '../components/QuestionCard';
import PaginationDots from '../components/PaginationDots';
import LikertScale from '../components/LikertScale';
import NextButton from '../components/NextButton';
import Footer from '../components/Footer';
import { axiosRequest } from '../utils/axiosRequest';
import LoadingCircle from '../components/LoadingCircle';
import { Question } from '../types/question';

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedScale, setSelectedScale] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const { data } = await axiosRequest({ endpoint: 'questions', method: 'GET' });
      setQuestions(data);
      setLoading(false); // Set loading to false after fetching data
    } catch (error) {
      // TO-DO: deal with the error
      alert('Ocorreu um erro ao buscar as perguntas.');
      setLoading(false); // Set loading to false if there's an error
    }
  }

  const handleNextClick = () => {
    // Skip to next question or finish the quiz
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedScale(null); // Reset scale for the next question
    } else {
      // End of the quiz (link to results page)
      alert('QUIZ FINALIZADO!')
    }
  }

  useEffect(() => {
    // TO-DO: don't fetch data all the time, first check if it is already fetched
    fetchData();

  }, [selectedScale]);

  return (
    <Container
      maxWidth='md'
      sx={{
        display: 'flex', flexDirection: 'column',
        minHeight: '100vh', px: { xs: 2, md: 4 },
      }}
    >
      <Header showLogo={true} />
      <Box
        sx={{
          my: 'auto', flexGrow: 1, py: { xs: 2, md: 4 },
          display: 'flex', flexDirection: 'column', gap: '2rem',
          justifyContent: 'center', alignItems: 'center',
        }}
      >
        {loading ? ( // Show loading spinner while fetching data
          <LoadingCircle />
        ) : (
          <>
            <PaginationDots totalDots={questions.length} currentDot={currentQuestionIndex} />
            <QuestionCard question={questions[currentQuestionIndex].question} />
            <LikertScale selectedScale={selectedScale} onScaleSelect={(scale) => setSelectedScale(scale)} />

            <Typography variant='body2' color='primary.light' sx={{ textAlign: 'center', width: '75%' }}>
              Responda de acordo com o seu grau de concordância com o que foi exposto. Lembre-se de ser sincero para um melhor resultado. <br />
              <strong>Atenção: </strong> não é possível  retornar às respostas anteriores!
            </Typography>
            <NextButton onClick={handleNextClick} isLastQuestion={currentQuestionIndex === questions.length - 1} />
          </>
        )}
      </Box>
      <Footer />
    </Container>
  );
};

export default Quiz;
