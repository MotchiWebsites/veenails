import { createClient } from "../supabase/client";

export const getServices = async () => {
    const supabase = createClient();

    const { data: serviceData, error: serviceError } = await supabase
        .from("pricing_groups")
        .select("title, service_description")
        .eq("active", true)
        .neq("title", "Removals")
        .order("display_order", { ascending: true })
        .limit(3);

    if (serviceError) {
        console.error("Error fetching services:", serviceError);
        return [];
    }
    
    return serviceData;
};
 