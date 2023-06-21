import React from 'react'
import Whatsapp from '../assets/whatsapp.svg'
import Map from './Mapa'
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import logo from "../assets/logo.svg";

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-800 w-full">
            <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-center">
                    <div className="flex-col justify-center">
                        <h2 className="font-bold uppercase text-red-500 dark:text-gray-400 text-center">Dirección</h2>
                        <nav className='text-primary dark:text-gray-400 '>
                            <a href="https://www.google.com/maps/search/?api=1&query=32.447637174701676, -116.9674882050032"
                                className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary hover:bg-gray-200 p-2 rounded-lg transition-colors"
                                target="_blank" >
                                <FaMapMarkerAlt />
                                <h1 className='text-primary'>De las palomas 485 Amparo Sanchez 22183</h1>
                            </a>
                        </nav>
                    </div>
                    <div>

                        <h2 className="font-bold uppercase text-red-500 dark:text-gray-400 text-center">Redes sociales</h2>
                        <nav className='text-gray-500 dark:text-gray-400 '>
                            <a
                                href="https://www.facebook.com/profile.php?id=100091057982591"
                                className="flex items-center justify-center gap-2 text-primary dark:text-gray-400 hover:text-primary hover:bg-gray-200 p-2 rounded-lg transition-colors"
                                target="_blank"
                            >
                                <img

                                    src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                                    className="w-[20px] h-[20px]"
                                    alt="Facebook"
                                />
                                <h1>Facebook</h1>
                            </a>
                            <a
                                href="https://wa.me/526641670776?text=Vi%20su%20anuncio%20y%20quisiera%20consultar%20su%20cat%c3%a1logo%20de%20extintores"
                                className="flex items-center justify-center gap-2 text-primary dark:text-gray-400 hover:text-primary hover:bg-gray-200  p-2 rounded-lg transition-colors"
                                target="_blank"
                            >
                                <img
                                    src={Whatsapp}
                                    className="text-primary dark:text-gray-400 w-[20px] h-[20px]"
                                    alt="whatsapp"
                                />
                                <h1>Whatsapp</h1>
                            </a>
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
                                <a href="tel:6641670776">(+52) 664-16-70-776</a>
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
                                <a href="mailto:extinguidoresrocha@gmail.com">extinguidoresrocha@gmail.com</a>
                            </p>
                        </nav>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="w-full xl:w-6/6 md:w-6/6 pt-4 md:pt-0">
                    <Map />
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="text-center">
                    <Link href="/" passHref>
                        <p className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img src={logo} className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            Extinguidores Rocha
                        </p>

                    </Link>
                    <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2023

                        <Link href="/" passHref><a className="text-red-500 hover:underline dark:text-purple-500"> Extinguidores Rocha</a> </Link>.Todos los derechos reservados.
                    </span>
                    <ul className="flex justify-center mt-5 space-x-5">
                        {/* <li>
                            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>

                        <li>
                            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                        </li> */}

                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer