import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position='static' sx={{ backgroundColor: 'transparent', boxShadow: 'none', mt: -0.5 }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box component={Link} to='/' sx={{ alignItems: 'center' }}>
          <Logo className='header-logo' />
        </Box>
        <Typography variant='h4' color='secondary' fontFamily='Comfortaa' fontWeight='700'>
          <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>tech</Link>
        </Typography>
        <Typography variant='h4' color='info.main' fontFamily='Comfortaa' fontWeight='700'>
          <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>match</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Header);