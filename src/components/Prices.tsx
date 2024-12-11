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
        <div>
            <h1 className="text-4xl">Lär dig som ett proffs. Betala som en student.</h1>
            <div className='flex items-center justify-center'>
                <PriceBox>
                    <PriceBoxLeft className=''>
                        <PriceBoxName>gratis</PriceBoxName>
                        <PriceBoxPricing className=''>0kr/ <br /><span className='text-[1rem]'>månad</span></PriceBoxPricing>
                    </PriceBoxLeft>
                    <PriceBoxRight>
                        <PriceBoxPricing className='text-[1rem] tracking-normal'>Upp till 50 uppgifter & möjlighet att ladda upp material.</PriceBoxPricing>
                        <Button variant="secondary">Läs mer
                            <span>
                                <ArrowRight />
                            </span>
                        </Button>
                    </PriceBoxRight>
                </PriceBox>
                <PriceBox>
                    <PriceBoxLeft>test</PriceBoxLeft>
                    <PriceBoxRight>hehe</PriceBoxRight>
                </PriceBox>
                <PriceBox>
                    <PriceBoxLeft>test</PriceBoxLeft>
                    <PriceBoxRight>hehe</PriceBoxRight>
                </PriceBox>
            </div>
        </div>
    )
}