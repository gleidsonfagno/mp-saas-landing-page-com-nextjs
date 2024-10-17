import Nav from "@/components/nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="bg-[url('/assets/Background.svg')] bg-cover bg-center  p-4 ">
        <Nav />

        <section className="flex flex-col gap-16 items-center sm:pb-32 pb-12">
          <div className="flex flex-col text-center max-w-[827px] m-auto gap-2">
            <h1 className="text-2xl sm:text-6xl font-bold">
              Simplifique Seus Estudo
            </h1>
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
              Comece sua assinatura agora mesmo. Cancele quando quiser.
            </p>
          </div>
        </section>
      </header>

      <section>
        <div className="max-w-[900px] m-auto flex flex-col text-center p-4 sm:pt-[38px] sm:pb-[86px] pb-14 pt-14">
          <h2 className="text-2xl sm:text-[40px] font-bold p-2">
            Como funciona?
          </h2>

          <div className="flex items-center justify-between ">
            <Image
              src="/assets/woman.svg"
              width={392}
              height={392}
              alt="logo"
              className="block w-full max-w-[130px] sm:max-w-[270px] lg:max-w-[393px]"
            />

            <div className="flex flex-col gap-4 sm:gap-9 max-w-[446.57px] items-end justify-center text-3xl text-zinc-400 font-normal">
              <div className="flex gap-4 items-center justify-between sm:gap-16">
                <p className="text-xs sm:text-3xl text-zinc-400 font-normal">
                  Acesso a 1 ebook por mês
                </p>
                <div>
                  <Image
                    src="/assets/check.svg"
                    width={21.15}
                    height={15.78}
                    alt="logo"
                     className="block w-full sm:max-w-[21px] max-w-4"
                  />
                </div>
              </div>

              <div className="flex gap-4 items-center justify-between sm:gap-16">
                <p className="text-xs sm:text-3xl text-zinc-400 font-normal">
                  Curadoria especial
                </p>
                <div>
                  <Image
                    src="/assets/check.svg"
                    width={21.15}
                    height={15.78}
                    alt="logo"
                     className="block w-full sm:max-w-[21px] max-w-4"
                  />
                </div>
              </div>
              <div className="flex gap-4 items-center justify-between sm:gap-16">
                <p className="text-xs sm:text-3xl text-zinc-400 font-normal">
                  Cancele quando quiser
                </p>
                <div>
                  <Image
                    src="/assets/check.svg"
                    width={21.15}
                    height={15.78}
                    alt="logo"
                     className="block w-full sm:max-w-[21px] max-w-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
