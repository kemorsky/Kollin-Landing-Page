"use client"
import { useState, useEffect } from "react";

import Image from "next/image"

import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";

import { Button } from "./ui/button"
import { type CarouselApi } from "@/components/ui/carousel"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselDots
  } from "@/components/ui/carousel";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"

import Person1 from "../app/assets/people/Ida.webp"
import Person2 from "../app/assets/people/Ida_Leufve__n_-_Kollin_002.webp"
import Person3 from "../app/assets/people/Milton_Larsson.webp"
import Person4 from "../app/assets/people/image5_002.webp"
import Person5 from "../app/assets/people/sofia_flyg_002.webp"

export default function Testimonials() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
          return
        }
        setCurrent(api.selectedScrollSnap())
     
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap())
        })
      }, [api]);

    return (
        <div className="flex flex-col items-center gap-6 px-16 w-full">
            <h1 className='font-[Poppins] text-4xl self-start font-semibold'>Vad andra studenter säger</h1>
            <Carousel setApi={setApi} className='w-[72rem] bg-white rounded-xl'>
                <div className="flex flex-col items-start justify-center px-4">
                    <div className="flex items-center justify-between w-[48%]">
                    <div className="text-blue-500">
                        {`0${current + 1}/0${api?.slideNodes().length}`}
                    </div>
                        <div className="flex items-center justify-center">
                            <Button variant="testimonies" onClick={() => api?.scrollTo(current -1)}>< ArrowLeft /></Button>
                            <Button variant="testimonies" onClick={() => api?.scrollTo(current +1)}>< ArrowRight /></Button>
                        </div>
                    </div>
                    <CarouselDots />
                </div>
                <CarouselContent>
                    <CarouselItem className="flex justify-around items-center py-2">
                        <Card className="h-[416px] flex items-center">
                            <CardContent className="text-4xl">
                                “Lorem ipsum dolor sit <br /> amet, consectetur adipiscing <br /> elit.
                                Proin justo dolor,  <br /> tempor quis posuere in,  <br /> pellentesque a nulla.”
                                <CardFooter className="text-2xl p-0 mt-8">
                                    <article>
                                        <p>Jane Doe</p>
                                        <p className="text-[1rem]">Student</p>
                                    </article>
                                </CardFooter>
                            </CardContent>
                        </Card>
                        <Image 
                                className="bg-blue-100 relative rounded-xl"
                                src={Person1}
                                alt="person"
                                width={500}
                                height={450}
                                priority
                            />
                    </CarouselItem>
                    <CarouselItem className="flex justify-around items-center py-8">
                        <Card className="h-[416px] flex items-center">
                            <CardContent className="text-4xl">
                                “Lorem ipsum dolor sit <br /> amet, consectetur adipiscing <br /> elit.
                                Proin justo dolor,  <br /> tempor quis posuere in,  <br /> pellentesque a nulla.”
                                <CardFooter className="text-2xl p-0 mt-8">
                                    <article>
                                        <p>Jenn Though</p>
                                        <p className="text-[1rem]">Student</p>
                                    </article>
                                </CardFooter>
                            </CardContent>
                        </Card>
                        <Image 
                                className="bg-blue-100 relative rounded-xl"
                                src={Person2}
                                alt="person"
                                width={500}
                                height={450}
                                priority
                            />
                    </CarouselItem>
                    <CarouselItem className="flex justify-around items-center py-8">
                        <Card className="h-[416px] flex items-center">
                            <CardContent className="text-4xl">
                                “Lorem ipsum dolor sit <br /> amet, consectetur adipiscing <br /> elit.
                                Proin justo dolor,  <br /> tempor quis posuere in,  <br /> pellentesque a nulla.”
                                <CardFooter className="text-2xl p-0 mt-8">
                                    <article>
                                        <p>John Doe</p>
                                        <p className="text-[1rem]">Student</p>
                                    </article>
                                </CardFooter>
                            </CardContent>
                        </Card>
                        <Image 
                                className="bg-blue-100 relative rounded-xl"
                                src={Person3}
                                alt="person"
                                width={500}
                                height={450}
                                priority
                            />
                    </CarouselItem>
                    <CarouselItem className="flex justify-around items-center py-8">
                        <Card className="h-[416px] flex items-center">
                            <CardContent className="text-4xl">
                                “Lorem ipsum dolor sit <br /> amet, consectetur adipiscing <br /> elit.
                                Proin justo dolor,  <br /> tempor quis posuere in,  <br /> pellentesque a nulla.”
                                <CardFooter className="text-2xl p-0 mt-8">
                                    <article>
                                        <p>Miss Ing</p>
                                        <p className="text-[1rem]">Student</p>
                                    </article>
                                </CardFooter>
                            </CardContent>
                        </Card>
                        <Image 
                                className="bg-blue-100 relative rounded-xl"
                                src={Person4}
                                alt="person"
                                width={500}
                                height={450}
                                priority
                            />
                    </CarouselItem>
                    <CarouselItem className="flex justify-around items-center py-8">
                        <Card className="h-[416px] flex items-center">
                            <CardContent className="text-4xl">
                                “Lorem ipsum dolor sit <br /> amet, consectetur adipiscing <br /> elit.
                                Proin justo dolor,  <br /> tempor quis posuere in,  <br /> pellentesque a nulla.”
                                <CardFooter className="text-2xl p-0 mt-8">
                                    <article>
                                        <p>Joan Dough</p>
                                        <p className="text-[1rem]">Student</p>
                                    </article>
                                </CardFooter>
                            </CardContent>
                        </Card>
                        <Image 
                                className="bg-blue-100 relative rounded-xl"
                                src={Person5}
                                alt="person"
                                width={500}
                                height={450}
                                priority
                            />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    );
}