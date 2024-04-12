const Navigation = () => {
  return (
    <ul className="flex items-center border-b bg-custom-blue font-montserrat">
      <li className="mr-1">
        <a className="inline-block py-2 px-4 text-white hover:text-blue-700 font-semibold" href="..">Home</a>
      </li>
      <li className="mr-1">
        <a className="inline-block py-2 px-4 text-white hover:text-blue-700 font-semibold" href="./acerca">Acerca</a>
      </li>
      <li className="mr-1">
        <a className="inline-block py-2 px-4 text-white hover:text-blue-700 font-semibold" href="./contactos">Contacto</a>
      </li>
      <li className="mr-1">
        <a className="inline-block py-2 px-4 text-white hover:text-blue-700 font-semibold" href="./aqua">AquaSeltz</a>
      </li>
      <li className="mr-1">
        <a className="inline-block py-2 px-4 text-white hover:text-blue-700 font-semibold" href="./sobre">Sobre el Proyecto</a>
      </li>
      <li className="mr-6 text-right ml-96">
        {/* Aquí colocas la imagen de tu logo */}
        <img src="img/logo.png" alt="Logo de Nautico" className="h-10 center-rithg ml-96 pl-16" />
      </li>
    </ul>
  );
};

export default Navigation;
