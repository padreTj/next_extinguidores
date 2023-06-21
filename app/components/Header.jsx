import React, { useState} from "react";
import Image from 'next/image';
// import { FaBars, FaAngleDoubleLeft } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="relative w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto bg">
          <a href="/" className="flex items-center ">
            <Image
              src={logo}
              className="h-6 mr-3 sm:h-9 "
              alt="Landwind Logo"
            />
            <span className={`self-center text-xl font-semibold whitespace-nowrap  dark:text-white`}>
              Extinguidores Rocha
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={toggleMenu} // Agrega el evento onClick para llamar a toggleMenu
            >
              <span className="sr-only">menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg></button>
          </div>
          <div className={`items-center justify-between ${showMenu === false ? 'hidden' : 'block'}   w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2`}>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <a href="/">
                <h2 className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" >Inicio</h2>
              </a>
              <a href="/productos_servicios">
                <h2 className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" >Productos y Servicios</h2>
              </a>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
