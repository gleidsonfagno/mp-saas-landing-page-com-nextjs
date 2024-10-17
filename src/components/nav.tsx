"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return(
        <div className=" max-w-[1352px] m-auto">
          <nav className="flex justify-between items-center pt-4 pb-16 sm:pt-10 sm:pb-20">
            <a href="#" title="Ir para a página inicial">
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
                  <Image
                src="/assets/Men-Icon.png"
                width={25.4}
                height={87}
                alt="logo"
              />
              </button>
            </div>

            <div className=" items-center gap-6 hidden md:flex">
              <a href="#funcionamento" title="Ir para a secao Funcionamento">
                Funcionamento
              </a>
              <a href="#" title="Ir para a secao Funcionamento">
                Preço
              </a>
              <Button type="submit">Login</Button>
            </div>

            {isOpen && (
            <div className="absolute bottom-0 top-0 left-0 right-0 w-100vw sm:left-[50%] h-100vh bg-gray-600 text-white flex flex-col items-start justify-center gap-5 p-5">

              <div className="flex flex-col items-start gap-5">
              <a href="#funcionamento" title="Ir para a secao Funcionamento">
                Funcionamento
              </a>
              <a href="#" title="Ir para a secao Funcionamento">
                Preço
              </a>
              <Button type="submit" >Login</Button>
            </div>

              <button 
                onClick={toggleMenu}
                aria-label="Abrir Menu">
                  <Image
                src="/assets/Men-Icon.png"
                width={25.4}
                height={87}
                alt="logo"
              />
              </button>
              
            </div>
          )}
          </nav>
        </div>
    )
}