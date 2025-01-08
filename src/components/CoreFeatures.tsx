import Image from "next/image";
import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";
import { poppins, openSans } from "@/app/fonts/fonts";

import CoreFeaturesImage from '../app/assets/core-features-photo.jpg'

export default function Features() {
    return (
        <div className="flex justify-around px-10">
            <section className="w-[50%] gap-4 intersect-once intersect:motion-opacity-in-0 intersect:motion-translate-x-in-[-100%]">
                <h1 className={`${poppins.className} text-4xl mb-4 font-semibold`}>Nyckelfunktioner</h1>
                <ul>
                    <span className={`${openSans.className} inline-flex items-center mb-2`}>
                        <CheckCircle2
                            className="w-8 text-blue-500 mr-2"
                        />
                        <li><strong>En komplett plattform. </strong>Samla allt kursmaterial, övningar
                        och tentor i Kollins interaktiva och användarvänliga plattform.</li>
                    </span>
                    <span className={`${openSans.className} inline-flex items-center mb-2`}>
                        <CheckCircle2
                            className="w-8 text-blue-500 mr-2"
                        />
                        <li><strong>Kollins AI - KAI. </strong>Maximera din inlärning med en AI som är
                        specifikt utvecklad och tränad för ingenjörsstudier.</li>
                    </span>
                    <span className={`${openSans.className} inline-flex items-center mb-2`}>
                        <CheckCircle2
                            className="w-8 text-blue-500 mr-2"
                        />
                        <li><strong>Vetenskapligt beprövade studiemetoder. </strong>Få studiemetoder
                        som är baserade på forskning och bevisat effektiva.</li>
                    </span>
                    <span className={`${openSans.className} inline-flex items-center mb-4`}>
                        <CheckCircle2
                            className="w-8 text-blue-500 mr-2"
                        />                        
                        <li><strong>Interaktivt kursinnehåll och automatiserad strukturering. </strong>
                        Systemet strukturerar dina valda och uppladdade dokument.</li>
                    </span>
                </ul>
                <Button>Fler funktioner</Button>
            </section>
            <Image 
                className="bg-center bg-none rounded-lg overflow-hidden intersect-once intersect:motion-opacity-in-0 intersect:motion-translate-x-in-100"
                src={CoreFeaturesImage}
                alt="Core features"
                width={520}
                height={120}
                priority
            />
        </div>
    )
}