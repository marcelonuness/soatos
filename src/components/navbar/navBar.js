'use client';
import Link from "next/link";
import Image from "next/image";
import Button from "../button/button";
import { useState, useEffect } from "react";


export default function NavBar() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY <= 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`text-sm py-3 fixed top-0 left-0 w-full px-10 z-10 ${
        showNavbar ? "bg-black text-white" : "bg-white text-black"}
    transition duration-300 ease-in-out`}>
      <div className="max-w-7l mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <div>
              <Link
                href="/"
                className="flex-shrink-0">
                    <Image
                        src="/logo-nobackground.png"
                        alt="Logo Só-Atos"
                        width={150}
                        height={150}>
                    </Image>
              </Link>
            </div>
            <div className="hidden md:block ">
              <div className={`ml-10 flex items-baseline space-x-4 ${
              showNavbar ? 'block' : 'hidden'
            }`}>
                <Link
                  href="/"
                  className="hover:font-bold px-5 py-2 rounded-md text-md"
                >
                  Página Inicial
                </Link>
                <Link
                  href="/sobre"
                  className="hover:font-bold px-5 py-2 rounded-md text-md"
                >
                  Sobre Nós
                </Link>
                <Link
                  href="/manutencao"
                  className="hover:font-bold px-5 py-2 rounded-md text-md"
                >
                  Manutenção
                </Link>
                <Link
                  href="/produtos"
                  className="hover:font-bold px-5 py-2 rounded-md text-md"
                >
                  Produtos
                </Link>
                
              </div>
            </div>

            {/* Botão de Contato */}
            <Button title="Entre em Contato" colorText="text-black" colorBg="bg-white"></Button>
        </div>

          {/* Menu Responsivo */}
          <div className="-mr-2 flex md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md hover:text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-black transition duration-300 ease-in-out mx-2" aria-label="Menu" aria-expanded="false" onClick={()=> {
              const menu = document.getElementById("menu")
              menu.classList.toggle("hidden")
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Container de links responsivos */}
      <div id="menu" className="hidden">
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link
            href="#section1"
            className="hover:bg-gray-800 hover:font-bold block px-3 py-2 rounded-md text-base "
          >Página Inicial</Link>
          <Link
            href="#sobre"
            className="hover:bg-gray-800 hover:font-bold block px-3 py-2 rounded-md text-base "
          >Sobre Nós</Link>
          <Link
            href="#preco"
            className="hover:bg-gray-800 hover:font-bold block px-3 py-2 rounded-md text-base "
          >Manutenção</Link>
          <Link
            href="#section3"
            className="hover:bg-gray-800 hover:font-bold block px-3 py-2 rounded-md text-base "
          >Produtos</Link>
        </div>
      </div>
    </nav>
  )
}