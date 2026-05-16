import SectionBlock from "@/components/home/SectionBlock";
import FAQItem from "./FAQItem";
import { getFAQs } from "@/utils/queries/getFAQs";

export default async function FAQSection({ id = "" }: { id?: string }) {
    const faqItems = await getFAQs();

    return (
        <SectionBlock
            id={id}
            title="Frequently Asked Questions"
            description="Common questions about bookings, services, and what to expect."
            background="bg-surface"
            className="mb-12 md:mb-24"
        >
            <div className="mt-8 space-y-4 text-left">
                {faqItems.map((item) => (
                    <FAQItem
                        key={item.question}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </SectionBlock>
    );
}
