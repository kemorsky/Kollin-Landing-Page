import { Button } from "./button"
import Image from "next/image"

import { Icons } from "./icons"

import { Separator } from "@/components/ui/separator"

export function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center">
            <div className="flex justify-around items-center">
                <div>
                    <h1>Kollin</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Proin justo dolor, tempor quis.</p>
                    <div>
                        <Button>Kom igång</Button>
                        <Button variant="secondary">Logga in</Button>
                    </div>
                    <Separator className="w-[33%] mt-2 mb-2" />
                    <ul>
                        <li>info@kollin.com</li>
                        <li>Strandbergsgatan 61, 112 51 Stockholm</li>
                        <li>Org. number: 559039-3483</li>
                    </ul>
                </div>
                <div>
                    <article>
                        <h2>Produkt</h2>
                        <ul>
                            <li>Platform</li>
                            <li>Pricing</li>
                        </ul>
                    </article>
                    <article>
                        <h2>Verksamhet</h2>
                        <ul>
                            <li>About us</li>
                            <li>News & Insights</li>
                            <li>FAQ & Contact</li>
                        </ul>
                    </article>
                </div>
                <div>
                    <ul>
                        <li>Kungliga Tekniska högskolan</li>
                        <li>Kungliga Tekniska högskolan</li>
                        <li>Kungliga Tekniska högskolan</li>
                        <li>Kungliga Tekniska högskolan</li>
                        <li>Kungliga Tekniska högskolan</li>
                        <li>Kungliga Tekniska högskolan</li>
                        <li>Kungliga Tekniska högskolan</li>
                    </ul>
                </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
                <section>
                    <Icons/>
                </section>
                <p>Copyright 2024 © Crash Course Sweden AB</p>
                <article>
                    <p>Cookie Policy</p>
                    <p>Privacy Policy</p>
                </article>
            </div>
        </footer>
    )
}