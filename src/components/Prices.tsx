import {
    PriceBox,
    PriceBoxName,
    PriceBoxPricing,
    PriceBoxLeft,
    PriceBoxRight
} from '@/components/ui/pricebox'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

import * as React from "react";

export default function Prices() {
    return (
        <div className='w-[90%]'>
            <h1 className='font-[Poppins] text-4xl py-8 px-16 text-center font-semibold intersect-once intersect:motion-opacity-in-0 intersect:motion-translate-y-in-[-100%]'>Lär dig som ett proffs. Betala som en student.</h1>
            <div className='flex items-center justify-around intersect-once intersect:motion-preset-expand'>
                <PriceBox>
                    <PriceBoxLeft>
                        <PriceBoxName className='text-white'>gratis</PriceBoxName>
                        <span className='text-3xl leading-6'>0kr/ <br /><span className='text-[1.25rem]'>månad</span></span>
                    </PriceBoxLeft>
                    <PriceBoxRight>
                        <PriceBoxPricing>Upp till 50 uppgifter & möjlighet att ladda upp material.</PriceBoxPricing>
                        <Button variant="secondary">Läs mer
                            <span>
                                <ArrowRight />
                            </span>
                        </Button>
                    </PriceBoxRight>
                </PriceBox>
                <PriceBox>
                    <PriceBoxLeft>
                        <PriceBoxName className='text-white'>bas</PriceBoxName>
                        <span className='text-3xl leading-6'>99kr/ <span className='text-[1.25rem]'>månad</span></span>
                    </PriceBoxLeft>
                    <PriceBoxRight>
                        <PriceBoxPricing>Fri tillgång till alla smarta studieverktyg.</PriceBoxPricing>
                            <Button variant="secondary">Läs mer
                                <span>
                                    <ArrowRight />
                                </span>
                            </Button>
                    </PriceBoxRight>
                </PriceBox>
                <PriceBox>
                    <PriceBoxLeft>
                        <PriceBoxName className='text-white'>pro</PriceBoxName>
                        <span className='text-3xl leading-6'>149kr/ <span className='text-[1.25rem]'>månad</span></span>
                    </PriceBoxLeft>
                    <PriceBoxRight>
                        <PriceBoxPricing>Inkluderar BAS samt vår personliga AI-studiecoach, KAI.</PriceBoxPricing>
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