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
        },
    },
    shape: {
        borderRadius: 12,
    }
});

export default responsiveFontSizes(theme);