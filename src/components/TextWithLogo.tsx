import React from 'react';
import { Container, Typography } from '@mui/material';
import Logo from './Logo';
import NavigationButton from './NavigationButton';
import '../assets/styles/logo.css';

interface TextWithLogoProps {
    title: string;
    text: string;
    handleButton: () => void;
}

const TextWithLogo: React.FC<TextWithLogoProps> = ({ title, text, handleButton }) => {

    return (
        <Container sx={{
            flexGrow: '1', display: 'flex', gap: '2rem', textAlign: 'center',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
        }}>
            <Logo className='large-logo' />
            <Typography variant='h4' fontFamily='Comfortaa' fontWeight='700' component='div' >
                <span style={{ color: '#430F7E' }}>&gt;</span>
                <span style={{ color: '#FE7E15' }}>_</span>
                &nbsp; {`${title}`}
            </Typography>
            <Typography variant='body1' color='primary.light'>
                {`${text}`}
            </Typography>
            <NavigationButton text={'Começar'} onClick={handleButton} />
        </Container>
    );
};

export default TextWithLogo;
