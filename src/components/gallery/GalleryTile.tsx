"use client";

import Image from "next/image";
import { useState } from "react";

import type { GalleryImage } from "@/utils/types/galleryItem";

export default function GalleryTile({ image }: { image: GalleryImage }) {
    const [src, setSrc] = useState(image.src || "/placeholder.png");

    return (
        <div className="group overflow-hidden rounded-xl border border-border/60 bg-surface shadow-sm">
            <div
                className="relative w-full overflow-hidden bg-pink-100"
                style={{ aspectRatio: "4 / 5" }}
            >
                <Image
                    src={src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 33vw, 25vw"
                    onError={() => setSrc("/placeholder.png")}
                    className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                />
            </div>
        </div>
    );
}
