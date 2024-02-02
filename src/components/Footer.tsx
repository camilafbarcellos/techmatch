import React from 'react';
import { Box, Link } from '@mui/material';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 4, pb: 2 }}>
      <Link className='footer-link' href='https://br.linkedin.com/in/camilafbarcellos'>
        <div className='footer-text'>
          &copy; {new Date().getFullYear()} Camila Barcellos
        </div>
      </Link>
    </Box>
  );
};

export default Footer;
