import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Logo from './Logo';
import Button from './Button';
import '../assets/styles/logo.css';

interface TextFieldProps {
    logo?: boolean;
    title?: string;
    text: string;
    handleButton: () => void;
}

const TextWithField: React.FC<TextFieldProps> = ({ logo = true, title, text, handleButton }) => {

    return (
        <Container sx={{
            flexGrow: '1', display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                {logo && (
                    <Box component='span' sx={{ alignItems: 'center', width: '3.2rem', height: '3rem' }}>
                        <Logo className='large-logo' />
                    </Box>
                )}
                {title && (
                    <Typography variant='h4' fontFamily='Comfortaa' fontWeight='700' component='div' sx={{ mt: 2 }}>
                        <span style={{ color: '#430F7E' }}>&gt;</span>
                        <span style={{ color: '#FE7E15' }}>_</span>
                        &nbsp; {`${title}`}
                    </Typography>
                )}
                <Typography variant='body1' color='primary.light' sx={{ mt: 2 }}>
                    {`${text}`}
                </Typography>
                <Button text={'Começar'} onClick={handleButton} />
            </Box>
        </Container>
    );
};

export default TextWithField;
