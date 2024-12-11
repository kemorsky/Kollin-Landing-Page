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

export default function Testimonials() {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-5xl">Testimonials</h1>
            <Carousel className="w-[72rem]">
                <CarouselContent>
                    <CarouselItem className="flex justify-center items-center">
                        <Card>
                            <CardContent className="text-4xl">
                            “Lorem ipsum dolor sit
                                amet, consectetur
                                adipiscing elit. Proin
                                justo dolor, tempor quis
                                posuere in, pellentesque
                                a nulla.”
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                        <Image 
                                className="dark:invert bg-blue-100 relative"
                                src="/next.svg"
                                alt="Next.js logo"
                                width={400}
                                height={300}
                                priority
                        />
                    </CarouselItem>
                    <CarouselItem className="">
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
                    <CarouselItem className="">
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
                    <CarouselItem className="">
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
                    <CarouselItem className="">
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