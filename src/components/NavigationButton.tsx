import React from 'react';
import { Box, Button as MuiButton } from '@mui/material';

interface NavigationButtonProps {
  text: string;
  onClick?: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ text, onClick }) => {
  return (
    <Box sx={{ textAlign: 'center', mt: 4, pb: 2 }}>
      <MuiButton className='action-button' variant='contained' color='secondary' onClick={onClick}>
        {`${text}`}
      </MuiButton>
    </Box>
  );
};

export default NavigationButton;
