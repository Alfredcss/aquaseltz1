import React, { useState, useEffect } from 'react';

function WaterConservationTips() {
    const [tipIndex, setTipIndex] = useState(0);
    const tips = [
        'Repara las fugas de agua en tu hogar.',
        'Instala cabezales de ducha de bajo flujo.',
        'Usa una jarra de agua en el refrigerador para evitar abrir el grifo repetidamente.',
        'Usa agua reciclada para regar tus plantas.',
        'Cierra el grifo mientras te cepillas los dientes.'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
        }, 10000); // Cambia de consejo cada 10 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="water-tips-widget bg-gray-100 p-4 rounded-lg text-2xl bg-black-500 shadow-lg shadow-cyan-500/50 w-1/2">
            <h3 className="text-sky-300 font-bold mb-2 text-3xl">Consejo de conservación del agua</h3> {/* Incrementar el tamaño del título a 3xl */}
            <p className="text-black">{tips[tipIndex]}</p> {/* Establecer el tamaño del texto del consejo a xl */}
        </div>
    );
}

export default WaterConservationTips;
