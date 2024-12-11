import Image from "next/image"
import { Button } from "./ui/button"
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
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function WhatWeDo() {
    return (
        <div className="bg-orange-700 p-4 xl:w-[80rem]">
            <div className="flex flex-col items-center justify-center">
                <section className="flex items-center justify-around w-full p-4 mb-4">
                    <Image 
                        className="dark:invert bg-blue-100"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={520}
                        height={120}
                        priority
                    />
                    <section>
                        <h1 className="text-4xl font-semibold">Plugga smartare, inte hårdare.</h1>
                        <ul>
                            <li className="p-1">Organisera allt ditt material automatiskt, berikat med insikter <br />
                            och statistik från tusentals toppstudenter</li>
                            <li className="p-1">Optimera varje studiepass med verktyg som hjälper dig <br />
                            förbättra dina prestationer och nå dina mål snabbare</li>
                            <li className="p-1">Personalisera dina övningar med hjälp av vår avancerade AI, <br />
                            som följer dina styrkor och svagheter inom varje kurs.</li>
                        </ul>
                        <Button className="mt-2">Läs mer</Button>
                    </section>
                </section>
                <Carousel className="w-[72rem]">
                    <CarouselContent>
                        <CarouselItem className="basis-1/4">
                            <Card>
                                <CardContent>
                                    <Image 
                                        className="dark:invert bg-blue-100 relative"
                                        src="/next.svg"
                                        alt="Next.js logo"
                                        width={400}
                                        height={300}
                                        priority
                                    />
                                </CardContent>
                                <CardHeader>
                                    <CardTitle className="text-2xl">Kungliga Tekniska högskolan </CardTitle>
                                </CardHeader>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Kungliga Tekniska högskolan </CardTitle>
                                    <CardDescription>Card Description</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Card Content</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Card Footer</p>
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Kungliga Tekniska högskolan </CardTitle>
                                    <CardDescription>Card Description</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Card Content</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Card Footer</p>
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Kungliga Tekniska högskolan </CardTitle>
                                    <CardDescription>Card Description</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Card Content</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Card Footer</p>
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Kungliga Tekniska högskolan </CardTitle>
                                    <CardDescription>Card Description</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Card Content</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Card Footer</p>
                                </CardFooter>
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