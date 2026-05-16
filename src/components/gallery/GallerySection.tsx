import SectionBlock from "@/components/home/SectionBlock";
import GalleryGrid from "@/components/gallery/GalleryGrid";

import type { GalleryGroup } from "@/utils/types/galleryItem";

export default function GallerySection({
    title,
    id,
    description,
    background = "bg-surface",
    images,
}: GalleryGroup) {
    return (
        <SectionBlock
            id={id}
            title={title}
            description={description}
            background={background}
        >
            <GalleryGrid images={images} />
        </SectionBlock>
    );
}
