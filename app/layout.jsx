"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Header from "./components/Header";
import Footer from './components/Footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Extinguidores Rocha',
  description: 'Venta y recarga de extinguidores en Tijuana | Expertos en seguridad contra incendios | Amplia selección de extinguidores certificados y servicios de recarga confiables en la ciudad de Tijuana. ¡Protege tu hogar o negocio hoy mismo!',
}

export default function RootLayout({ children }) {
  return (
      <html lang="es">
        <body className={inter.className}>
        <Header />
          {children}
        <Footer />
        </body>
      </html>  
  )
}
