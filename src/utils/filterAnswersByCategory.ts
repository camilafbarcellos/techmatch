import { Answer } from '../types/answer';
import { AnswersByCategory } from '../types/answersByCategory';

export const filterAnswersByCategory = ( answers: Answer[]): AnswersByCategory[] => {
    return answers.reduce((acc, curr) => {
        const existingCategory = acc.find(item => item.category === curr.category);
        if (existingCategory) {
            existingCategory.results.push(curr.result);
        } else {
            acc.push({ category: curr.category, results: [curr.result] });
        }
        return acc;
    }, [] as AnswersByCategory[]);
}
