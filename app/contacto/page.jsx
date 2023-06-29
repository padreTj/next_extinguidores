"use client";
import Form from '../components/Form'
import Image from 'next/image'
import Link from 'next/link';
import Whatsapp from '../assets/whatsapp.svg'
import { DeviceMobileIcon, LocationMarkerIcon, MailIcon } from '@heroicons/react/outline'

const Contacto = () => {

    return (
        <div id='container' className='min-h-100vh flex flex-wrap justify-center items-center'>
            <div className='flex  flex-col items-center justify-center h-full md:h-[92vh]'>
                <div className="relative mx-auto w-full max-w-7xl bg-white text-gray-700">
                    <div className="grid grid-cols-2">



                        <div className="order-1 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6">
                            <div className="mx-auto max-w-xl flex flex-col space-y-5">

                                {/* ::Title */}
                                <h2 className="text-center text-5xl text-seccondary">Contactanos</h2>

                                {/* ::Some Text */}
                                <p className="mx-auto py-5 max-w-3xl text-justify text-base text-gray-600">¿Necesita proteger su hogar o negocio contra incendios? Contáctenos para conocer nuestros servicios de venta, mantenimiento y recarga de extintores, sistemas de extinción de incendios y capacitación en seguridad contra incendios. También puede comunicarse con nosotros a través de WhatsApp, Facebook, correo electrónico o hacer una llamada directa para obtener asesoramiento personalizado. Estamos comprometidos con brindar un servicio excepcional y una atención al cliente de primer nivel. ¡Gracias por elegirnos como su proveedor de soluciones de protección contra incendios!</p>
                                {/* ::Email contact */}

                                {/* ::Address */}

                                <p className="text-primary flex items-center gap-2">
                                    <DeviceMobileIcon className="mr-2 w-6 h-6 text-seccondary" />
                                    <Link href="tel:6641670776">(+52) 664-16-70-776 </Link>
                                </p>
                                <p className="text-primary flex items-center gap-2">
                                    <MailIcon className="mr-2 w-6 h-6 text-seccondary" />
                                    <Link href="mailto:extinguidoresrocha@gmail.com">extinguidoresrocha@gmail.com</Link>
                                </p>
                                <p className="text-primary flex items-center gap-2">
                                    <LocationMarkerIcon className="mr-2 w-6 h-6 text-seccondary" />
                                    <Link href="https://www.google.com/maps/search/?api=1&query=32.44736838927398,-116.96736005560845" target="_blank">De las palomas 485 Amparo Sanchez 22183</Link>
                                </p>

                                {/* ::Socials */}
                                <div className="flex items-center justify-normal">
                                    {/* :WHATSAPP */}
                                    <Link
                                        href="https://wa.me/526641670776?text=Vi%20su%20anuncio%20y%20quisiera%20consultar%20su%20cat%c3%a1logo%20de%20extintores"
                                        className="flex items-center gap-2 text-white hover:text-primary hover:bg-gray-100  p-2 rounded-lg transition-colors"
                                        target="_blank"
                                    >
                                        <Image
                                            width={50}
                                            height={50}
                                            src={Whatsapp}
                                            className="text-white w-[45px] h-[45px]"
                                            alt="whatsapp"
                                        />
                                    </Link>

                                    {/* :FACEBOOK */}
                                    <Link
                                        href="https://www.facebook.com/profile.php?id=100091057982591"
                                        className="flex items-center gap-2 text-white hover:text-primary hover:bg-gray-100 p-2 rounded-lg transition-colors"
                                        target="_blank"
                                    >
                                        <Image
                                            width={50}
                                            height={50}
                                            src={Whatsapp}
                                            className="text-white w-[45px] h-[45px]"
                                            alt="Facebook"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 bg-gray-50 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6 justify-center items-center">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contacto;

