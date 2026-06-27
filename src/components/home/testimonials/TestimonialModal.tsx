"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { IoClose } from "react-icons/io5";

import type { TestimonialItem } from "@/utils/types/testimonialItem";

type TestimonialModalProps = {
    testimonial: TestimonialItem | null;
    onClose: () => void;
};

const FOCUSABLE_ELEMENTS =
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const subscribeToHydration = () => () => {};

function useIsHydrated() {
    return useSyncExternalStore(
        subscribeToHydration,
        () => true,
        () => false,
    );
}

export default function TestimonialModal({
    testimonial,
    onClose,
}: TestimonialModalProps) {
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const shouldReduceMotion = useReducedMotion();
    const isHydrated = useIsHydrated();

    useEffect(() => {
        if (!testimonial) return;

        const previouslyFocusedElement =
            document.activeElement as HTMLElement | null;
        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        requestAnimationFrame(() => {
            closeButtonRef.current?.focus();
        });

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
                return;
            }

            if (event.key !== "Tab") return;

            const modal = document.getElementById("testimonial-modal");
            if (!modal) return;

            const focusableElements = Array.from(
                modal.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS),
            );

            if (focusableElements.length === 0) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            }

            if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
            previouslyFocusedElement?.focus();
        };
    }, [testimonial, onClose]);

    const panelInitial = shouldReduceMotion
        ? { opacity: 0 }
        : { opacity: 0, scale: 0.96, y: 16 };

    const panelAnimate = shouldReduceMotion
        ? { opacity: 1 }
        : { opacity: 1, scale: 1, y: 0 };

    const panelExit = shouldReduceMotion
        ? { opacity: 0 }
        : { opacity: 0, scale: 0.98, y: 8 };

    if (!isHydrated) {
        return null;
    }

    return createPortal(
        <AnimatePresence>
            {testimonial && (
                <motion.div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            onClose();
                        }
                    }}
                >
                    <motion.section
                        id="testimonial-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="testimonial-modal-title"
                        aria-describedby="testimonial-modal-content"
                        className="flex max-h-[85vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
                        initial={panelInitial}
                        animate={panelAnimate}
                        exit={panelExit}
                        transition={{
                            duration: shouldReduceMotion ? 0 : 0.24,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        onMouseDown={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
                            <div>
                                <h2
                                    id="testimonial-modal-title"
                                    className="text-lg font-semibold text-foreground sm:text-xl"
                                >
                                    Full Testimonial
                                </h2>

                                <p className="mt-1 text-sm text-muted">
                                    {testimonial.client_name}
                                </p>
                            </div>

                            <button
                                ref={closeButtonRef}
                                type="button"
                                onClick={onClose}
                                aria-label="Close testimonial"
                                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                            >
                                <IoClose className="h-5 w-5" />
                            </button>
                        </div>

                        <div
                            id="testimonial-modal-content"
                            className="flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6"
                        >
                            <p className="whitespace-pre-wrap text-sm leading-relaxed text-muted sm:text-base">
                                &ldquo;{testimonial.review}&rdquo;
                            </p>

                            <p className="mt-5 text-sm font-semibold text-foreground sm:text-base">
                                &ndash; {testimonial.client_name}
                            </p>
                        </div>

                        <div className="border-t border-border px-5 py-4 sm:px-6 flex">
                            <button
                                type="button"
                                onClick={onClose}
                                className="btn-primary w-full lg:w-1/2 lg:mx-auto text-white font-semibold"
                            >
                                Close
                            </button>
                        </div>
                    </motion.section>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body,
    );
}
