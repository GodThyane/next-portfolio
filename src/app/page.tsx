import Image from "next/image";
import MainTransition from "@/components/transition/mainTransition";
import Link from "next/link";

export default function Home() {
    return (
        <MainTransition>
            <div
                className="h-full overflow-scroll sm:overflow-hidden flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                {/*IMAGE CONTAINER*/}
                <div className="h-1/5 sm:h-1/2 lg:h-full lg:w-1/2 relative">
                    <Image src="/hero.png" alt="" fill className="object-contain"/>
                </div>
                {/*TEXT CONTAINER*/}
                <div className="h-4/5 sm:h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
                    {/*TITLE*/}
                    <h1 className="text-4xl md:text-6xl font-bold">Forjando Experiencias Digitales del Futuro con
                        Arquitecturas Innovadoras</h1>
                    {/*DESC*/}
                    <p className="md:text-xl"> Como arquitecto de backend con una visión integral, me apasiona crear
                        experiencias digitales que inspiren y transformen. Mi enfoque meticuloso en la eficiencia y la
                        escalabilidad me permite diseñar sistemas sólidos que anticipan las necesidades del negocio.</p>
                    {/*BUTTONS*/}
                    <div className="w-full flex gap-4">
                        <Link href="/portfolio">
                            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">Mira mi trabajo
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="p-4 rounded-lg ring-1 ring-black">Contáctame</button>
                        </Link>
                    </div>
                </div>
            </div>
        </MainTransition>
    );
}
