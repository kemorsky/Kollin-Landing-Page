import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Stats() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-8 intersect-once intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100">
            <h1 className="w-[85%] font-[Poppins] text-left md:text-center text-3xl md:text-4xl font-semibold">Upptäck kraften i kollektiv intelligens</h1>
            <div className="flex items-center flex-wrap gap-4 md:gap-6 justify-center w-[85%]">
                <Card className="w-[14rem] bg-blue-200 bg-opacity-70">
                    <CardHeader>
                        <CardTitle className="font-[Poppins] text-5xl font-bold text-blue-500 mb-4">24K+</CardTitle>
                        <CardDescription className="text-black font-semibold">
                            studenter har använt Kollin och bidragit med <br />
                            insikter som du kan dra nytta av idag.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-[14rem] bg-blue-200 bg-opacity-70">
                    <CardHeader>
                        <CardTitle className="font-[Poppins] text-5xl font-bold text-blue-500 mb-4">1M+</CardTitle>
                        <CardDescription className="text-black font-semibold">
                            självskattade övningar som berikar allt material <br />
                            du får eller laddar upp i plattformen.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-[14rem] bg-blue-200 bg-opacity-70">
                    <CardHeader>
                        <CardTitle className="font-[Poppins] text-5xl font-bold text-blue-500 mb-4">600+</CardTitle>
                        <CardDescription className="text-black font-semibold">
                            studenter har använt Kollin och bidragit med <br />
                            insikter som du kan dra nytta av idag.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-[14rem] bg-blue-200 bg-opacity-70">
                    <CardHeader>
                        <CardTitle className="font-[Poppins] text-5xl font-bold text-blue-500 mb-4">18M+</CardTitle>
                        <CardDescription className="text-black font-semibold">
                            studenter har använt Kollin och bidragit med <br />
                            insikter som du kan dra nytta av idag.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}