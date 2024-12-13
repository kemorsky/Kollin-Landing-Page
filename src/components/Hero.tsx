import { Button } from "./ui/button"
import { poppins, openSans } from "@/app/fonts/fonts";
import HeroImage from "../app/assets/hero-image.jpg"
import Image from "next/image"

export default function Hero() {
    return (
        <div className="xl:w-[80rem] rounded-lg px-6 text-center flex justify-between align-center">
            <div className="flex flex-col items-start gap-4 self-center">
                <h1 className={`${poppins.className} text-4xl font-semibold`}>Ta din inlärning till nästa nivå.</h1>
                <h2 className={`${openSans.className} text-xl text-left mb-4`}>Maximera dina studiepass med en plattform som är skapad för att ge <br /> 
                dig struktur, effektivitet och personlig anpassning - kurs efter kurs.</h2>
                <div className="flex items-center justify-center gap-3">
                    <Button>Prova gratis nu</Button>
                    <Button variant="secondary">Demo</Button>
                </div>
            </div>
            <Image 
                className="h-[700px] w-[500px] rounded-lg self-end"
                src={HeroImage}
                alt="Hero Image Pexels"
            />
        </div>
    )
}
