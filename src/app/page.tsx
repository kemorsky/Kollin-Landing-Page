import ObserverProvider from './ObserverProvider';

import { MainNav } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

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
    <ObserverProvider>
      <div className="max-w-[80rem] min-h-screen bg-slate-100 m-auto !scroll-smooth">
        <main className="flex flex-col items-center justify-center gap-36">
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
    </ObserverProvider>
  );
}
