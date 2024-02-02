import React from 'react';
import { Box, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 4, pb: 2 }}>
      <Link href='https://br.linkedin.com/in/camilafbarcellos' variant='body2' color='primary.light' underline='none' target='_blank'>
        &copy; {new Date().getFullYear()} Camila Barcellos
      </Link>
    </Box>
  );
};

export default Footer;
