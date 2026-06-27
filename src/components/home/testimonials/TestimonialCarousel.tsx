"use client";

import { useCallback, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import type { Swiper as SwiperInstance } from "swiper";
import {
    A11y,
    Autoplay,
    EffectCoverflow,
    Navigation,
    Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import TestimonialModal from "./TestimonialModal";
import TestimonialSlideContent from "./TestimonialSlideContent";
import type { TestimonialItem } from "@/utils/types/testimonialItem";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./testimonials.css";

export default function TestimonialCarousel({
    testimonials,
}: {
    testimonials: TestimonialItem[];
}) {
    const [selectedTestimonial, setSelectedTestimonial] =
        useState<TestimonialItem | null>(null);

    const swiperRef = useRef<SwiperInstance | null>(null);
    const previousButtonRef = useRef<HTMLButtonElement>(null);
    const nextButtonRef = useRef<HTMLButtonElement>(null);

    const hasMultipleTestimonials = testimonials.length > 1;

    const openModal = useCallback((testimonial: TestimonialItem) => {
        swiperRef.current?.autoplay.stop();
        setSelectedTestimonial(testimonial);
    }, []);

    const closeModal = useCallback(() => {
        setSelectedTestimonial(null);

        if (hasMultipleTestimonials) {
            swiperRef.current?.autoplay.start();
        }
    }, [hasMultipleTestimonials]);

    if (testimonials.length === 0) {
        return null;
    }

    return (
        <>
            <section className="mt-10" aria-label="Client testimonials">
                <div className="relative mx-auto max-w-4xl px-0 md:px-16">
                    {hasMultipleTestimonials && (
                        <>
                            <button
                                ref={previousButtonRef}
                                type="button"
                                aria-label="Previous testimonial"
                                className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background md:inline-flex"
                            >
                                <IoChevronBack className="h-4 w-4" />
                            </button>

                            <button
                                ref={nextButtonRef}
                                type="button"
                                aria-label="Next testimonial"
                                className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background md:inline-flex"
                            >
                                <IoChevronForward className="h-4 w-4" />
                            </button>
                        </>
                    )}

                    <Swiper
                        modules={[
                            Navigation,
                            Pagination,
                            Autoplay,
                            A11y,
                            EffectCoverflow,
                        ]}
                        effect="coverflow"
                        slidesPerView={1}
                        loop={hasMultipleTestimonials}
                        speed={600}
                        spaceBetween={32}
                        autoplay={
                            hasMultipleTestimonials
                                ? {
                                      delay: 7000,
                                      disableOnInteraction: false,
                                      pauseOnMouseEnter: true,
                                  }
                                : false
                        }
                        coverflowEffect={{
                            rotate: 40,
                            stretch: 0,
                            depth: 80,
                            modifier: 0.9,
                            slideShadows: false,
                        }}
                        navigation={hasMultipleTestimonials}
                        pagination={
                            hasMultipleTestimonials
                                ? {
                                      clickable: true,
                                      dynamicBullets: true,
                                      dynamicMainBullets: 3,
                                  }
                                : false
                        }
                        onBeforeInit={(swiper) => {
                            if (
                                swiper.params.navigation &&
                                typeof swiper.params.navigation !== "boolean"
                            ) {
                                swiper.params.navigation.prevEl =
                                    previousButtonRef.current;
                                swiper.params.navigation.nextEl =
                                    nextButtonRef.current;
                            }
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        className="testimonial-swiper"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide
                                key={`${item.client_name}-${index}`}
                                className="min-h-full"
                            >
                                <article className="mx-auto flex min-h-100 max-w-full items-center rounded-2xl border border-border/50 bg-background p-5 shadow-sm sm:min-h-92 sm:max-w-2xl sm:p-7 md:min-h-88 md:p-10">
                                    <TestimonialSlideContent
                                        item={item}
                                        onReadMore={openModal}
                                    />
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {hasMultipleTestimonials && (
                        <p className="mt-3 text-center text-xs text-muted md:hidden">
                            &larr; Swipe to see more &rarr;
                        </p>
                    )}
                </div>
            </section>

            <TestimonialModal
                testimonial={selectedTestimonial}
                onClose={closeModal}
            />
        </>
    );
}
