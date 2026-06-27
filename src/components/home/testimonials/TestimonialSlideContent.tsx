import { useEffect, useRef, useState } from "react";
import type { TestimonialItem } from "@/utils/types/testimonialItem";

import Image from "next/image";

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
        <div className="flex h-full w-full flex-col items-center justify-center gap-6 text-center sm:gap-8 lg:flex-row md:items-center md:gap-8 md:text-left">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-border bg-surface sm:h-32 sm:w-32 md:h-44 md:w-44">
                <Image
                    src={item.image_url || "/logo.png"}
                    alt={`${item.client_name}'s testimonial`}
                    fill
                    sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 176px"
                    className="object-cover"
                />
            </div>

            <div className="flex min-w-0 flex-1 flex-col items-center md:items-start">
                <p
                    ref={reviewRef}
                    className="line-clamp-10 text-sm leading-relaxed text-muted sm:text-base md:text-lg"
                >
                    &ldquo;{item.review}&rdquo;
                </p>

                {isTruncated && (
                    <button
                        type="button"
                        onClick={() => onReadMore(item)}
                        className="mt-2 text-sm font-semibold text-link underline hover:text-link-hover md:text-base"
                    >
                        Read full testimonial
                    </button>
                )}

                <p className="mt-4 text-sm font-semibold text-foreground md:text-base">
                    &ndash; {item.client_name}
                </p>
            </div>
        </div>
    );
}
