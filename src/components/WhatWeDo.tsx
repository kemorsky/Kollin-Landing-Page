'use client'
import { Button } from "./ui/button"
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"

import Image1 from "../../public/images/what-we-do-carousel/section_1.webp"
import Image2 from "../../public/images/what-we-do-carousel/section_2.webp"
import Image3 from "../../public/images/what-we-do-carousel/section_4.webp"

import School1 from '../../public/images/what-we-do-carousel/10_004.webp'
import School2 from '../../public/images/what-we-do-carousel/2_004.webp'
import School3 from '../../public/images/what-we-do-carousel/5_006.webp'
import School4 from '../../public/images/what-we-do-carousel/6_006.webp'
import School5 from '../../public/images/what-we-do-carousel/7_006.webp'

export default function WhatWeDo() {
    return (
        <div className="md:p-4 w-full intersect-once intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100">
            <div className="flex flex-col items-center justify-center gap-12">
                <section className="flex flex-col md:flex-row items-center justify-around gap-6 w-full p-4">
                    <Carousel className="w-[22rem] md:w-[30rem]"
                                plugins={[
                                    Autoplay({
                                    delay: 2000,    
                                    })
                                ]}>
                        <CarouselContent>
                            <CarouselItem>
                                <Card className="bg-white">
                                    <CardContent className="overflow-hidden w-full h-full rounded-lg bg-cover bg-no-repeat"
                                                    style={{backgroundImage: `url(${Image1.src})`, height: '350px'}}>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                            <CarouselItem>
                                <Card className="bg-white">
                                    <CardContent className="overflow-hidden w-full h-full rounded-lg bg-cover bg-no-repeat"
                                                    style={{backgroundImage: `url(${Image2.src})`, height: '350px'}}>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                            <CarouselItem>
                                <Card className="bg-white">
                                    <CardContent className="overflow-hidden w-full h-full rounded-lg bg-cover bg-no-repeat"
                                                    style={{backgroundImage: `url(${Image3.src})`, height: '350px'}}>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                    <section className="inline-flex flex-col items-start justify-center">
                        <h1 className='font-[Poppins] text-4xl font-semibold py-2'>Plugga smartare, inte hårdare.</h1>
                        <ul>
                            <li className="">• <strong>Organisera </strong>allt ditt material automatiskt, berikat med insikter <br />
                            och statistik från tusentals toppstudenter</li>
                            <li className="">• <strong>Optimera </strong>varje studiepass med verktyg som hjälper dig <br />
                            förbättra dina prestationer och nå dina mål snabbare</li>
                            <li className="">• <strong>Personalisera </strong>dina övningar med hjälp av vår avancerade AI, <br />
                            som följer dina styrkor och svagheter inom varje kurs.</li>
                        </ul>
                        <Button className="mt-2">Läs mer</Button>
                    </section>
                </section>
                <Carousel className="px-4 lg:px-0 w-full max-w-[73rem]">
                    <CarouselContent>
                        <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
                            <Card className="rounded-lg overflow-hidden cursor-pointer relative">
                                <CardContent className="rounded-lg bg-cover bg-center hover:scale-110 transition-all duration-200"
                                            style={{backgroundImage: `url(${School1.src})`, height: '250px'}}>
                                </CardContent>
                                <CardHeader className="absolute z-20 bottom-0 w-full p-4 rounded-lg backdrop-blur-sm">
                                    <CardTitle className="text-[1.2rem] md:text-2xl text-white">Kungliga Tekniska högskolan</CardTitle>
                                </CardHeader>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
                            <Card className="rounded-lg overflow-hidden cursor-pointer relative">
                                <CardContent className="rounded-lg bg-cover bg-center hover:scale-110 transition-all duration-200"
                                            style={{backgroundImage: `url(${School2.src})`, height: '250px'}}>
                                </CardContent>
                                <CardHeader className="absolute z-20 bottom-0 w-full p-4 rounded-lg backdrop-blur-sm">
                                    <CardTitle className="text-[1.2rem] md:text-2xl text-white">Linköpings universitet</CardTitle>
                                </CardHeader>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
                            <Card className="rounded-lg overflow-hidden cursor-pointer relative">
                                <CardContent className="rounded-lg bg-cover bg-center hover:scale-110 transition-all duration-200"
                                            style={{backgroundImage: `url(${School3.src})`, height: '250px'}}>
                                </CardContent>
                                <CardHeader className="absolute z-20 bottom-0 w-full p-4 rounded-lg backdrop-blur-sm">
                                    <CardTitle className="text-[1.2rem] md:text-2xl text-white">Chalmers tekniska högskola</CardTitle>
                                </CardHeader>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
                            <Card className="rounded-lg overflow-hidden cursor-pointer relative">
                                <CardContent className="rounded-lg bg-cover bg-center hover:scale-110 transition-all duration-200"
                                            style={{backgroundImage: `url(${School4.src})`, height: '250px'}}>
                                </CardContent>
                                <CardHeader className="absolute z-20 bottom-0 w-full p-4 rounded-lg backdrop-blur-sm">
                                    <CardTitle className="text-[1.2rem] md:text-2xl text-white">Göteborg Universitet</CardTitle>
                                </CardHeader>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
                            <Card className="rounded-lg overflow-hidden cursor-pointer relative">
                                <CardContent className="rounded-lg bg-cover bg-center hover:scale-110 transition-all duration-200"
                                            style={{backgroundImage: `url(${School5.src})`, height: '250px'}}>
                                </CardContent>
                                <CardHeader className="absolute z-20 bottom-0 w-full p-4 rounded-lg backdrop-blur-sm">
                                    <CardTitle className="text-[1.2rem] md:text-2xl text-white">Uppsala Universitet</CardTitle>
                                </CardHeader>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}