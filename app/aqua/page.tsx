'use client';
import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import WaterConservationTips from './WaterConservationTips';
import EnvironmentalImpact from './EnvironmentalImpact';
import WaterSavingTestimonials from './WaterSavingTestimonials';

export default function Home() {
    // Declaración del estado distanceData con tipo explícito
const [distanceData, setDistanceData] = useState<{ time: string; waterLevel: number; }[]>([]);

    const [containerHeight, setContainerHeight] = useState(100); // Altura máxima predeterminada para el recipiente (78 cm como ejemplo)

    // Inicialización de la conexión MQTT
    useEffect(() => {
        const client = mqtt.connect('wss://broker.emqx.io:8084/mqtt');
        
        // Configuración de la conexión MQTT
        client.on('connect', function() {
            console.log('Connected to MQTT broker');
            client.subscribe('casa/distancia', function(err) {
                if (!err) {
                    console.log('Subscribed to casa/distancia');
                } else {
                    console.error('Subscription error:', err);
                }
            });
        });

        // Recepción de mensajes MQTT
        client.on('message', function(topic, message) {
            if (topic === 'casa/distancia') {
                const distance = parseFloat(message.toString());
                
                // Invertir el valor de la distancia usando la altura máxima del recipiente
                const waterLevel = containerHeight - distance;
                
                // Almacenar los datos invertidos junto con el tiempo actual
                setDistanceData(prevData => [...prevData, { time: getCurrentTime(), waterLevel }]);

                // Verificar si el nivel del agua está cerca del punto máximo
                const alertThreshold = containerHeight - 2; // Umbral para la alerta, 2 cm por debajo del punto máximo
                if (waterLevel >= alertThreshold) {
                    alert('¡Advertencia! El nivel del agua está cerca del punto máximo del recipiente.');
                }
            }
        });

        // Limpieza de la conexión MQTT al desmontar el componente
        return () => {
            client.end();
            console.log('Disconnected from MQTT broker');
        };
    }, [containerHeight]); // Dependencia: `containerHeight` para refrescar la lógica si el usuario cambia la altura máxima

    // Función para obtener la hora actual
    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }
// Maneja cambios en la altura máxima del recipiente ingresada por el usuario
const handleContainerHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setContainerHeight(parseFloat(e.target.value));
};


    return (
        <div>
            <h1 className="font-serif text-2xl text-center font-medium text-sky-500">Nivel del Agua</h1>
            
            {/* Entrada para que el usuario ingrese la altura máxima del recipiente */}
            <div className="container-height-input">
                <label>Ingrese la altura máxima del recipiente (cm): </label>
                <input
                    type="number"
                    value={containerHeight}
                    onChange={handleContainerHeightChange}
                    placeholder="Altura máxima en cm"
                />
            </div>

            <br />
            <LineChart
                width={1100}
                height={500}
                data={distanceData}
            >
                <XAxis dataKey="time" />
                <YAxis
                    domain={[0, containerHeight]} // Establece el rango del eje Y según la altura máxima
                    label={{ value: 'Nivel del agua (cm)', angle: -90, position: 'insideLeft' }}
                />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="waterLevel" stroke="#38BDF8" strokeWidth={3} />
                <Tooltip />
                <Legend />
            </LineChart>

            <WaterConservationTips />
            <br />
            <EnvironmentalImpact />
            <br />
            <WaterSavingTestimonials />
        </div>
    );
}
