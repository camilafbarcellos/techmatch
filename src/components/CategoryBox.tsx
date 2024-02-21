import { Box, Typography } from '@mui/material';
import SecondaryCircleProgress from './SecondaryCircleProgress';

interface CategoryBoxProps {
    name: string;
    percentage: number;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ name, percentage }) => {
    return (
      <Box display='flex' alignContent='center'>
        <SecondaryCircleProgress value={percentage} text={`${percentage}%`} />
        <Box ml={2}>
          <Typography variant='h6' fontWeight='600'>
            {name}
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            Aqui vai a descrição da categoria {name}.
          </Typography>
        </Box>
      </Box>
    );
  };

export default CategoryBox;
