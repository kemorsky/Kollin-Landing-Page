import { Button } from "./button";
import Image from "next/image";

import { Icons } from "./icons";
import KollinLogo from '../../app/assets/kollin-logo.svg';
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { NotepadTextIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator"

export function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center w-full bg-blue-300 py-4 px-16">
            <div className="flex justify-between items-start w-full">
                <div>
                    <article className="inline-flex items-center mb-2">
                        <Image
                            className="mr-2"
                            alt="Lollin Logo"
                            src={KollinLogo}
                            width={40}
                        />
                        <span className="text-4xl uppercase text-blue-800 mr-6 ml-2">KOLLIN</span>
                    </article>
                    <p className="mb-2">Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit. Proin justo dolor, tempor quis.</p>
                    <div className="flex gap-x-4">
                        <Button>Kom igång</Button>
                        <Button variant="secondary">Logga in</Button>
                    </div>
                    <Separator className="mt-4 mb-4" />
                    <ul className="flex flex-col">
                        <li className="inline-flex items-center">
                            <Mail
                                className="mr-2 text-blue-400"
                                width={20}
                            />
                            <span>info@kollin.com</span>
                        </li>
                        <li className="inline-flex items-center">
                            <MapPin
                                className="mr-2 text-blue-400"
                                width={20}
                            />
                            <span>Strandbergsgatan 61, 112 51 Stockholm</span>
                        </li>
                        <li className="inline-flex items-center">
                            <NotepadTextIcon
                                className="mr-2 text-blue-400"
                                width={20}
                            />
                            <span>Org. number: 559039-3483</span>
                        </li>
                    </ul>
                    <Separator className="w-[333%] mt-4 mb-4"/>
                </div>
                <div>
                    <article className="mb-4">
                        <h2 className="text-xl font-semibold">Produkt</h2>
                        <ul>
                            <li>Platform</li>
                            <li>Pricing</li>
                        </ul>
                    </article>
                    <article className="mb-4">
                        <h2 className="text-xl font-semibold">Verksamhet</h2>
                        <ul>
                            <li>About us</li>
                            <li>News & Insights</li>
                            <li>FAQ & Contact</li>
                        </ul>
                    </article>
                </div>
                <div>
                    <ul>
                        <li className="text-xl font-semibold">Skolor</li>
                        <li>Kungliga Tekniska högskolan</li>
                        <li>Kungliga Tekniska högskolan</li>
                        <li>Kungliga Tekniska högskolan</li>
                        <li>Kungliga Tekniska högskolan</li>
                        <li>Kungliga Tekniska högskolan</li>
                        <li>Kungliga Tekniska högskolan</li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-between w-full">
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