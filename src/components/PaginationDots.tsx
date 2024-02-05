import React from 'react';
import { Box, styled } from '@mui/material';

interface PaginationDotsProps {
    totalDots: number;
    currentDot: number;
}

const Dot = styled('div')(({ theme }) => ({
    width: theme.spacing(1),
    height: theme.spacing(1),
    borderRadius: '50%',
    backgroundColor: theme.palette.info.main,
    marginRight: theme.spacing(1),
}));

const PaginationDots: React.FC<PaginationDotsProps> = ({ totalDots, currentDot }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            {[...Array(totalDots)].map((_, index) => (
                <Dot key={index} style={{ opacity: currentDot === index ? 1 : 0.5 }} />
            ))}
        </Box>
    );
};

export default PaginationDots;
