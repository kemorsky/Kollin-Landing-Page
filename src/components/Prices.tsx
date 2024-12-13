import {
    PriceBox,
    PriceBoxName,
    PriceBoxPricing,
    PriceBoxLeft,
    PriceBoxRight
} from '@/components/ui/pricebox'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { poppins, openSans } from "@/app/fonts/fonts";


import * as React from "react";

export default function Prices() {
    return (
        <div className='w-[90%] '>
            <h1 className={`${poppins.className} text-4xl py-8 px-16 text-center font-semibold`}>Lär dig som ett proffs. Betala som en student.</h1>
            <div className='flex items-center justify-around'>
                <PriceBox>
                    <PriceBoxLeft>
                        <PriceBoxName className={`${openSans.className} text-white`}>gratis</PriceBoxName>
                        <span className={`${openSans.className} text-3xl leading-6`}>0kr/ <br /><span className='text-[1.25rem]'>månad</span></span>
                    </PriceBoxLeft>
                    <PriceBoxRight>
                        <PriceBoxPricing className={`${openSans.className}`}>Upp till 50 uppgifter & möjlighet att ladda upp material.</PriceBoxPricing>
                        <Button variant="secondary">Läs mer
                            <span>
                                <ArrowRight />
                            </span>
                        </Button>
                    </PriceBoxRight>
                </PriceBox>
                <PriceBox>
                    <PriceBoxLeft>
                        <PriceBoxName className={`${openSans.className} text-white`}>bas</PriceBoxName>
                        <span className={`${openSans.className} text-3xl leading-6`}>99kr/ <span className='text-[1.25rem]'>månad</span></span>
                    </PriceBoxLeft>
                    <PriceBoxRight>
                        <PriceBoxPricing className={`${openSans.className}`}>Fri tillgång till alla smarta studieverktyg.</PriceBoxPricing>
                            <Button variant="secondary">Läs mer
                                <span>
                                    <ArrowRight />
                                </span>
                            </Button>
                    </PriceBoxRight>
                </PriceBox>
                <PriceBox>
                    <PriceBoxLeft>
                        <PriceBoxName className={`${openSans.className} text-white`}>pro</PriceBoxName>
                        <span className={`${openSans.className} text-3xl leading-6`}>149kr/ <span className='text-[1.25rem]'>månad</span></span>
                    </PriceBoxLeft>
                    <PriceBoxRight>
                        <PriceBoxPricing className={`${openSans.className}`}>Inkluderar BAS samt vår personliga AI-studiecoach, KAI.</PriceBoxPricing>
                            <Button variant="secondary">Läs mer
                                <span>
                                    <ArrowRight />
                                </span>
                            </Button>
                    </PriceBoxRight>
                </PriceBox>
            </div>
        </div>
    )
}