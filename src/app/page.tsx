import { MainNav } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

import Image from "next/image";

import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Stats from "@/components/Stats";
import Usps from "@/components/Usps";
import Features from "@/components/CoreFeatures";
import FAQ from "@/components/FAQ";
import Prices from "@/components/Prices";
import Testimonials from "@/components/Testimonials";
import Courses from "@/components/Courses";

export default function Home() {
  return (
    <div className="xl:w-[80rem] m-auto bg-blue-900">
      <main className="flex flex-col items-center justify-center gap-2 bg-green-200">
        <MainNav />
        <Hero />
        <WhatWeDo />
        <Stats />
        <Usps />
        <Features />
        <Prices />
        <Testimonials />
        <Courses />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
