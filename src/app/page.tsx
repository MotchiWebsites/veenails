import SectionBlock from "@/components/home/SectionBlock";

import HeroSection from "@/components/home/hero/HeroSection";
import PoliciesSection from "@/components/home/policies/PoliciesSection";
import AftercareSection from "@/components/home/aftercare/AftercareSection";
import TestimonialCarousel from "@/components/home/testimonials/TestimonialCarousel";
import ServiceCard from "@/components/home/services/ServiceCard";
import BookingCTA from "@/components/home/bookingCta/BookingCTA";
import FAQSection from "@/components/home/faq/FAQSection";

import { getServices } from "@/utils/queries/getService";
import type { ServiceItem } from "@/utils/types/serviceItem";

import { getTestimonials } from "@/utils/queries/getTestimonials";
import type { TestimonialItem } from "@/utils/types/testimonialItem";


export default async function Home() {
    const testimonials: TestimonialItem[] = await getTestimonials();
    const rawServiceItems = await getServices();
    const serviceItems: ServiceItem[] = rawServiceItems.map((item) => ({
        name: item.title,
        description: item.service_description,
    }));

    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col space-y-12 md:space-y-18">
            {/* Hero */}
            <HeroSection id="hero" />

            {/* Policies */}
            <PoliciesSection id="policies" />

            {/* Aftercare */}
            <AftercareSection />

            {/* Testimonials */}
            <SectionBlock
                title="Testimonials"
                description="Hear from our clients about their experiences at Vee's Nail Studio."
                background="bg-surface"
                id="testimonials"
            >
                <TestimonialCarousel 
                    testimonials={testimonials}
                />
            </SectionBlock>

            {/* Services */}
            <SectionBlock
                title="Popular Services"
                description="Explore our most requested nail care services."
                background="bg-background"
                id="services"
            >
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {serviceItems.map((item) => (
                        <ServiceCard
                            key={item.name}
                            title={item.name}
                            description={item.description}
                        />
                    ))}
                </div>
            </SectionBlock>

            {/* Booking CTA */}
            <BookingCTA id="booking" />

            {/* FAQ */}
            <FAQSection id="faq" />
        </main>
    );
}
