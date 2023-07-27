import Image from "next/image"
import Link from "next/link"
import Button from "../button/button"

export default function Footer() {
    return(
        <footer className="bg-black text-white py-[100px] px-[40px]">
            <div className="w-full flex">
                {/* Logo */}
                <div className="w-1/3  self-start">
                    <Image
                        alt="logo footer"
                        src="/logo-nobackground.png"
                        width={125}
                        height={125}
                    ></Image>
                </div>
                {/* Links */}
                <div className="w-1/3   flex">
                    {/* primeira divisão de links */}
                    <div className="w-1/2 ">
                    <ul>
                        <li className="mb-1">
                        <Link
                        href="/home"
                        className="hover:font-bold px-5 py-2 rounded-md text-md"
                        >
                        Página Inicial
                        </Link>
                        </li>
                    
                        <li className="mb-1">
                        <Link
                        href="/home"
                        className="hover:font-bold px-5 py-2 rounded-md text-md"
                        >
                        Sobre nós
                        </Link>
                        </li>
                   
                        <li className="mb-1">
                        <Link
                        href="/home"
                        className="hover:font-bold px-5 py-2 rounded-md text-md"
                        >
                        Manutenção
                        </Link>
                        </li>                    
                        <li className="mb-1">
                        <Link
                        href="/home"
                        className="hover:font-bold px-5 py-2 rounded-md text-md"
                        >
                        Produtos
                        </Link>
                        </li>
                    </ul>
                    </div>
                    
                    {/* informações da empresa */}
                    <div className="w-1/2">
                        <ul className="">
                            <li className="mb-2">
                                {"(11) 99912-0408"}
                            </li>
                            <li className="mb-2">
                                {"Rua Tungue, 164 - apto 12 Jardim Cidade Pirituba"}
                            </li>
                            <li className="mb-2">
                                {"marcos@soatos.com"}
                            </li>
                            <li className="mb-2">
                                {"www.soatos.com.br"}
                            </li>
                        </ul>
                    </div>
                    
                </div>
                {/* botão de contate-nos */}
                <div className="w-1/3 self-start text-center ">
                    <Button colorText="text-black" colorBg="bg-white" title="Entre em Contato"></Button>
                </div>
            </div>
        </footer>
    )
}