import GalleryTile from "./GalleryTile";
import type { GalleryImage } from "@/utils/types/galleryItem";

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
    return (
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {images.map((image) => (
                <GalleryTile
                    key={image.alt}
                    image={image}
                />
            ))}
        </div>
    );
}
