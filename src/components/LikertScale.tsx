import React, { useState } from 'react';
import { styled } from '@mui/system';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Box, Typography } from '@mui/material';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-icon': {
    marginLeft: theme.spacing(2.5),
    marginRight: theme.spacing(2.5),
  },
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
  '.MuiSvgIcon-fontSizeMedium': {
    fontSize: '2.2rem',
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color='error' />,
    label: 'Discordo totalmente',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color='error' />,
    label: 'Discordo parcialmente',
  },
  3: {
    icon: <SentimentSatisfiedIcon color='warning' />,
    label: 'Não concordo, nem discordo',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color='success' />,
    label: 'Concordo parcialmente',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color='success' />,
    label: 'Concordo totalmente',
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return (
    <span {...other}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.5rem' }}>
        {customIcons[value].icon}
        <Typography variant='body2' color='textSecondary'>{customIcons[value].label}</Typography>
      </Box>
    </span>
  );
}

interface LikertScaleProps {
  selectedScale: number | null;
  onScaleSelect: (scale: number) => void;
}

const LikertScale: React.FC<LikertScaleProps> = ({ selectedScale, onScaleSelect }) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(selectedScale);

  const handleScaleSelect = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    setSelectedValue(newValue);
    onScaleSelect(newValue || 0); // If null, turns into 0
  };

  return (
    <Box sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', mt: 4 }}>
      <StyledRating
        name='likert-scale'
        value={selectedValue}
        onChange={handleScaleSelect}
        IconContainerComponent={IconContainer}
        highlightSelectedOnly
      />
    </Box>
  );
};

export default LikertScale;
