import React from 'react'
import Whatsapp from '../assets/whatsapp.svg'
import facebook from '../assets/facebook.svg'
import Link from 'next/link';
// import Map from './Mapa'
import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.svg";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-800 w-full">
            <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-center">
                    <div className="flex-col justify-center">
                        <h2 className="font-bold uppercase text-red-500 dark:text-gray-400 text-center">Dirección</h2>
                        <nav className='text-primary dark:text-gray-400 '>
                            <Link href="https://www.google.com/maps/search/?api=1&query=32.447637174701676, -116.9674882050032"
                                className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary hover:bg-gray-200 p-2 rounded-lg transition-colors"
                                target="_blank" >
                                <FaMapMarkerAlt />
                                <h1 className='text-primary'>De las palomas 485 Amparo Sanchez 22183</h1>
                            </Link>
                        </nav>
                    </div>
                    <div>
                        <h2 className="font-bold uppercase text-red-500 dark:text-gray-400 text-center">Redes sociales</h2>
                        <nav className='text-gray-500 dark:text-gray-400 '>
                            <Link
                                href="https://www.facebook.com/profile.php?id=100091057982591"
                                className="flex items-center justify-center gap-2 text-primary dark:text-gray-400 hover:text-primary hover:bg-gray-200 p-2 rounded-lg transition-colors"
                                target="_blank"
                            >
                                <Image
                                    src={facebook}
                                    className="w-[20px] h-[20px]"
                                    alt="Facebook"
                                />
                                <h1>Facebook</h1>
                            </Link>
                            <Link
                                href="https://wa.me/526641670776?text=Vi%20su%20anuncio%20y%20quisiera%20consultar%20su%20cat%c3%a1logo%20de%20extintores"
                                className="flex items-center justify-center gap-2 text-primary dark:text-gray-400 hover:text-primary hover:bg-gray-200  p-2 rounded-lg transition-colors"
                                target="_blank"
                            >
                                <Image
                                    src={Whatsapp}
                                    className="text-primary dark:text-gray-400 w-[20px] h-[20px]"
                                    alt="whatsapp"
                                />
                                <h1>Whatsapp</h1>
                            </Link>
                        </nav>
                    </div>
                    <div>
                        <h2 className="font-bold uppercase text-red-500 dark:text-gray-400 text-center">CONTÁCTANOS</h2>
                        <nav className='text-primary dark:text-gray-400 '>
                            <p className="flex items-center justify-center gap-2 text-primary dark:text-gray-400 hover:text-primary hover:bg-gray-200 p-2 rounded-lg transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    />
                                </svg>
                                <Link href="tel:6641670776">(+52) 664-16-70-776</Link>
                            </p>
                            <p className="flex items-center justify-center gap-2 text-primary dark:text-gray-400 hover:text-primary hover:bg-gray-200 p-2 rounded-lg transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <Link href="mailto:extinguidoresrocha@gmail.com">extinguidoresrocha@gmail.com</Link>
                            </p>
                        </nav>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="w-full xl:w-6/6 md:w-6/6 pt-4 md:pt-0">
                    {/* <Map /> */}
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="text-center ">
                    
                    <Link href="/">
                        <p className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                            <Image 
                                width={50}
                                height={50}
                                src={logo} 
                                className="h-6 mr-3 sm:h-9" 
                                alt="Landwind Logo" />
                            Extinguidores Rocha
                        </p>
                    </Link>
                    <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2023
                        <Link href="/"><p className="text-red-500 hover:underline dark:text-purple-500"> Extinguidores Rocha</p> </Link>.Todos los derechos reservados.
                    </span>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer