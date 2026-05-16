import { createClient } from "../supabase/client";

export const getPolicies = async () => {
    const supabase = createClient();

    const { data: policyData, error: policyError } = await supabase
        .from("policies")
        .select("title, description")
        .eq("active", true)
        .order("display_order", { ascending: true });

    if (policyError) {
        console.error("Error fetching policies:", policyError);
        return [];
    }
    
    return policyData;
};
