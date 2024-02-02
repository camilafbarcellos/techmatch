import React from 'react';
import { Box, Button as MuiButton } from '@mui/material';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <Box sx={{ textAlign: 'center', mt: 4, pb: 2 }}>
      <MuiButton className='action-button' variant='contained' color='secondary' onClick={onClick}>
        {`${text}`}
      </MuiButton>
    </Box>
  );
};

export default Button;
