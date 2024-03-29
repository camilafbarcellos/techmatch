import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const LikertItem = styled(Box)({
    textAlign: 'center',
    '& button': {
        borderRadius: '50%', minWidth: 'auto',
        width: '2.25rem',
        height: '2.25rem',
    }
});

interface LikertScaleProps {
    onChange: (value: number) => void;
    selectedScale: number | null;
}

const LikertScale: React.FC<LikertScaleProps> = ({ onChange, selectedScale }) => {
    const [selectedValue, setSelectedValue] = useState<number | null>(selectedScale);
    const theme = useTheme();

    const handleScaleSelect = (newValue: number | null) => {
        onChange(newValue || 0); // If null, turns into 0
        setSelectedValue(newValue);
    };

    useEffect(() => {
        // Update the selected value when the selectedScale prop changes
        setSelectedValue(selectedScale);
    }, [selectedScale]);

    return (
        <Box display='flex' justifyContent='center' width='75%'>
            {[1, 2, 3, 4, 5].map((value) => (
                <LikertItem key={value}>
                    <Button
                        variant='contained'
                        className={selectedValue === value ? 'likert-button-selected' : 'likert-button'}
                        onClick={() => handleScaleSelect(value)}
                        sx={{
                            backgroundColor: selectedValue === value ? theme.palette.info.main : theme.palette.info.light,
                            '&:hover': {
                                backgroundColor: theme.palette.info.main,
                            },
                        }}
                    >
                        {
                            value === 1 ? <SentimentVeryDissatisfiedIcon color='disabled' /> :
                                value === 2 ? <SentimentDissatisfiedIcon color='disabled' /> :
                                    value === 3 ? <SentimentSatisfiedIcon color='disabled' /> :
                                        value === 4 ? <SentimentSatisfiedAltIcon color='disabled' /> :
                                            <SentimentVerySatisfiedIcon color='disabled' />
                        }
                    </Button>
                    <Typography variant='body2' marginTop='1rem'>
                        {
                            value === 1 ? 'Discordo totalmente' :
                                value === 2 ? 'Discordo em partes' :
                                    value === 3 ? 'Não concordo, nem discordo' :
                                        value === 4 ? 'Concordo em partes' :
                                            'Concordo totalmente'
                        }
                    </Typography>
                </LikertItem>
            ))}
        </Box>
    );
};

export default LikertScale;
