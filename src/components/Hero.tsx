import { Button } from "./ui/button"
import HeroImage from "../app/assets/hero-image.jpg"
import Image from "next/image"

export default function Hero() {
    return (
        <div className="w-full rounded-lg px-6 text-center inline-flex justify-between items-center">
            <div className="flex flex-col items-start gap-4 self-center">
                <h1 className='font-[Poppins] max-w-[35rem] text-headerClamp font-semibold text-left md:motion-opacity-in-0 md:motion-translate-y-in-[-100%] md:motion-blur-in-md'>Ta din inlärning till nästa nivå.</h1>
                <h2 className='lg:text-xl text-[1rem] text-left mb-4 xl:motion-opacity-in-0 xl:motion-translate-y-in-100 xl:motion-blur-in-md'>
                    Maximera dina studiepass med en plattform som är skapad för att ge <br />
                    dig struktur, effektivitet och personlig anpassning - kurs efter kurs.
                </h2>
                <div className="flex lg:items-center items-start justify-center gap-3 xl:motion-opacity-in-0 xl:motion-translate-y-in-100 xl:motion-blur-in-md">
                    <Button className="animate-out fade-in-25">Prova gratis nu</Button>
                    <Button variant="secondary">Demo</Button>
                </div>
            </div>
            <Image
                className="max-h-[700px] h-full max-w-[500px] w-full rounded-lg lg:self-end md:block hidden md:motion-opacity-in-30 md:motion-scale-x-in-75 md:motion-scale-y-in-75"
                src={HeroImage}
                alt="Hero Image Pexels"
            />
        </div>
    )
}
