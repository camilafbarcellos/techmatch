import React from 'react';
import '../assets/styles/images.css';

interface LogoProps {
    className: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
    return (
        <img
            className={`${className}`}
            alt='TechMatch Logo'
            src={require('../assets/images/logo.webp')}
        />
    );
};

export default React.memo(Logo);
