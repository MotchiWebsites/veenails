import { createClient } from "../supabase/client";

export const getTestimonials = async () => {
    const supabase = createClient();

    const { data: testimonialsData, error: testimonialsError } = await supabase
        .from("testimonials")
        .select("client_name, review, image_url")
        .eq("active", true)
        .order("display_order", { ascending: true });

    if (testimonialsError) {
        console.error("Error fetching Testimonials:", testimonialsError);
        return [];
    }

    return testimonialsData;
};
