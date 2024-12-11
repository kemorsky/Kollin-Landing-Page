"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex justify-between items-center bg-yellow-200 w-[22rem] xl:w-[80rem]">
        <div className="flex items-center justify-center">
            <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
                <span className="font-bold lg:inline-block">
                gugugaga
                </span>
            </Link>
            <nav className="flex items-center gap-4 text-sm xl:gap-6">
                <span>Plattformen</span>
                <span>Priser</span>
                <span>Kurser</span>
            <Select>
                <SelectTrigger className="w-[90px]">
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
            <Button>Logga in</Button>
            <Button variant="secondary">Kom igång</Button>
        </div>
    </div>
  )
}