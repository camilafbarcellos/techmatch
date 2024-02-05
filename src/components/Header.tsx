import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import Logo from './Logo';
import '../assets/styles/logo.css';

interface HeaderProps {
  showLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showLogo = false }) => {
  return (
    <AppBar position='static' sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {showLogo && (
          <Box component='span' sx={{ alignItems: 'center' }}>
            <Logo className='header-logo' />
          </Box>
        )}
        <Typography variant='h4' color='secondary' fontFamily='Comfortaa' fontWeight='700'>
          tech
        </Typography>
        <Typography variant='h4' color='info.main' fontFamily='Comfortaa' fontWeight='700'>
          match
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;