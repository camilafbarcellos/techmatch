import React from 'react';
import '../assets/styles/images.css';

interface LogoProps {
    className: string;
    priority?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', priority = false }) => {
    return (
        <>
            {priority ? (
                <img
                    className={className}
                    alt='TechMatch Logo'
                    src={require('../assets/images/logo.webp')}
                    rel='preload' fetchpriority='high'
                />
            ) : (
                <img
                    className={className}
                    alt='TechMatch Logo'
                    src={require('../assets/images/logo.webp')}
                />
            )}
        </>
    );
};

export default React.memo(Logo);
