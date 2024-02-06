import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';
import QuoteIcon from '@mui/icons-material/FormatQuoteRounded';

interface QuestionCardProps {
    question: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
    return (
        <Box sx={{ textAlign: 'center', width: '75%', mt: 4 }}>
            <Card variant='outlined'>
                <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', gap: '1rem' }}>
                    <QuoteIcon color='primary' sx={{justifyContent: 'flex-start'}} />
                    <Typography variant='h6' color='primary'>{question}</Typography>
                </CardContent>
            </Card>
        </Box>

    );
};

export default QuestionCard;