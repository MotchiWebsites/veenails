import PricingSection from "@/components/pricing/PricingSection";
import PricingGroupCard from "@/components/pricing/PricingGroupCard";
import DesignTierCard from "@/components/pricing/DesignTierCard";
import PolicyNote from "@/components/pricing/PolicyNote";

import { getPricing, getDesignTiers } from "@/utils/queries/getPricing";
import { getPolicies } from "@/utils/queries/getPolicies";

import type { PricingGroup, DesignTier } from "@/utils/types/pricingItem";
import { ContentItem } from "@/utils/types/contentItem";

import FloatingSectionNav from "@/components/ui/FloatingSectionNav";
import PageHeader from "@/components/ui/PageHeader";

export default async function PricingPage() {
    const pricingGroups: PricingGroup[] = await getPricing();
    const designTiers: DesignTier[] = await getDesignTiers();
    const policyItems: ContentItem[] = await getPolicies();

    const activeDesignTiers = designTiers.filter((tier) => tier.active);

    return (
        <main className="min-h-screen bg-background text-foreground py-16 space-y-16">
            <FloatingSectionNav
                items={[
                    { id: "services", label: "Services" },
                    { id: "design-tiers", label: "Designs" },
                    { id: "policies", label: "Policies" },
                ]}
            />

            <PageHeader
                intro="Clear pricing, thoughtful booking, and room for custom detail"
                title="Services & Pricing"
                description="Explore core services, add-ons, and design tiers. Final pricing can vary slightly depending on complexity and any changes made during the appointment."
                redirectURL="/gallery"
                redirectPage="View Gallery"
            />

            <PricingSection
                id="services"
                title="Service Pricing"
                description="Base pricing by service type, length, appointment type, and removals."
                background="bg-surface"
            >
                <div className="grid gap-6 lg:grid-cols-2">
                    {pricingGroups.map((group) => {
                        // Supabase group IDs are UUIDs, so use the title for now
                        // to identify the Removals section until a stable slug column is added.
                        const isRemovalsGroup = group.title.toLowerCase() === "removals";

                        return (
                            <PricingGroupCard
                                key={group.id}
                                group={group}
                                id={isRemovalsGroup ? "removals" : undefined}
                                tierSummary={isRemovalsGroup ? undefined : activeDesignTiers}
                            />
                        );
                    })}
                </div>
            </PricingSection>

            <PricingSection
                id="design-tiers"
                title="Design Levels"
                description="Use these examples to choose the design tier that best matches your booking."
                background="bg-surface-2"
            >
                <div className="grid gap-6 xl:gap-12 md:grid-cols-2 max-w-5xl mx-auto space-evenly">
                    {activeDesignTiers.map((tier) => (
                        <DesignTierCard key={tier.id} tier={tier} />
                    ))}
                </div>
            </PricingSection>

            <PricingSection
                id="policies"
                title="Booking Policies"
                description="A few things to keep in mind when reviewing pricing."
                background="bg-surface-2"
            >
                <div className="grid items-start gap-4 md:grid-cols-2">
                    {policyItems.map((policy) => (
                        <PolicyNote key={policy.title} policy={policy} />
                    ))}
                </div>
            </PricingSection>
        </main>
    );
}