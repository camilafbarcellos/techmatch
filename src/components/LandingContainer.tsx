import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Logo from './Logo';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import '../styles/Container.css';

const LandingContainer: React.FC = () => {
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        navigate('/quiz');
    };

    return (
        <Container className='main-component-container '>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Box component='span' sx={{ alignItems: 'center', width: '3.2rem', height: '3rem' }}>
                    <Logo className='container-logo' />
                </Box>
                <Typography variant='h4' fontFamily='Comfortaa' fontWeight='700' component='div' sx={{ mt: 2 }}>
                    <span style={{ color: '#430F7E' }}>&gt;</span>
                    <span style={{ color: '#FE7E15' }}>_</span>
                    &nbsp; Você dá match com a Computação?
                </Typography>
                <Typography variant='body1' color='primary.light' sx={{ mt: 2 }}>
                    Será que a TI é a sua praia? A falta de afinidade com a área pode até mesmo levar à evasão! Faça o teste e
                    descubra se você tem o perfil ideal para seguir essa carreira!
                </Typography>
                <Button text={'Começar'} onClick={handleStartQuiz} />
            </Box>
        </Container>
    );
};

export default LandingContainer;
