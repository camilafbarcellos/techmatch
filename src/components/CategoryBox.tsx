import { Box, Typography } from '@mui/material';
import SecondaryCircleProgress from './SecondaryCircleProgress';

interface CategoryBoxProps {
    name: string;
    percentage: number;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ name, percentage }) => {
    return (
        <Box display='flex' alignContent='center' justifyContent='center' width='80%'>
            <SecondaryCircleProgress value={percentage} text={`${percentage}%`} />
            <Box ml={2} width='75%'>
                <Typography variant='h6' fontWeight='600'>
                    {name}
                </Typography>
                <Typography variant='body2' color='primary.light' textAlign='justify'>
                    {
                        name === 'Desenvolvimento' ? 'Programação voltada à criação de sites, aplicativos e jogos com diferentes tecnologias.' :
                            name === 'Infraestrutura de TI' ? 'Configuração e manejo de redes de computadores, bancos de dados, computação em nuvem e componentes de hardware.' :
                                name === 'Ciência de Dados' ? 'Coleta, processamento e análise de dados e padrões para fornecer insights empresariais e alimentar modelos de Inteligência Artificial.' :
                                    'Proteção de dados, sistemas e redes contra diversas ameaças cibernéticas para garantir a sua segurança e confiabilidade.'
                    }
                </Typography>
            </Box>
        </Box>
    );
};

export default CategoryBox;
