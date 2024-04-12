import React, { useState, useEffect } from 'react';

function EnvironmentalImpact() {
    const [impactInfo, setImpactInfo] = useState('');

    const impacts = [
        'El uso excesivo de agua puede agotar las fuentes naturales de agua.',
        'El bombeo excesivo de agua subterránea puede causar hundimientos del terreno.',
        'Los ecosistemas acuáticos pueden verse afectados por el uso intensivo de agua.',
        'La escasez de agua puede afectar la agricultura y la producción de alimentos.'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const randomImpact = impacts[Math.floor(Math.random() * impacts.length)];
            setImpactInfo(randomImpact);
        }, 15000); // Cambia la información cada 15 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="environmental-impact-widget bg-gray-100 p-4 rounded-lg text-2xl bg-black-500 shadow-lg shadow-emerald-200 w-1/2">
            <h3 className="text-emerald-200 font-bold mb-2 text-3xl">Impacto ambiental del uso excesivo de agua</h3>
            <p className="text-black">{impactInfo}</p>
        </div>
    );
}

export default EnvironmentalImpact;
