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
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Courses() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col">
                <h1 className="text-5xl">Exempel på kurser</h1>
                <p>Slipp all tidskrävande administration. Med Kollin organiseras och struktureras kursernas <br />
                upplägg åt dig, så att du kan fokusera helt på inlärning och tentaförberedelser.</p>
                <section>
                    <Button>Kom igång</Button>
                    <Button variant="secondary">Kurskatalog</Button>
                </section>
            </div>
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
    );
}