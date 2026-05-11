import { createClient } from "../supabase/client";

export const getFAQs = async () => {
    const supabase = createClient();

    const { data: faqData, error: faqError } = await supabase
        .from("faqs")
        .select("question, answer")
        .eq("active", true)
        .order("display_order", { ascending: true });

    if (faqError) {
        console.error("Error fetching FAQs:", faqError);
        return [];
    }
    
    return faqData;
};
 