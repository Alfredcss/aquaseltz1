'use client';
import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import WaterConservationTips from './WaterConservationTips';
import EnvironmentalImpact from './EnvironmentalImpact';
import WaterSavingTestimonials from './WaterSavingTestimonials';

export default function Home() {
  const [distanceData, setDistanceData] = useState([]);
  const maxDistance = 15; // Establece la distancia máxima a 15 cm

  // Inicialización de la conexión MQTT
  useEffect(() => {
    const client = mqtt.connect('wss://broker.emqx.io:8084/mqtt');

    // Configuración de la conexión MQTT
    client.on('connect', () => {
      console.log('Connected to MQTT broker');
      client.subscribe('casa/distancia', (err) => {
        if (!err) {
          console.log('Subscribed to casa/distancia');
        } else {
          console.error('Subscription error:', err);
        }
      });
    });

    // Recepción de mensajes MQTT
    client.on('message', (topic, message) => {
      if (topic === 'casa/distancia') {
        const distance = parseFloat(message.toString());
        
        // Invertir el valor de la distancia
        const invertedDistance = maxDistance - distance;
        
        // Almacenar los datos invertidos junto con el tiempo actual
        setDistanceData(prevData => [...prevData, { time: getCurrentTime(), distance: invertedDistance }]);
      }
    });

    // Limpieza de la conexión MQTT al desmontar el componente
    return () => {
      client.end();
      console.log('Disconnected from MQTT broker');
    };
  }, []);

  // Función para obtener la hora actual
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div>
      <h1 className="font-serif text-2xl text-center font-medium text-sky-500">Distance Data</h1>
      <br />
      <br />
      <LineChart
        width={800}
        height={400}
        data={distanceData}
      >
        <XAxis dataKey="time" />
        <YAxis
          domain={[0, maxDistance]} // Establece el rango del eje Y de 0 a 15 cm
          label={{ value: 'Nivel del agua (cm)', angle: -90, position: 'insideLeft' }}
        />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="distance" stroke="#8884d8" strokeWidth={3} />
        <Tooltip />
        <Legend />
      </LineChart>
      <br />
      <WaterConservationTips />
      <br />
      <EnvironmentalImpact />
      <br />
      <WaterSavingTestimonials />
      <br />
    </div>
  );
}
