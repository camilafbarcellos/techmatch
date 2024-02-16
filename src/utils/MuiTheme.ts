import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1F2024',
            light: '#71727A'
        },
        secondary: {
            main: '#430F7E',
            dark: '#683e97',
            light: '#d9cfe5'
        },
        info: {
            main: '#FE7E15',
            light: '#FEBE8A'
        },
        background: {
            paper: '#F8F9FA'
        },
    },
    typography: {
        fontFamily: ['Poppins', 'Roboto', 'sans-serif', 'Arial'].join(','),
        button: {
            textTransform: 'none',
            fontWeight: 500,
            '@media (max-width:600px)': {
                fontSize: '0.75rem',
            },
            '@media (max-width:400px)': {
                fontSize: '0.5rem',
            },
        },
        body2: {
            '@media (max-width:600px)': {
                fontSize: '0.75rem',
            },
            '@media (max-width:400px)': {
                fontSize: '0.5rem',
            },
        },
        h6: {
            '@media (max-width:600px)': {
                fontSize: '1rem',
            },
            '@media (max-width:400px)': {
                fontSize: '0.875rem',
            },
        },
        caption: {
            '@media (max-width:600px)': {
                fontSize: '0.65rem',
            },
            '@media (max-width:400px)': {
                fontSize: '0.5rem',
            },
        },
    },
    shape: {
        borderRadius: 12,
    }
});

export default responsiveFontSizes(theme);