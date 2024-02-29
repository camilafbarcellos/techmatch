import React from 'react';
import '../assets/styles/images.css';

interface LaptopImageProps {
    className: string;
}

const LaptopImage: React.FC<LaptopImageProps> = ({ className = '' }) => {
    return (
        <img
            className={`${className}`}
            alt='Laptop with code and coffee'
            src={require('../assets/images/laptop.webp')}
            rel='preload' fetchPriority='high'
        />
    );
};

export default React.memo(LaptopImage);
