import { Button } from "./ui/button";
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { poppins, openSans } from "@/app/fonts/fonts";

import { Star } from "lucide-react";

import KollinLogo from '../app/assets/kollin-logo.svg'
import Kurs1 from '../app/assets/courses/kurs1.svg'

export default function Courses() {
    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col items-center gap-4">
                <h1 className={`${poppins.className} text-4xl font-semibold`}>Exempel på kurser</h1>
                <p className={`${openSans.className}`}>Slipp all tidskrävande administration. Med Kollin organiseras och struktureras kursernas <br />
                upplägg åt dig, så att du kan fokusera helt på inlärning och tentaförberedelser.</p>
                <section className="space-x-4">
                    <Button>Kom igång</Button>
                    <Button variant="secondary">Kurskatalog</Button>
                </section>
            </div>
            <Carousel className="w-[72rem]">
                <CarouselContent>
                    <CarouselItem className="basis-1/3">
                        <Card className="bg-sky-200">
                            <CardContent className="flex items-center justify-center">
                                <Image 
                                    className="relative top-6 bg-white rounded-xl p-2"
                                    src={Kurs1}
                                    alt="kurs1"
                                    width={120}
                                    priority
                                />
                            </CardContent>
                            <CardHeader>
                                <CardTitle className={`${poppins.className} text-xl inline-flex items-center`}>
                                    <Image
                                        className="mr-2"
                                        alt="Lollin Logo"
                                        src={KollinLogo}
                                        width={34}
                                    />
                                        School 1
                                </CardTitle>
                                <CardFooter className="text-2xl p-0 font-semibold">Envariabelanalys</CardFooter>
                                <div className="flex items-center">
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                </div>
                            </CardHeader>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <Card className="bg-sky-200">
                            <CardContent className="flex items-center justify-center">
                                <Image 
                                    className="relative top-6 bg-white rounded-xl p-2"
                                    src={Kurs1}
                                    alt="kurs1"
                                    width={120}
                                    priority
                                />
                            </CardContent>
                            <CardHeader>
                                <CardTitle className={`${poppins.className} text-xl inline-flex items-center`}>
                                    <Image
                                        className="cursor-pointer mr-2"
                                        alt="Lollin Logo"
                                        src={KollinLogo}
                                        width={34}
                                    />
                                        School 2
                                </CardTitle>
                                <CardFooter className="text-2xl p-0 font-semibold">Numeriska metoder</CardFooter>
                                <div className="flex items-center">
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                </div>
                            </CardHeader>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <Card className="bg-sky-200">
                            <CardContent className="flex items-center justify-center">
                                <Image 
                                    className="relative top-6 bg-white rounded-xl p-2"
                                    src={Kurs1}
                                    alt="kurs1"
                                    width={120}
                                    priority
                                />
                            </CardContent>
                            <CardHeader>
                                <CardTitle className={`${poppins.className} text-xl inline-flex items-center`}>
                                    <Image
                                        className="cursor-pointer mr-2"
                                        alt="Lollin Logo"
                                        src={KollinLogo}
                                        width={34}
                                    />
                                        School 3
                                </CardTitle>
                                <CardFooter className="text-2xl p-0 font-semibold">IT 70000 i månaden</CardFooter>
                                <div className="flex items-center">
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                </div>
                            </CardHeader>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <Card className="bg-sky-200">
                            <CardContent className="flex items-center justify-center">
                                <Image 
                                    className="relative top-6 bg-white rounded-xl p-2"
                                    src={Kurs1}
                                    alt="kurs1"
                                    width={120}
                                    priority
                                />
                            </CardContent>
                            <CardHeader>
                                <CardTitle className={`${poppins.className} text-xl inline-flex items-center`}>
                                    <Image
                                        className="cursor-pointer mr-2"
                                        alt="Lollin Logo"
                                        src={KollinLogo}
                                        width={34}
                                    />
                                        School 4
                                </CardTitle>
                                <CardFooter className="text-2xl p-0 font-semibold">Magi</CardFooter>
                                <div className="flex items-center">
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                </div>
                            </CardHeader>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <Card className="bg-sky-200">
                            <CardContent className="flex items-center justify-center">
                                <Image 
                                    className="relative top-6 bg-white rounded-xl p-2"
                                    src={Kurs1}
                                    alt="kurs1"
                                    width={120}
                                    priority
                                />
                            </CardContent>
                            <CardHeader>
                                <CardTitle className={`${poppins.className} text-xl inline-flex items-center`}>
                                    <Image
                                        className="cursor-pointer mr-2"
                                        alt="Lollin Logo"
                                        src={KollinLogo}
                                        width={34}
                                    />
                                        School 5
                                </CardTitle>
                                <CardFooter className="text-2xl p-0 font-semibold">Matematik</CardFooter>
                                <div className="flex items-center">
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                    <Star className="text-yellow-300 fill-yellow-300 mr-1" width={20}/>
                                </div>
                            </CardHeader>
                        </Card>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}