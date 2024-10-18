import AnimatedSection from "@/components/AnimatedSection";
import Nav from "@/components/nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="bg-[url('/assets/Background.svg')] bg-cover bg-center  p-4 ">
        <Nav />

        <AnimatedSection
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
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

        </AnimatedSection>
      </header>

      <section id="funcionamento">
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

      <section
        id="preco"
        className="bg-[url('/assets/Background.svg')] bg-cover bg-center sm:pt-[119px] pt-[57px] sm:pb-[129px] pb-[83px]"
      >
        <div className=" max-w-[900px] m-auto flex flex-col sm:gap-[74px] gap-[47px] md:p-0 px-4">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl sm:text-6xl font-bold text-center">
              Preço Simples e Transparente
            </h2>

            <p className="text-xs sm:text-xl text-zinc-400 font-normal text-center">
              Pra que inúmeros planos quando nós sabemos exatamente o que é
              melhor para você? Assine o nosso plano mensal Pro Premium VIP e
              garanta mensalmente um ebook novo de programação. E por menos de
              um café por dia.
            </p>
          </div>

          <div className="flex justify-center space-x-6 ">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-sm border border-gray-200 gap-10">
              <div className="flex flex-col gap-3">
                <h2 className="sm:text-2xl  text-xl font-semibold text-start">
                  Plano Pro Premium VIP
                </h2>
                <p className="sm:text-sm text-sm text-zinc-400">
                  Tudo que você precisa para seus estudos
                </p>
              </div>
              <p className="sm:text-xl text-base text-gray-500 text-start my-4">
                <strong className="sm:text-4xl text-2xl font-semibold text-black">
                  R$29
                </strong>
                /mês
              </p>
              <ul className="mb-6">
                <li className="flex gap-4 text-gray-400 text-sm my-2 items-center">
                  <span>
                    <Image
                      src="/assets/check.svg"
                      width={21.15}
                      height={15.78}
                      alt="logo"
                      className="block w-full sm:max-w-[13px] max-w-4"
                    />
                  </span>
                  1 ebook por mês
                </li>
                <li className="flex gap-4 text-gray-400 text-sm my-2 items-center">
                  <span>
                    <Image
                      src="/assets/check.svg"
                      width={21.15}
                      height={15.78}
                      alt="logo"
                      className="block w-full sm:max-w-[13px] max-w-4"
                    />
                  </span>
                  Curadoria especial
                </li>
                <li className="flex gap-4 text-gray-400 text-sm my-2 items-center">
                  <span>
                    <Image
                      src="/assets/check.svg"
                      width={21.15}
                      height={15.78}
                      alt="logo"
                      className="block w-full sm:max-w-[13px] max-w-4"
                    />
                  </span>
                  Acesso ilimitado
                </li>
                <li className="flex gap-4 text-gray-400 text-sm my-2 items-center">
                  <span>
                    <Image
                      src="/assets/check.svg"
                      width={21.15}
                      height={15.78}
                      alt="logo"
                      className="block w-full sm:max-w-[13px] max-w-4"
                    />
                  </span>
                  Cancele a qualquer momento
                </li>
              </ul>
              <Button className="w-full">Assine Agora</Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[900px] m-auto sm:gap-[74px] gap-6 px-4 flex flex-col sm:pt-[108px] sm:pb-[79px] py-14">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-4xl sm:text-6xl font-bold text-center">
              Pronto Para Mudar Sua Vida?
            </h2>
            <p className="text-xs sm:text-xl text-zinc-400 font-normal text-center">
              Faça como milhares de outras pessoas. Assine nosso produto e tenha
              garantido seus estudos
            </p>
          </div>

          <div className="max-w-[517px] display flex flex-col m-auto  sm:gap-2">
            <Button className="w-full">Assine Agora</Button>
            <p className="text-xs text-zinc-400 font-normal text-center p-2">
              Comece sua assinatura agora mesmo. Cancele quando quiser.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="flex  flex-col gap-1 justify-center items-center sm:pb-12  pb-9">
          <a href="/" title="Ir para a página inicial">
            <Image src="/assets/Logo.svg" width={129} height={87} alt="logo" />
          </a>

          <p className="text-xs text-zinc-400 font-normal text-center">
            © 2024 LivroSaaS. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
