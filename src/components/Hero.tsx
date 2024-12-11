import Image from "next/image"
import { Button } from "./ui/button"

export default function Hero() {
    return (
        <div className="flex flex-col items-start gap-2 py-8 px-4 bg-blue-900 xl:w-[80rem]">
            <Image
                className="relative overflow-hidden w-full"
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />
            <h1 className="text-5xl">Ta din inlärning till nästa nivå.</h1>
            <h2>Maximera dina studiepass med en plattform som är skapad för att ge <br />
            dig struktur, effektivitet och personlig anpassning – kurs efter kurs.</h2>
            <div className="flex items-center justify-center gap-3">
                <Button>Prova gratis nu</Button>
                <Button variant="secondary">Demo</Button>
            </div>
        </div>
    )
}