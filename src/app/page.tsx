import SectionBlock from "@/components/home/SectionBlock";

import HeroSection from "@/components/home/hero/HeroSection";
import PoliciesSection from "@/components/home/policies/PoliciesSection";
import AftercareSection from "@/components/home/aftercare/AftercareSection";
import TestimonialCarousel from "@/components/home/testimonials/TestimonialCarousel";
import ServiceCard from "@/components/home/services/ServiceCard";
import BookingCTA from "@/components/home/bookingCta/BookingCTA";
import FAQSection from "@/components/home/faq/FAQSection";

import PageEnter from "@/components/ui/animation/PageEnter";
import Reveal from "@/components/ui/animation/Reveal";

import { getServices } from "@/utils/queries/getService";
import type { ServiceItem } from "@/utils/types/serviceItem";

import { getTestimonials } from "@/utils/queries/getTestimonials";
import type { TestimonialItem } from "@/utils/types/testimonialItem";

export default async function Home() {
    const [testimonials, rawServiceItems] = await Promise.all([
        getTestimonials(),
        getServices(),
    ]);

    const typedTestimonials = testimonials as TestimonialItem[];

    const serviceItems: ServiceItem[] = rawServiceItems.map((item) => ({
        name: item.title,
        description: item.service_description,
    }));

    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground">
            <PageEnter>
                <HeroSection id="hero" />
            </PageEnter>

            <div className="space-y-8 md:space-y-12 xl:space-y-16">
                <Reveal>
                    <SectionBlock
                        title="Testimonials"
                        description="Hear from my clients about their experiences at Vee's Nail Studio."
                        background="bg-surface"
                        id="testimonials"
                    >
                        <TestimonialCarousel testimonials={typedTestimonials} />
                    </SectionBlock>
                </Reveal>

                <Reveal>
                    <PoliciesSection id="policies" />
                </Reveal>

                <Reveal>
                    <AftercareSection />
                </Reveal>

                <Reveal>
                    <SectionBlock
                        title="Popular Services"
                        description="Explore our most requested nail care services."
                        background="bg-background"
                        id="services"
                    >
                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                            {serviceItems.map((item, index) => (
                                <Reveal
                                    key={item.name}
                                    variant="card"
                                    delay={index * 0.1}
                                >
                                    <ServiceCard
                                        title={item.name}
                                        description={item.description}
                                    />
                                </Reveal>
                            ))}
                        </div>
                    </SectionBlock>
                </Reveal>

                <Reveal>
                    <BookingCTA id="booking" />
                </Reveal>

                <Reveal>
                    <FAQSection id="faq" />
                </Reveal>
            </div>
        </main>
    );
}
