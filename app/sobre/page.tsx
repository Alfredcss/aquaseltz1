import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const FeaturesSection = () => {

  return (
    <div className="bg-white">

      <div className="bg-gray-100 bg-opacity-50 py-8 px-6 rounded-xl shadow-md mb-8" >
        <h2 className="text-2xl font-bold text-black-400 mb-4">Información Académica</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white bg-opacity-80 rounded-xl shadow-md p-4 border-l-4 border-sky-400">
            <h3 className="text-lg font-semibold mb-4">Carrera</h3>
            <p className="mb-2"><strong>Tecnologías de la Información</strong></p>
            <p><strong>Área:</strong> Desarrollo de Software</p>
          </div>

          <div className="bg-white bg-opacity-80 rounded-xl shadow-md p-4 border-l-4 border-sky-400">
            <h3 className="text-lg font-semibold mb-4">Quinto Cuatrimestre</h3>
            <div className="w-full mt-2">
              <div>
                <p><strong>Materia:</strong> Integradora</p>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-80 rounded-xl shadow-md p-4 border-l-4 border-sky-400">
            <h3 className="text-lg font-semibold mb-4">Profesores</h3>
            <ul className="list-disc pl-4">
              <li><strong>Dra. Brenda Juárez Santiago</strong></li>
              <li><strong>Dra. Norma Alejandra Ledesma Uribe</strong></li>
              <li><strong>Ing. Héctor Benítez Saldaña</strong></li>
              <li><strong>Ing. Alejandro César Valencia García</strong></li>
            </ul>
          </div>

        </div>
      </div>

      <div>
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src="img/logo chido.png" alt="Modern building architecture" />
          </div>
          <div className="p-4 md:p-6">
            <div className="uppercase tracking-wide text-xl text-sky-400 font-semibold">Aqua Seltz</div>
            <a  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Increíble proyecto desarrollado por Náutico</a>
            <p className="mt-2 text-gray-700">El proyecto de monitoreo del nivel del agua busca abordar estas problemáticas proporcionando
             un sistema de bajo costo, eficiente y altamente adaptable que pueda recolectar y analizar datos sobre los <strong>niveles y la calidad del agua</strong> en 
             tiempo real. Esto permitiría a los gestores de recursos hídricos, agricultores y autoridades tomar decisiones informadas y proactivas para
              mejorar la gestión del agua, prevenir desastres relacionados con el agua, optimizar el uso del agua en la agricultura y promover prácticas
               de uso de agua más sostenibles y respetuosas con el medio ambiente. </p>
          </div>
        </div>
      </div>
      <br/>

      <div className="bg-gray-200 rounded-xl shadow-md p-6 mb-8 border-l-4 border-sky-400">
        <h2 className="text-2xl text-sky-400 font-bold mb-4">Antecedentes</h2>
        <ul className="list-disc list-inside">
          <li className="text-gray-800 mb-2">Cómo Medir el nivel de agua usando un sensor de ultrasonido HC-SR04. (TECH, 2022)</li>
          <li className="text-gray-800 mb-2">Control de nivel de agua y bomba con raspberry pi (Graficado). (ngel, 2021)</li>
          <li className="text-gray-800 mb-2">Cómo hacer un medidor de nivel de agua para cisternas y tinacos WIFI. (mismo, 2022)</li>
          <li className="text-gray-800 mb-2">Sensor ultrasónico con Raspberry Pi controlado con pulsadores. (Programatumicro, 2020)</li>
          <li className="text-gray-800 mb-2">Sensores y Modulos #38: TDS - Medir la calidad de agua 💧. (Tech, 2023)</li>
        </ul>
      </div>
      <br/>

      <div className="bg-white p-4 mb-8">
  <h2 className="text-xl text-gray-800 font-bold mb-4">Objetivo General</h2>
  <p className="text-base text-gray-700">Este sistema estará destinado a mejorar significativamente la gestión y el uso sostenible del agua en diversos sectores, incluyendo la agricultura, la prevención de inundaciones, y la gestión de recursos hídricos. Buscará facilitar la toma de decisiones informadas y proactivas en estos ámbitos, con el fin de optimizar el uso del agua, prevenir desastres relacionados con el agua, y promover prácticas de manejo del agua que sean sostenibles y respetuosas con el medio ambiente.</p>
</div>

<div className="bg-white shadow-none p-6 mb-8 border-l-4 border-sky-400">
  <h2 className="text-xl text-gray-800 font-bold mb-4">Objetivos Específicos</h2>
  <ul className="list-disc list-inside text-gray-700">
    <li>Diseñar y configurar un sistema de monitoreo basado en Raspberry Pi para medir con precisión los niveles de agua en tiempo real en un área geográfica determinada.</li>
    <li>Desarrollar un sistema que incluya sensores adecuados para detectar cambios en los niveles de agua y la calidad del mismo, software para el procesamiento y análisis de los datos recogidos, y una interfaz de usuario para la visualización y el monitoreo eficaz de los resultados.</li>
    <li>Proporcionar a los gestores de recursos hídricos y agricultores datos fiables y actualizados que les permitan tomar decisiones informadas para la gestión eficiente del agua, la optimización del riego, y la prevención de situaciones críticas como inundaciones o escasez de agua.</li>
  </ul>

  <h2 className="text-xl text-gray-800 font-bold mt-6 mb-4">Alcance</h2>
  <ol className="list-decimal list-inside text-gray-700">
    <li>Diseño del Dispositivo: Especificaciones detalladas del hardware y desarrollo del firmware.</li>
    <li>Desarrollo de Software: Creación de la aplicación móvil o plataforma web, implementación de algoritmos de procesamiento y configuración de la base de datos.</li>
    <li>Integración de Componentes: Pruebas y ensamblaje de todos los componentes hardware y software.</li>
    <li>Pruebas y Calibración: Realización de pruebas extensas para asegurar la precisión y fiabilidad del dispositivo. Calibración de sensores según sea necesario.</li>
    <li>Implementación Piloto: Implementación inicial del dispositivo en un entorno piloto para evaluar su rendimiento en condiciones reales.</li>
    <li>Monitoreo y Optimización: Establecimiento de un sistema de monitoreo continuo y optimización del dispositivo según los resultados de la implementación piloto.</li>
    <li>Documentación y Entrenamiento: Creación de documentación detallada para referencia futura y capacitación del personal encargado de la gestión del dispositivo.</li>
    <li>Escalabilidad y Mejora Continua: Diseño del sistema para ser escalable y planificación de mejoras continúas basadas en la retroalimentación y avances tecnológicos.</li>
  </ol>
      </div>




      <div className="flex">
      <div className="w-1/2 p-4">
        <h2 className="text-sky-400 text-xl font-bold">Metodología</h2>
        <p>La metodología usada para el proyecto fue la de SCRUM, que es de las mas comunes en los prouectos de software, el trabajo del proyecto lo dividimos en diferentes sprints que ibamos completando cada semana, donde cada integrante del equipo tenia un rol definido de acuerdo a la metodología, de esa forma cada persona del equipo sabia cual era su función dentro del equipo.</p>
      </div>
      <div className="w-1/2 p-4 border-l-4 border-sky-400">
        <h2 className="text-sky-400 text-xl font-bold">Problematica</h2>
        <p>El proyecto de monitoreo del nivel y calidad del agua  busca abordar problemáticas proporcionando un sistema de bajo costo, eficiente y altamente adaptable que pueda recolectar y analizar datos sobre los niveles y la calidad del agua en tiempo real. Esto permitiría a los gestores de recursos hídricos, agricultores y autoridades tomar decisiones informadas y proactivas para mejorar la gestión del agua, prevenir desastres relacionados con el agua, optimizar el uso del agua en la agricultura y promover prácticas de uso de agua más sostenibles y respetuosas con el medio ambiente.</p>
      </div>
      <br/>
      
      </div>
      <iframe className="w-full aspect-video ..." src="img/comercial.mp4"></iframe>
      <br/>
      <div className="columns-3">
    <img className="w-full h-auto object-cover" src="img/aqua1.jpg" alt="Imagen aqua1" />
    <img className="w-full h-auto object-cover" src="img/aqua2.jpg" alt="Imagen aqua2" />
    <img className="w-full h-auto object-cover" src="img/aqua3.jpg" alt="Imagen aqua3" />
    <img className="w-full h-auto object-cover" src="img/aqua4.jpg" alt="Imagen aqua4" />
    <img className="w-full h-auto object-cover" src="img/aqua5.jpg" alt="Imagen aqua5" />
    <img className="w-full h-auto object-cover" src="img/aqua6.jpg" alt="Imagen aqua6" />
    <img className="w-full h-auto object-cover" src="img/aqua7.jpg" alt="Imagen aqua7" />
</div>


      </div>
    
  );
};

export default FeaturesSection;
