"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
    children: ReactNode;
    delay?: number;
    className?: string;
    variant?: "section" | "card";
};

export default function Reveal({
    children,
    delay = 0,
    className,
    variant = "section",
}: RevealProps) {
    const shouldReduceMotion = useReducedMotion();

    const y = variant === "card" ? 12 : 16;

    return (
        <motion.div
            className={className}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: true,
                amount: 0.15,
                margin: "0px 0px -8% 0px",
            }}
            transition={{
                duration: shouldReduceMotion ? 0.7 : 1.5,
                delay: shouldReduceMotion ? 0 : delay,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
