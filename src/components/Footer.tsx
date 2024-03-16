import React from 'react';
import { Box, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component='footer' sx={{ textAlign: 'center', mb: -0.5, px: '24px' }}>
      <Link href='https://br.linkedin.com/in/camilafbarcellos' variant='caption' color='primary.light' underline='none' target='_blank'>
        &copy; {new Date().getFullYear()} Camila Barcellos
      </Link>
    </Box>
  );
};

export default React.memo(Footer);
