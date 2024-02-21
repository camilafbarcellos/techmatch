import { Box } from '@mui/material';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface MainCircleProgressProps {
    value: number;
    text: string;
}

const MainCircleProgress: React.FC<MainCircleProgressProps> = ({ value, text }) => {
    return (
        <Box width='8rem' height='8rem'>
            <CircularProgressbar
                value={value}
                text={text}
                styles={{
                    path: {
                        stroke: '#430F7E'
                    },
                    trail: {
                        stroke: '#d9cfe5'
                    },
                    text: {
                        fill: '#1F2024',
                        fontFamily: ['Poppins', 'Roboto', 'sans-serif', 'Arial'].join(','),
                        fontWeight: '600'
                    },
                }}
            />
        </Box>
    );
};

export default React.memo(MainCircleProgress);