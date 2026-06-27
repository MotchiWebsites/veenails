export interface GalleryImage {
    src: string;
    alt: string;
    caption?: string;
}

export interface GalleryGroup {
    title: string;
    id?: string;
    description: string;
    background?: "bg-background" | "bg-surface" | "bg-surface-2";
    images: GalleryImage[];
}