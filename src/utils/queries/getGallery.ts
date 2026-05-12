import { createClient } from "../supabase/client";
import { GalleryGroup } from "../types/galleryItem";

export const getGallery = async () => {
    const supabase = createClient();

    const { data: groupData, error: groupError } = await supabase
        .from("gallery_groups")
        .select("id, slug, title, description, background")
        .eq("active", true)
        .order("display_order", { ascending: true });

    if (groupError) {
        console.error("Error fetching gallery groups:", {
            message: groupError.message,
            details: groupError.details,
            hint: groupError.hint,
            code: groupError.code,
        });
        return [];
    }

    const { data: imageData, error: imageError } = await supabase
        .from("gallery_images")
        .select("group_id, src, alt, size, caption")
        .eq("active", true)
        .order("display_order", { ascending: true });

    if (imageError) {
        console.error("Error fetching gallery images:", {
            message: imageError.message,
            details: imageError.details,
            hint: imageError.hint,
            code: imageError.code,
        });
        return [];
    }

    return groupData.map((group) => ({
        title: group.title,
        id: group.slug,
        description: group.description,
        background: group.background,
        images: imageData
            .filter((image) => image.group_id === group.id)
            .map((image) => ({
                src: image.src,
                alt: image.alt,
                size: image.size,
                caption: image.caption ?? undefined,
            })),
    }));
};