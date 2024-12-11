import Image from "next/image";
import { Button } from "./ui/button";


export default function Features() {
    return (
        <div className="flex justify-between">
            <section className="w-[50%]">
                <h1 className="text-4xl">Nyckelfunktioner</h1>
                <ul>
                    <li>En komplett plattform. Samla allt kursmaterial, övningar
                    och tentor i Kollins interaktiva och användarvänliga plattform.</li>
                    <li>Kollins AI - KAI. Maximera din inlärning med en AI som är
                    specifikt utvecklad och tränad för ingenjörsstudier.</li>
                    <li>Vetenskapligt beprövade studiemetoder. Få studiemetoder
                    som är baserade på forskning och bevisat effektiva.</li>
                    <li>Interaktivt kursinnehåll och automatiserad strukturering.
                    Systemet strukturerar dina valda och uppladdade dokument.</li>
                    <Button>Fler funktioner</Button>
                </ul>
            </section>
            <Image 
                className="dark:invert bg-blue-100"
                src="/next.svg"
                alt="Next.js logo"
                width={520}
                height={120}
                priority
            />
        </div>
    )
}