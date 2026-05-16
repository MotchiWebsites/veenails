export interface PriceVariant {
    id: string;
    label: string;
    price: number;
    note?: string;
}

export interface PricingItem {
    id: string;
    name: string;
    description?: string;
    standaloneBookingAllowed: boolean;
    active: boolean;
    variants: PriceVariant[];
}

export interface PricingGroup {
    id: string;
    title: string;
    description?: string;
    items: PricingItem[];
}

export interface DesignTier {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    active: boolean;
}