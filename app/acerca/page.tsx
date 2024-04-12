import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-400 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Espacio para el logo */}
        <div className="flex items-center justify-center mb-8">
        <img src="img/logotipo bw.png" alt="Logo" width={500} height={500} />
        </div>

        <h2 className="text-3xl font-bold text-white mb-4 text-center animate-fade-in">Acerca de Nautico</h2>
        <p className="text-lg text-white mb-8 text-center animate-fade-in">
          Nautico es una empresa dedicada a la innovación en tecnologías de la información.
          Nuestra misión es proporcionar soluciones innovadoras y sostenibles para nuestros clientes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md animate-slide-in-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Nuestro Compromiso</h3>
            <p className="text-gray-600">
              En Nautico nos esforzamos por ofrecer soluciones innovadoras y sostenibles que beneficien a nuestros clientes.
            </p>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md animate-slide-in-right">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Nuestros Valores</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Integridad</li>
              <li>Innovación</li>
              <li>Compromiso</li>
              <li>Colaboración</li>
              <li>Excelencia</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
