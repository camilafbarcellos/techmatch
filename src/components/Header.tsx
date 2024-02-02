import React from 'react';
import { AppBar, Toolbar, Box, Container } from '@mui/material';
import Logo from './Logo';
import '../styles/Header.css';

interface HeaderProps {
  showLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showLogo = false }) => {
  return (
    <AppBar position='static' sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Container className='header-container'>
        <Toolbar className='header-toolbar'>
          {showLogo && (
            <Box className='header-logo-box' component='span'>
              <Logo className='header-logo' />
            </Box>
          )}
          <div className='header-title'>
            <span className='purple-text'>tech</span>
            <span className='orange-text'>match</span>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;