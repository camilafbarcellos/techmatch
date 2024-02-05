import React from 'react';
import { Box, Button } from '@mui/material';

interface NavigationButtonProps {
  text: string;
  onClick?: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ text, onClick }) => {
  return (
    <Box sx={{ textAlign: 'center', mt: 4, pb: 2 }}>
      <Button variant='contained' color='secondary' onClick={onClick}>
        {`${text}`}
      </Button>
    </Box>
  );
};

export default NavigationButton;
