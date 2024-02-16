import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';
import QuoteIcon from '@mui/icons-material/FormatQuoteRounded';

interface QuestionCardProps {
    question: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
    return (
        <Box sx={{ textAlign: 'center', width: '75%' }}>
            <Card variant='outlined'>
                <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                    <QuoteIcon color='disabled' sx={{ justifyContent: 'flex-start', mr: '0.5rem' }} />
                    <Typography variant='h6' color='primary'>{question}</Typography>
                </CardContent>
            </Card>
        </Box>

    );
};

export default QuestionCard;
