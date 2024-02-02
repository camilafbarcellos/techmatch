import React from 'react';

interface LogoProps {
    className: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
    return (
        <img
            className={`${className}`}
            alt='TechMatch Logo'
            src={require('../assets/images/logo.png')}
        />
    );
};

export default Logo;
