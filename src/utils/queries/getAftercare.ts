import { createClient } from "../supabase/client";

export const getAftercare = async () => {
    const supabase = createClient();

    const { data: aftercareData, error: aftercareError } = await supabase
        .from("aftercare_instructions")
        .select("title, description")
        .eq("active", true)
        .order("display_order", { ascending: true });

    if (aftercareError) {
        console.error("Error fetching Aftercare Instructions:", aftercareError);
        return [];
    }
    
    return aftercareData;
};
 