"use client"
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import logo from "./assets/logo.svg";
import Image from 'next/image';
import extintor from "./assets/Extinguidor_logo2.svg"

const Home = () => {
    return (
        <div id="container" className="min-h-100vh flex flex-wrap justify-center bg-white">
            <Header />
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto lg:col-span-7">
                        <h1
                            className=" max-w-2xl mb-4 text-4xl text-center lg:text-left font-extrabold leading-none tracking-tight md:text-5xl  xl:text-6xl dark:text-white">
                            Venta recarga y mantenimiento.
                        </h1>
                        <p
                            className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-justify">
                            En Extinguidores Rocha, brindamos soluciones integrales para la
                            protección contra incendios en Tijuana, BC. Con más de una década de
                            experiencia, ofrecemos venta, mantenimiento y recarga de extintores
                            y equipos de seguridad para comercios e industrias. Ofrecemos
                            opciones de extinguidores móviles en diferentes tamaños, extintores
                            automáticos, detectores de humo, luces de emergencia y más. Nuestra
                            prioridad es garantizar la seguridad de nuestros clientes
                            proporcionando servicios eficientes y confiables.
                        </p>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <a
                                href="https://wa.me/526641670776?text=Hola%20podrían%20brindarme%20más%20información%20sobre%20los%20extintores%20que%20ofrecen?%20Me%20gustaría%20saber%20qué%20tipos%20y%20tamaños%20de%20extintores%20tienen%20disponibles.%20¿Me%20pueden%20asesorar%20para%20elegir%20el%20extintor%20adecuado%20para%20mi%20hogar%20o%20negocio?%20¡Gracias!"
                                className="flex items-center justify-center text-white hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
                                target="_blank">
                                {/* <img
                                    className="rounded-t-md"
                                    src="./images/WhatsAppButtonGreenLarge.svg"
                                    alt="boton de WhatsApp" /> */}
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <Image src={logo} />
                    </div>
                </div>
            </section>
                                        
            <section class="bg-white dark:bg-gray-800">
                <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                    <Image class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={extintor}
                            alt="imagen extinguidor" />
                        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                                Encuentre el extintor adecuado para cualquier emergencia
                            </h2>
                            <p class="mb-8 font-light lg:text-xl text-justify">
                                Ofrecemos una amplia gama de extintores de alta calidad, diseñados
                                para cada tipo de incendio. Confíe en nosotros para proporcionarle
                                el extintor mas adecuado para su hogar o negocio.
                            </p>

                            <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-red-500 dark:text-purple-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Extinguidor
                                        CO2</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-red-500 dark:text-purple-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Extinguidor
                                        ABC</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-red-500 dark:text-purple-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Extinguidor
                                        de agua</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-red-500 dark:text-purple-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Y muchos
                                        mas...</span>
                                </li>
                            </ul>
                            <p class="mb-8 font-light lg:text-xl">
                                Proteja su seguridad con los extintores de alta calidad de
                                Extinguidores Rocha.
                            </p>
                            <a href="https://wa.me/526641670776?text=¡Hola!%20He%20visto%20en%20tu%20página%20que%20tienes%20la%20mejor%20opción%20de%20extintor%20para%20emergencias.%20¿Podrías%20proporcionarme%20más%20información%20y%20cómo%20puedo%20adquirirlo?%20¡Gracias!"
                                class="inline-flex items-center justify-center w-full px-6 py-3 mb-4 text-base font-medium text-white bg-red-500 rounded-lg shadow-sm lg:mb-0 lg:w-auto lg:px-8 lg:py-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Contacto</a>
                        </div>
                        
                    </div>
                </div>
            </section>
            
            <PreguntasFrecuentes/>
            <Footer />
        </div>
    );
};

export default Home;
