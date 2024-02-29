import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Alert, Box, Container, Typography } from '@mui/material';
import Header from '../components/Header';
import QuestionCard from '../components/QuestionCard';
import PaginationDots from '../components/PaginationDots';
import LikertScale from '../components/LikertScale';
import NextButton from '../components/NextButton';
import Footer from '../components/Footer';
import LoadingCircle from '../components/LoadingCircle';
import { Answer } from '../types/answer';
import { shuffleArray } from '../utils/shuffleArray';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import useDocumentTitle from '../utils/useDocumentTitle';

interface QuizProps {
  pageTitle: string;
}

const Quiz: React.FC<QuizProps> = ({ pageTitle }) => {

  useDocumentTitle(`TechMatch | ${pageTitle}`);

  const { questions } = useContext(AppContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedScale, setSelectedScale] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [scaleWarning, setScaleWarning] = useState<boolean>(false);
  const navigate = useNavigate();

  // Effect to update the loading status
  useEffect(() => {
    setLoading(questions.length === 0);
  }, [questions]);

  // Memoized value to store the shuffled array of questions
  const shuffledQuestions = useMemo(() => {
    return shuffleArray(questions);
  }, []);

  const handleScaleSelect = (scale: number) => {
    setSelectedScale(scale);
  };

  // Finish the quiz when all the questions are answered
  useEffect(() => {
    if (answers.length === questions.length && !loading) {
      // End of the quiz links to results page with the answers on sessionStorage
      sessionStorage.setItem('userAnswers', JSON.stringify(answers));
      navigate('/results');
    }
  }, [answers, questions, loading, navigate]);

  const handleNextClick = () => {
    // If scale is not answered, display warning message and prevent advancing to the next question
    if (!selectedScale) {
      setScaleWarning(true);
      return;
    }

    // Add the answer to the array
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = {
      category: questions[currentQuestionIndex].category,
      result: selectedScale,
    };
    setAnswers(updatedAnswers);

    // Check if there's another question and then proceed
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  // Reset selected scale and hide warning when question changes
  useEffect(() => {
    setSelectedScale(null);
    setScaleWarning(false);
  }, [currentQuestionIndex]); // Only runs this effect when currentQuestionIndex changes


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
        }}
      >
        {loading ? ( // Show loading spinner while fetching data
          <LoadingCircle />
        ) : (
          <>
            <PaginationDots totalDots={shuffledQuestions.length} currentDot={currentQuestionIndex} />
            <QuestionCard question={questions[currentQuestionIndex].question} />
            <LikertScale onChange={handleScaleSelect} selectedScale={selectedScale} />

            {scaleWarning && (
              <Alert severity='error'>Selecione uma alternativa antes de prosseguir!</Alert>
            )}
            <Typography variant='body2' color='primary.light' sx={{ textAlign: 'center', width: '75%' }}>
              Responda de acordo com o seu grau de concordância com o que foi exposto. <br />
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
