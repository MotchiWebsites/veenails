import { createClient } from "../supabase/client";
import type {
    PricingGroup,
    PricingItem,
    PriceVariant,
    DesignTier,
} from "../types/pricingItem";

interface PricingGroupRow {
    id: string;
    title: string;
    description: string | null;
    active: boolean;
    display_order: number | null;
}

interface PricingItemRow {
    id: string;
    group_id: string;
    name: string;
    description: string | null;
    standalone_booking_allowed: boolean;
    active: boolean;
    display_order: number | null;
}

interface PricingVariantRow {
    id: string;
    item_id: string;
    slug: string;
    label: string;
    price: number;
    duration_minutes: number | null;
    note: string | null;
    active: boolean;
    display_order: number | null;
}

interface DesignTierRow {
    id: string;
    name: string;
    description: string;
    price: number;
    active: boolean;
    display_order: number | null;
}

interface DesignTierImageRow {
    id: string;
    design_tier_id: string;
    image_url: string;
    active: boolean;
    display_order: number | null;
}

export const getPricing = async (): Promise<PricingGroup[]> => {
    const supabase = createClient();

    const { data: groupData, error: groupError } = await supabase
        .from("pricing_groups")
        .select("id, title, description, active, display_order")
        .eq("active", true)
        .order("display_order", { ascending: true });

    if (groupError) {
        console.error("Error fetching pricing groups:", {
            message: groupError.message,
            details: groupError.details,
            hint: groupError.hint,
            code: groupError.code,
        });
        return [];
    }

    const { data: itemData, error: itemError } = await supabase
        .from("pricing_items")
        .select(
            "id, group_id, name, description, standalone_booking_allowed, active, display_order"
        )
        .eq("active", true)
        .order("display_order", { ascending: true });

    if (itemError) {
        console.error("Error fetching pricing items:", {
            message: itemError.message,
            details: itemError.details,
            hint: itemError.hint,
            code: itemError.code,
        });
        return [];
    }

    const { data: variantData, error: variantError } = await supabase
        .from("pricing_variants")
        .select("id, item_id, slug, label, price, duration_minutes, note, active, display_order")
        .eq("active", true)
        .order("display_order", { ascending: true });

    if (variantError) {
        console.error("Error fetching pricing variants:", {
            message: variantError.message,
            details: variantError.details,
            hint: variantError.hint,
            code: variantError.code,
        });
        return [];
    }

    const groups = groupData as PricingGroupRow[];
    const items = itemData as PricingItemRow[];
    const variants = variantData as PricingVariantRow[];

    return groups.map((group) => {
        const groupItems: PricingItem[] = items
            .filter((item) => item.group_id === group.id)
            .map((item) => {
                const itemVariants: PriceVariant[] = variants
                    .filter((variant) => variant.item_id === item.id)
                    .map((variant) => ({
                        id: variant.id,
                        label: variant.label,
                        price: variant.price,
                        note: variant.note ?? undefined,
                    }));

                return {
                    id: item.id,
                    name: item.name,
                    description: item.description ?? undefined,
                    standaloneBookingAllowed: item.standalone_booking_allowed,
                    active: item.active,
                    variants: itemVariants,
                };
            });

        return {
            id: group.id,
            title: group.title,
            description: group.description ?? undefined,
            items: groupItems,
        };
    });
};

export const getDesignTiers = async (): Promise<DesignTier[]> => {
    const supabase = createClient();

    const { data: tierData, error: tierError } = await supabase
        .from("design_tiers")
        .select("id, name, description, price, active, display_order")
        .eq("active", true)
        .order("display_order", { ascending: true });

    if (tierError) {
        console.error("Error fetching design tiers:", {
            message: tierError.message,
            details: tierError.details,
            hint: tierError.hint,
            code: tierError.code,
        });
        return [];
    }

    const { data: imageData, error: imageError } = await supabase
        .from("design_tier_images")
        .select("id, design_tier_id, image_url, active, display_order")
        .eq("active", true)
        .order("display_order", { ascending: true });

    if (imageError) {
        console.error("Error fetching design tier images:", {
            message: imageError.message,
            details: imageError.details,
            hint: imageError.hint,
            code: imageError.code,
        });
        return [];
    }

    const tiers = tierData as DesignTierRow[];
    const images = imageData as DesignTierImageRow[];

    return tiers.map((tier) => ({
        id: tier.id,
        name: tier.name,
        description: tier.description,
        price: tier.price,
        active: tier.active,
        images: images
            .filter((image) => image.design_tier_id === tier.id)
            .map((image) => image.image_url),
    }));
};