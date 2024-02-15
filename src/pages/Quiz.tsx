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

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedScale, setSelectedScale] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [scaleWarning, setScaleWarning] = useState<boolean>(false);

  // Function to fetch questions data from the API and handle API errors
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axiosRequest({ endpoint: 'questions', method: 'GET' });
      return data; // Returns the fetched data
    } catch (error) {
      // TO-DO: Handle the error appropriately
      alert('An error occurred while fetching the questions.'); // Alert the user about the error
      return []; // Return an empty array in case of error
    }
  }, []);

  // Memoized value to store the fetched questions data
  const memoQuestions = useMemo(() => {
    return fetchData(); // Returns the result of the fetchData function
  }, [fetchData]); // Dependency array to ensure this memoization runs when fetchData changes

  // Effect to update the questions state and loading status when memoQuestions changes
  useEffect(() => {
    memoQuestions.then((data: Question[]) => {
      // Checks if there's data available (in case of error, data would be an empty array)
      if (data.length > 0) {
        setQuestions(data); // Update the questions state with the fetched data
        setLoading(false); // Set loading status to false after data is fetched
      }
    });
  }, [memoQuestions]); // Dependency array to run this effect when memoQuestions changes


  const handleScaleSelect = (scale: number) => {
    setSelectedScale(scale);
  };

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
      result: selectedScale as number,
    };
    setAnswers(updatedAnswers);

    // Skip to next question or finish the quiz
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedScale(null); // Reset scale for the next question
      setScaleWarning(false); // Hide warning message


    } else {
      // End of the quiz (link to results page)
      alert('QUIZ FINALIZADO!')
      console.log(filterAnswersByCategory(answers)); // Send the answers to the calculation module
    }
  }

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
            <LikertScale onChange={handleScaleSelect} selectedScale={selectedScale} />

            <Typography variant='body2' color='primary.light' sx={{ textAlign: 'center', width: '75%' }}>
              Responda de acordo com o seu grau de concordância com o que foi exposto. Lembre-se de ser sincero para um melhor resultado. <br />
              <strong>Atenção: </strong> não é possível  retornar às respostas anteriores!
            </Typography>
            {scaleWarning && (
              <Alert severity='error'>Selecione uma alternativa antes de prosseguir!</Alert>
            )}
            <NextButton onClick={handleNextClick} isLastQuestion={currentQuestionIndex === questions.length - 1} />
          </>
        )}
      </Box>
      <Footer />
    </Container>
  );
};

export default Quiz;
