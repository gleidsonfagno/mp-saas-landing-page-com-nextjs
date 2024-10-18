"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
      // setIsOpen
      console.log(isOpen)
    };


    // if(isOpen)
    useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth > 725) {
              setIsOpen(false);
          }
      };

      // Adiciona o evento de redimensionamento da janela
      window.addEventListener('resize', handleResize);

      // Remove o evento de redimensionamento ao desmontar o componente
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

    
    return(
        <div className=" max-w-[1352px] m-auto">
          <nav className="flex justify-between items-center pt-4 pb-16 sm:pt-10 sm:pb-20">
            <a href="/" title="Ir para a página inicial">
              <Image
                src="/assets/Logo.svg"
                width={129}
                height={87}
                alt="logo"
              />
            </a>

            <div className="md:hidden">
              <button
              aria-label="Abrir Menu"
                onClick={toggleMenu}>
              <TfiAlignJustify className="w-6 h-6" />
              </button>
            </div>

            <div className=" items-center gap-6 hidden md:flex">
              <a href="#funcionamento" title="Ir para a secao Funcionamento">
                Funcionamento
              </a>
              <a href="#preco" title="Ir para a secao preco">
                Preço
              </a>
              <Button variant="ghost" type="submit">Login</Button>
            </div>

            {isOpen && (
            <div className="absolute bottom-0 top-0 left-0 right-0 w-100vw sm:left-[50%] h-100vh bg-gray-400 text-white flex flex-col items-start justify-center gap-5 p-5 z-10">

              <div className="flex flex-col items-start gap-5">
              <a href="#funcionamento" onClick={toggleMenu} title="Ir para a secao Funcionamento">
                Funcionamento
              </a>
              <a href="#preco" onClick={toggleMenu} title="Ir para a secao preco">
                Preço
              </a>
              <Button variant="secondary" type="submit">Login</Button>
            </div>

              <button 
                onClick={toggleMenu}
                aria-label="Abrir Menu">              
              <TfiClose className="w-6 h-6" />

              </button>
              
            </div>
          )}
          </nav>
        </div>
    )
}