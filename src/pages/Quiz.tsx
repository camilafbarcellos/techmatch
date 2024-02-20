import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert, Box, Container, Typography } from '@mui/material';
import Header from '../components/Header';
import QuestionCard from '../components/QuestionCard';
import PaginationDots from '../components/PaginationDots';
import LikertScale from '../components/LikertScale';
import NextButton from '../components/NextButton';
import Footer from '../components/Footer';
import { axiosRequest } from '../utils/axiosRequest';
import LoadingCircle from '../components/LoadingCircle';
import { Question } from '../types/question';
import { Answer } from '../types/answer';
import { filterAnswersByCategory } from '../utils/filterAnswersByCategory';
import { shuffleArray } from '../utils/shuffleArray';
import { useNavigate } from 'react-router-dom';

const Quiz: React.FC = () => {

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedScale, setSelectedScale] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [scaleWarning, setScaleWarning] = useState<boolean>(false);
  const navigate = useNavigate();

  // Memoized function to fetch questions data from the API
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axiosRequest({ endpoint: 'questions', method: 'GET' });
      return data;
    } catch (error) {
      // TO-DO: Handle the error appropriately
      console.error('Error fetching questions:', error);
      return null;
    }
  }, []);

  // Memoized value to store the fetched data
  const memoFetchData = useMemo(() => {
    return fetchData();
  }, [fetchData]);

  // Memoized value to store the shuffled array of questions
  const shuffledQuestions = useMemo(() => {
    return shuffleArray(questions);
  }, [questions]);

  // Effect to update the questions state and loading status
  useEffect(() => {
    memoFetchData.then((data: Question[]) => {
      if (data) {
        setQuestions(data);
      }
    }).finally(() => {
      setLoading(false);
    });
  }, [memoFetchData]);

  const handleScaleSelect = (scale: number) => {
    setSelectedScale(scale);
  };

  // Finish the quiz when all the questions are answered
  useEffect(() => {
    if (answers.length === questions.length && !loading) {
      // End of the quiz links to results page with the answers on sessionStorage
      const answersByCategory = filterAnswersByCategory(answers);
      sessionStorage.setItem('userAnswers', JSON.stringify(answersByCategory));
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
