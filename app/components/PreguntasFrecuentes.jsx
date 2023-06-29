import React, { useState } from 'react'
import Link from 'next/link';

const PreguntasFrecuentes = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };
    return (
        <section className="bg-white dark:bg-gray-400">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl pt-2 dark:text-white">
                    Preguntas frecuentes
                </h2>
                <div className="max-w-screen-md mx-auto">
                    <div id="accordion-flush" data-accordion="collapse"
                        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h3 id="accordion-flush-heading-1">
                            <button type="button"
                                className={`flex items-center justify-between w-full py-5 font-medium text-left ${activeIndex === 1 ? 'text-red-500 dark:text-purple-500' : 'text-gray-600'} bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white`}

                                aria-controls="accordion-flush-body-1" onClick={() => toggleAccordion(1)}>
                                <span>¿Qué tipo de extintor debo comprar para mi hogar o negocio?</span>
                                <svg data-accordion-icon="" className={`w-6 h-6 shrink-0 ${activeIndex === 1 ? 'rotate-180' : ''}`} fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </h3>
                        <div id="accordion-flush-body-1" className={`${activeIndex === 1 ? 'block' : 'hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Depende del tipo de incendio que pueda ocurrir en su hogar o
                                    negocio. Hay extintores específicos para incendios de papel y
                                    madera, líquidos inflamables, gas, y equipos eléctricos.
                                    Asegúrese de conocer el tipo de incendio más probable en su
                                    entorno para elegir el
                                    <Link href="/" className="text-red-500 dark:text-purple-500 hover:underline"> extintor
                                        adecuado</Link>.
                                </p>
                            </div>
                        </div>
                        <h3 id="accordion-flush-heading-2">
                            <button type="button"
                                className={`flex items-center justify-between w-full py-5 font-medium text-left ${activeIndex === 2 ? 'text-red-500 ' : 'text-gray-600'} bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white`}
                                aria-controls="accordion-flush-body-1" onClick={() => toggleAccordion(2)}>
                                <span>¿Cuántos extintores necesito y dónde debo colocarlos?</span>
                                <svg data-accordion-icon="" className={`w-6 h-6 shrink-0 ${activeIndex === 2 ? 'rotate-180' : ''}`} fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </h3>
                        <div id="accordion-flush-body-2" className={`${activeIndex === 2 ? 'block' : 'hidden'}`} aria-labelledby="accordion-flush-heading-2">
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Se recomienda tener al menos un
                                    <Link href="/" className="text-red-500 dark:text-purple-500 hover:underline"> extintor </Link>
                                    en cada nivel del edificio y en lugares accesibles y visibles,
                                    como cerca de las salidas de emergencia y en áreas con equipos
                                    eléctricos o inflamables.
                                </p>
                            </div>
                        </div>
                        <h3 id="accordion-flush-heading-3">
                            <button type="button"
                                className={`flex items-center justify-between w-full py-5 font-medium text-left ${activeIndex === 3 ? 'text-red-500 ' : 'text-gray-600'} border-gray-200 dark:border-gray-700 dark:text-gray-400`}
                                aria-controls="accordion-flush-body-3" onClick={() => toggleAccordion(3)} >
                                <span>¿Cómo sé si mi extintor está en buen estado y cuándo debo
                                    reemplazarlo?</span>
                                <svg data-accordion-icon="" className={`w-6 h-6 shrink-0 ${activeIndex === 3 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </h3>
                        <div id="accordion-flush-body-3" className={`${activeIndex === 3 ? 'block' : 'hidden'}`} aria-labelledby="accordion-flush-heading-3">
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Es importante revisar el extintor regularmente para asegurarse
                                    de que esté en buenas condiciones. Si el extintor ha sido
                                    utilizado, debe ser recargado. Además, los extintores tienen
                                    una fecha de caducidad y deben ser reemplazados antes de esa
                                    fecha.
                                </p>

                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Ofrecemos servicios de recarga y mantenimiento de extintores
                                    de alta calidad. Mantenga su seguridad en manos de
                                    Extinguidores Rocha.
                                </p>
                                <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                    <li>
                                        <Link href="/" className="text-red-500 dark:text-purple-500 hover:underline">Recarga</Link>
                                    </li>
                                    <li>
                                        <Link href="/"
                                            className="text-red-500 dark:text-purple-500 hover:underline">Mantenimiento</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h3 id="accordion-flush-heading-4">
                            <button type="button"
                                className={`flex items-center justify-between w-full py-5 font-medium text-left ${activeIndex === 4 ? 'text-red-500 ' : 'text-gray-600'} border-gray-200 dark:border-gray-700 dark:text-gray-400`}
                                aria-controls="accordion-flush-body-4" onClick={() => toggleAccordion(4)} >
                                <span>¿Cómo se utiliza correctamente un extintor en caso de
                                    emergencia?</span>
                                <svg data-accordion-icon="" className={`w-6 h-6 shrink-0 ${activeIndex === 4 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </h3>
                        <div id="accordion-flush-body-4" className={`${activeIndex === 4 ? 'block' : 'hidden'}`} aria-labelledby="accordion-flush-heading-4">
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Para utilizar un extintor, recuerde la regla PAS: P de Pull
                                    (jale el seguro), A de Aim (apunte hacia la base del fuego), S
                                    de Squeeze (apriete la palanca), y S de Sweep (barra el
                                    extintor de lado a lado).
                                </p>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Protéjase a sí mismo y a su equipo. Pregunte por nuestros
                                    <Link href="/productos_servicios" className="text-red-500 dark:text-purple-500 hover:underline"> cursos de
                                        capacitacion </Link>
                                    en extintores y prevención de incendios.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
    )
}

export default PreguntasFrecuentes