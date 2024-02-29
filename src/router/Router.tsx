import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Quiz from '../pages/Quiz';
import Results from '../pages/Results';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home pageTitle='Home' />} />
                <Route path='/quiz' element={<Quiz pageTitle='Quiz' />} />
                <Route path='/results' element={<Results pageTitle='Resultados' />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    );
}