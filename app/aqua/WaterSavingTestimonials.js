import React, { useState, useEffect } from 'react';

function WaterSavingTestimonials() {
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const testimonials = [
        'Desde que reparamos las fugas, nuestra factura de agua ha bajado considerablemente.',
        'Instalamos inodoros de bajo consumo y hemos ahorrado mucha agua.',
        'Usamos un sistema de reciclaje de agua para nuestras plantas y ha funcionado de maravilla.',
        'Adoptamos hábitos como lavar los platos en un solo lote y el resultado es notable.'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 20000); // Cambia el testimonio cada 20 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="testimonials-widget bg-gray-100 p-4 rounded-lg text-2xl bg-black-500 shadow-lg shadow-purple-300 w-1/2">
            <h3 className="text-purple-300 font-bold mb-2 text-3xl">Testimonios de ahorro de agua</h3>
            <p className="text-black">{testimonials[testimonialIndex]}</p>
        </div>
    );
}

export default WaterSavingTestimonials;
