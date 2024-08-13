'use client';

import React from 'react';

const ButtonCv = () => {
    const downloadCV = () => {
        window.open("/José Daza Díaz CVV.pdf");
    }

    return (
        <button onClick={downloadCV} className="p-4 rounded-lg ring-1 ring-black">Descargar CV</button>
    );
};

export default ButtonCv;
