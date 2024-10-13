"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-[url('/assets/Background.svg')] bg-cover bg-center h-screen p-4 ">
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

        <section className="flex flex-col gap-16 items-center">
          <div className="flex flex-col text-center max-w-[827px] m-auto gap-2">
            <h1 className="text-2xl sm:text-6xl font-bold">Simplifique Seus Estudo</h1>
            <p className="text-xs sm:text-xl text-zinc-400 font-normal">
              Deixe que nós fazemos a curadoria para você. Assine nossa
              plataforma e receba todos os meses um ebook novo de programação.
            </p>
          </div>

          <div>
            <div className="flex w-full max-w-sm items-center space-x-2 ">
              <Input type="email" placeholder="Coloque seu email" />
              <Button type="submit">Assine Agora</Button>
            </div>

            <p className="text-[10px] text-center font-light text-zinc-400 pt-7 sm:pt-3 ">
              Comece sua assinatura agora mesmo. Cancele quando quiser.{" "}
            </p>
          </div>
        </section>
      </header>

     
    </>
  );
}
