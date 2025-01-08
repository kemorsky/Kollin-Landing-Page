import { Button } from "./ui/button"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { poppins, openSans } from "@/app/fonts/fonts";
import { UploadCloud } from 'lucide-react';

export default function Usps() {
    return (
        <div className="flex flex-col items-center gap-y-6 w-full intersect-once intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100">
            <h1 className={`${poppins.className} text-4xl font-semibold`}>Vad du får med Kollin</h1>
            <div className="flex items-center justify-around w-[90%]">
                <Card className="border border-blue-500 rounded-xl w-[240px]">
                    <CardHeader>
                        <CardTitle>
                            <UploadCloud
                                className="text-blue-500"
                                width={44}
                                height={44}/>
                        </CardTitle>
                        <CardDescription className={`${openSans.className} text-[1rem] font-semibold text-black`}>
                        Allt ditt studiematerial <br />
                        på ett ställe, organiserat <br />
                        och lätt att hitta.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="border border-blue-500 rounded-xl w-[240px]">
                    <CardHeader>
                        <CardTitle>
                            <UploadCloud
                                className="text-blue-500"
                                width={44}
                                height={44}/>
                        </CardTitle>
                        <CardDescription className={`${openSans.className} text-[1rem] font-semibold text-black`}>
                        Avancerad AI som <br />
                        analyserar framsteg och <br />
                        ger skräddarsydda tips.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="border border-blue-500 rounded-xl w-[240px]">
                    <CardHeader>
                        <CardTitle>
                            <UploadCloud
                                className="text-blue-500"
                                width={44}
                                height={44}/>
                        </CardTitle>
                        <CardDescription className={`${openSans.className} text-[1rem] font-semibold text-black`}>
                        Effektiva studiemetoder <br />
                        som maximerar <br />
                        studiepassen och flow.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="border border-blue-500 rounded-xl w-[240px]">
                    <CardHeader>
                        <CardTitle>
                            <UploadCloud
                                className="text-blue-500"
                                width={44}
                                height={44}/>
                        </CardTitle>
                        <CardDescription className={`${openSans.className} text-[1rem] font-semibold text-black`}>
                        Studiematerial som <br />
                        berikats av data från <br />
                        tusentals andra.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
            <div className="flex items-center gap-4">
                <Button>Kom igång direkt</Button>
                <Button variant="secondary">Läs mer</Button>
            </div>
        </div>
    )
}