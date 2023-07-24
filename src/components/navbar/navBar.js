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
    <nav className={`py-3 fixed top-0 left-0 w-full px-10 z-10 ${
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
                <a
                  href="#section1"
                  className="hover:font-bold px-5 py-2 rounded-md text-md"
                >
                  Página Inicial
                </a>
                <a
                  href="#sobre"
                  className="hover:font-bold px-5 py-2 rounded-md text-md"
                >
                  Sobre Nós
                </a>
                <a
                  href="#precos"
                  className="hover:font-bold px-5 py-2 rounded-md text-md"
                >
                  Manutenção
                </a>
                {/* Aba de produtos com DROPDOWN */}
                <div className="dropdown inline-block relative">
                    <a className="inline-flex items-center hover:font-bold">
                    <span className="">Produtos</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                    </a>
                    <ul className="dropdown-menu absolute hidden text-white pt-1 text-sm">
                    <li className="w-full"><a className=" px-16  bg-black hover:font-bold hover:bg-gray-800 py-2 block whitespace-no-wrap" href="#">Clp&#39;s</a></li>
                    <li className="w-full"><a className=" px-16 bg-black hover:font-bold hover:bg-gray-800 py-2 block whitespace-no-wrap" href="#">Fontes</a></li>
                    <li className="w-full"><a className="px-16 bg-black hover:font-bold hover:bg-gray-800 py-2 block whitespace-no-wrap" href="#">IHMs</a></li>
                    <li className="w-full"><a className=" px-16 bg-black hover:font-bold hover:bg-gray-800 py-2 block whitespace-no-wrap" href="#">Brio&#39;s</a></li>
                    <li className="w-full"><a className=" px-16 bg-black hover:font-bold hover:bg-gray-800 py-2 block whitespace-no-wrap" href="#">Cabos</a></li>
                    <li className="w-full"><a className=" px-16 bg-black hover:font-bold hover:bg-gray-800 py-2 block whitespace-no-wrap" href="#">Semi&#45;novos</a></li>
                    <li className="w-full"><a className=" px-16  bg-black hover:font-bold hover:bg-gray-800 py-2 block whitespace-no-wrap" href="#">Produtos antigos</a></li>
                    </ul>
                </div>
              </div>
            </div>

            {/* Botão de Contato */}
            <Button title="Entre em Contato" colorText="text-black" colorBg="bg-white"></Button>
        </div>

          {/* Menu Responsivo */}
          <div className="-mr-2 flex md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-blue-700 transition duration-300 ease-in-out" aria-label="Menu" aria-expanded="false" onClick={()=> {
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
          >Início</Link>
          <Link
            href="#sobre"
            className="hover:bg-gray-800 hover:font-bold block px-3 py-2 rounded-md text-base "
          >Sobre</Link>
          <Link
            href="#preco"
            className="hover:bg-gray-800 hover:font-bold block px-3 py-2 rounded-md text-base "
          >Preços</Link>
          <Link
            href="#section3"
            className="hover:bg-gray-800 hover:font-bold block px-3 py-2 rounded-md text-base "
          >Teste Grátis</Link>
          <Link
            href="/login"
            className="hover:bg-gray-800 hover:font-bold block px-3 py-2 rounded-md text-base "
          >Login/Cadastre-se</Link>
        </div>
      </div>
    </nav>
  )
}