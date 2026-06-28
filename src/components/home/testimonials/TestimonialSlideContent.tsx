import { useEffect, useRef, useState } from "react";
import type { TestimonialItem } from "@/utils/types/testimonialItem";

import { FiArrowUpRight } from "react-icons/fi";

type TestimonialSlideContentProps = {
    item: TestimonialItem;
    onReadMore: (testimonial: TestimonialItem) => void;
};

export default function TestimonialSlideContent({
    item,
    onReadMore,
}: TestimonialSlideContentProps) {
    const [isTruncated, setIsTruncated] = useState(false);
    const reviewRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const reviewElement = reviewRef.current;
        if (!reviewElement) return;

        const checkTruncation = () => {
            setIsTruncated(
                reviewElement.scrollHeight > reviewElement.clientHeight,
            );
        };

        const animationFrame = requestAnimationFrame(checkTruncation);

        const resizeObserver = new ResizeObserver(checkTruncation);
        resizeObserver.observe(reviewElement);

        window.addEventListener("resize", checkTruncation);

        return () => {
            cancelAnimationFrame(animationFrame);
            resizeObserver.disconnect();
            window.removeEventListener("resize", checkTruncation);
        };
    }, [item.review]);

    return (
        <div className="flex w-full min-w-0 flex-col">
            <p
                ref={reviewRef}
                className="line-clamp-8 lg:line-clamp-10 text-sm leading-relaxed text-muted sm:text-base md:text-lg"
            >
                &ldquo;{item.review}&rdquo;
            </p>

            {isTruncated ? (
                <button
                    type="button"
                    onClick={() => onReadMore(item)}
                    className="mt-2 inline-flex w-fit self-end items-center gap-1.5 text-sm font-semibold text-foreground/75 hover:text-foreground hover:underline transition-all ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background md:text-base"
                >
                    Read full review
                    <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
            ) : null}

            <p className="mt-6 w-full text-right text-sm font-semibold text-pink-500 md:text-base">
                &ndash; {item.client_name}
            </p>
        </div>
    );
}
