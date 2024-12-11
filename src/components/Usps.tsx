import { Button } from "./ui/button"
import Image from "next/image"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Usps() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="4xl">Vad du får med Kollin</h1>
            <div className="flex items-center justify-center">
                <Card>
                    <CardHeader>
                        <CardTitle>24K+</CardTitle>
                        <CardDescription>
                            studenter har använt Kollin och bidragit med <br />
                            insikter som du kan dra nytta av idag.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>24K+</CardTitle>
                        <CardDescription>
                            studenter har använt Kollin och bidragit med <br />
                            insikter som du kan dra nytta av idag.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>24K+</CardTitle>
                        <CardDescription>
                            studenter har använt Kollin och bidragit med <br />
                            insikter som du kan dra nytta av idag.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>24K+</CardTitle>
                        <CardDescription>
                            studenter har använt Kollin och bidragit med <br />
                            insikter som du kan dra nytta av idag.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
            <div>
                <Button>Kom igång direkt</Button>
                <Button variant="secondary">Kom igång direkt</Button>
            </div>
        </div>
    )
}