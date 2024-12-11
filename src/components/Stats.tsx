import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Stats() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold">Upptäck kraften i kollektiv intelligens</h1>
            <div className="flex items-center justify-around">
                <Card className="w-[14rem] bg-blue-200 bg-opacity-80">
                    <CardHeader>
                        <CardTitle className="text-5xl">24K+</CardTitle>
                        <CardDescription>
                            studenter har använt Kollin och bidragit med <br />
                            insikter som du kan dra nytta av idag.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-[14rem]">
                    <CardHeader>
                        <CardTitle className="text-5xl">1M+</CardTitle>
                        <CardDescription>
                            självskattade övningar som berikar allt material <br />
                            du får eller laddar upp i plattformen.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-[14rem]">
                    <CardHeader>
                        <CardTitle className="text-5xl">600+</CardTitle>
                        <CardDescription>
                            studenter har använt Kollin och bidragit med <br />
                            insikter som du kan dra nytta av idag.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-[14rem]">
                    <CardHeader>
                        <CardTitle className="text-5xl">18M+</CardTitle>
                        <CardDescription>
                            studenter har använt Kollin och bidragit med <br />
                            insikter som du kan dra nytta av idag.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}