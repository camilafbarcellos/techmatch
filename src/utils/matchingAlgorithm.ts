import { Answer } from '../types/answer';

// Função para calcular a pontuação total somando as pontuações de todas as categorias
export const calculateTotalScore = (answers: Answer[]): number => {
    return answers.reduce((totalScore, answer) => totalScore + answer.result, 0);
};

// Função para calcular a pontuação geral da TI, excluindo a categoria 'Desafios da TI'
export const calculateGeneralScore = (answers: Answer[]): Answer[] => {
    return answers.filter(answer => answer.category !== 'Desafios');
};

// Função para calcular a porcentagem da pontuação de uma categoria em relação à afinidade total com a TI
export const calculateCategoryPercentage = (answers: Answer[], category: string): number => {
    const categoryAnswers = answers.filter(answer => answer.category === category);
    const categoryScore = calculateTotalScore(categoryAnswers);
    const totalScore = calculateTotalScore(answers);
    return (categoryScore / totalScore) * 100;
};
