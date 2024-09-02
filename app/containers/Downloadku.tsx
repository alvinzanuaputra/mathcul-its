"use client"
import React, { CSSProperties } from 'react';
import { BsArrowUp } from 'react-icons/bs';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const App: React.FC = () => {
    return (
        <div
            style={{ textAlign: 'center', marginTop: '50px' }}
            data-aos="fade-up"
            data-aos-duration="500"
            className="fixed bottom-8 right-8 rounded-full border p-1.5 bg-white border-black"
            onClick={scrollToTop} 
        >
            <BsArrowUp size={24} />
        </div>
    );
};

export default App;
