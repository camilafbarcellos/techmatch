import { Answer } from '../types/answer';

// Calculate the total score
export const calculateTotalScore = (answers: Answer[]): number => {
    // Calculates the maximum possible score based on the size of the array and the maximum value of an answer
    const maxPossibleScore = answers.length * 5;
    // Calculates the totalScore by adding up the results of all the answers
    const totalScore = answers.reduce((totalScore, answer) => totalScore + answer.result, 0);
    // Returns the score in percentage
    return (totalScore / maxPossibleScore) * 100;
};

// Calculate the category score
export const calculateCategoryPercentage = (answers: Answer[], category: string): number => {
    // Filter out questions that don't belong to this category
    const categoryAnswers = answers.filter(answer => answer.category === category);
    // Sends to the main function
    return calculateTotalScore(categoryAnswers);
};
