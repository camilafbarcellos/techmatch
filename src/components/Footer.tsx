import React from 'react';
import { Box, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', mb: -0.5 }}>
      <Link href='https://br.linkedin.com/in/camilafbarcellos' variant='caption' color='primary.light' underline='none' target='_blank'>
        &copy; {new Date().getFullYear()} Camila Barcellos
      </Link>
    </Box>
  );
};

export default React.memo(Footer);
