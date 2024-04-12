import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-cyan-100 to-90%">
      <div className="max-w-4xl mx-auto px-4">
        <br/>
        <br/>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Equipo de Nautico</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Primer Integrante */}
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <img src="img/1.jpg" alt="Nombre del Primer Integrante" className="mx-auto rounded-full w-32 h-32 mb-4" />
            <p className="text-lg  text-gray-800 mb-2 bg-opacity-60">Erick <strong className='text-1sm'>Pérez Hérnandez</strong></p>
            
            {/* Descripción breve */}
            <p className="text-sm text-cyan-400">Scrum Master.</p>
            <br/>
            <p>Es el facilitador y guardián del proceso ágil Scrum dentro de un equipo de desarrollo. </p>
          </div>
          {/* Segundo Integrante */}
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <img src="img/2.jpg" alt="Nombre del Segundo Integrante" className="mx-auto rounded-full w-32 h-32 mb-4" />
            <p className="text-lg  text-gray-800 mb-2">Giancarlo Yislain <strong>Ramos Gomez</strong></p>
            {/* Descripción breve */}
            <p className="text-sm text-green-400">Developer.</p>
            <br/>
            <p>Miembro del equipo de desarrollo responsable de crear el software.</p>
          </div>
          {/* Tercer Integrante */}
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <img src="img/3.jpg" alt="Nombre del Tercer Integrante" className="mx-auto rounded-full w-32 h-32 mb-4" />
            <p className="text-lg text-gray-800 mb-2">Alfredo <strong>Ferrusca Enriquez</strong></p>
            {/* Descripción breve */}
            <p className="text-sm text-yellow-400">Product Owner.</p>
            <br/>
            <p> responsable de definir y priorizar los elementos del backlog del producto, representando los intereses del cliente</p>
          </div>
          {/* Cuarto Integrante */}
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <img src="img/4.jpg" alt="Nombre del Cuarto Integrante" className="mx-auto rounded-full w-32 h-32 mb-4" />
            <p className="text-lg text-gray-800 mb-2">Jorge Orlando <strong>Cruz Ordaz</strong></p>
            {/* Descripción breve */}
            <p className="text-sm text-red-500">Documentador.</p>
            <br/>
            <p>Miembro del equipo que se encarga de documentar el software o producto en todas sus etapas de desarrollo y mantenimiento.</p>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
