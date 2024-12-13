"use client"

import Image from "next/image"
import { Button } from "./button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import KollinLogo from '../../app/assets/kollin-logo.svg'

export function MainNav() {

  return (
    <div className="flex justify-between items-center bg-gray-100 w-[22rem] xl:w-[80rem] p-4">
        <div className="flex items-center justify-center">
            <Image 
            className="cursor-pointer"
            alt="Lollin Logo"
            src={KollinLogo}
            width={42}
            />
            <span className="text-2xl uppercase text-blue-800 mr-6 ml-2">Kollin</span>
            <nav className="flex items-center gap-4 text-sm xl:gap-6">
                <span className="cursor-pointer hover:text-blue-300 text-[1rem]">Plattformen</span>
                <span className="cursor-pointer hover:text-blue-300 text-[1rem]">Priser</span>
                <span className="cursor-pointer hover:text-blue-300 text-[1rem]">Kurser</span>
            <Select>
                <SelectTrigger className="w-[110px] hover:text-blue-300 text-[1rem]">
                    <SelectValue placeholder="Om oss" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Början</SelectItem>
                    <SelectItem value="dark">Framtiden</SelectItem>
                </SelectContent>
            </Select>
            </nav>
        </div>
        <div className="mr-6 flex gap-3">
            <Button variant="secondary">Logga in</Button>
            <Button>Kom igång</Button>
        </div>
    </div>
  )
}