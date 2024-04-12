import React from 'react';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-300 to-green-200">
      {/* Fondo de imagen */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center blur-sm" style={{backgroundImage: "url('img/fondo_pexels.jpg')"}}>
      </div>
      <div className="flex flex-col  justify-center min-h-screen relative z-10">
        <div className="max-w-md mx-auto text-center text-white">
          {/* Título grande con estilo minimalista */}
          <div className="text-5xl font-extrabold ...">
  <p className="bg-clip-text ">
  ¡Hola y bienvenido! 
  </p>
  <p className="">
   en
  </p>
  <p className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-800">
   Aquaseltz
  </p>
</div>

          {/* Texto mediadamente grande */}
          <div className="bg-white bg-opacity-40 rounded-lg p-4 mt-8">
  <p className="text-lg text-gray-800">
    Descubre AquaSeltz, nuestro proyecto para monitorear el nivel y la calidad del agua en tiempo real. Estamos comprometidos con la innovación y la mejora continua.
  </p>
</div>

        </div>
      </div>
    </div>
  );
};

export default Home;
