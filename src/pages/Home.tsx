import { Hero, Gallery, Stats, Features, Testimonials, CTA, Contact, FAQ } from "@/components/sections";
import { RoadmapBlock } from "@/components/RoadmapBlock";
import { CustomCursor } from "@/components/features/CustomCursor";
import { config } from "@/config";

export function Home() {
    const { features } = config;

    return (
        <main className="relative selection:bg-[#2563EB] selection:text-white">
            <Hero />
            {features.showStats && <Stats />}
            <Features />
            <RoadmapBlock />
            {features.showGallery && <Gallery />}
            {features.showTestimonials && <Testimonials />}
            <CTA />
            <Contact />
            {features.showFAQ && <FAQ />}
            <CustomCursor />
        </main>
    );
}
