import React from 'react';
import { Box, Button } from '@mui/material';

interface NextButtonProps {
  onClick: () => void;
  isLastQuestion: boolean;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick, isLastQuestion }) => {
  return (
    <Box sx={{ textAlign: 'center', mt: 4, pb: 2 }}>
      <Button variant='contained' color='secondary' onClick={onClick}>
        {isLastQuestion ? 'Finalizar' : 'Avançar'}
      </Button>
    </Box>
  );
};

export default NextButton;
