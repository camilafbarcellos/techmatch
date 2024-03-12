import React from 'react';
import '../assets/styles/images.css';

const LaptopImage: React.FC = () => {
    return (
        <img
            className={'laptop-image'}
            alt='Laptop with code and coffee'
            src={require('../assets/images/laptop.webp')}
            rel='preload' fetchpriority='high'
        />
    );
};

export default React.memo(LaptopImage);
