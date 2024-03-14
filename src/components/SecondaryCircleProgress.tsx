import React from 'react';
import { Box } from '@mui/material';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface SecondaryCircleProgressProps {
    value: number;
    text: string;
}

const SecondaryCircleProgress: React.FC<SecondaryCircleProgressProps> = ({ value, text }) => {
    return (
        <Box width='6rem' height='6rem'>
            <CircularProgressbar
                value={value}
                text={text}
                styles={{
                    path: {
                        stroke: '#FE7E15'
                    },
                    trail: {
                        stroke: '#FEBE8A'
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

export default React.memo(SecondaryCircleProgress);