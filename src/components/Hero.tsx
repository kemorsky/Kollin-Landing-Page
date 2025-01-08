import { Button } from "./ui/button"
import { poppins, openSans } from "@/app/fonts/fonts";
import HeroImage from "../app/assets/hero-image.jpg"
import Image from "next/image"

export default function Hero() {
    return (
        <div className="xl:w-[80rem] w-[24rem] rounded-lg px-6 text-center flex justify-between items-center">
            <div className="flex flex-col items-start gap-4 self-center">
                <h1 className={`${poppins.className} text-headerClamp font-semibold text-left`}>Ta din inlärning till nästa nivå.</h1>
                <h2 className={`${openSans.className} xl:text-xl text-[1rem] text-left mb-4`}>Maximera dina studiepass med en plattform som är skapad för att ge <br />
                dig struktur, effektivitet och personlig anpassning - kurs efter kurs.</h2>
                <div className="flex xl:flex-row flex-col xl:items-center items-start justify-center gap-3">
                    <Button>Prova gratis nu</Button>
                    <Button variant="secondary">Demo</Button>
                </div>
            </div>
            <Image
                className="xl:h-[700px] h-[300px] xl:w-[500px] w-[220px] rounded-lg xl:self-end xl:block hidden"
                src={HeroImage}
                alt="Hero Image Pexels"
            />
        </div>
    )
}
