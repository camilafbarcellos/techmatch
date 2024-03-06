import React from 'react';
import { Box, Button } from '@mui/material';

interface ActionButtonProps {
  text: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, onClick }) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Button variant='contained' color='secondary' onClick={onClick}>
        {`${text}`}
      </Button>
    </Box>
  );
};

export default ActionButton;
