import { createContext } from 'react';
import { Question } from '../types/question';

interface AppContextProps {
  questions: Question[]
}

export const AppContext = createContext<AppContextProps>({questions: []});
