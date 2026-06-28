import Image from "next/image";
import { CiHeart } from "react-icons/ci";

import PageHeader from "@/components/ui/PageHeader";
import ScrollLink from "@/components/ui/ScrollLink";

export default function HeroSection({ id = "" }: { id?: string }) {
    return (
        <section
            id={id}
            className="mx-auto max-w-3xl bg-background px-5 text-center pt-6"
        >
            <div className="flex justify-center pt-2 sm:pt-4">
                <Image
                    src="/logo.png"
                    alt="Vee's Nail Studio Logo"
                    width={600}
                    height={600}
                    priority
                    className="h-auto w-32 opacity-80 md:w-36 lg:w-42 xl:w-48"
                />
            </div>

            <div className="mt-5 sm:mt-6">
                <PageHeader
                    title="Vee's Nail Studio"
                    redirectURL="/pricing"
                    redirectPage="Services & Pricing"
                />
            </div>

            <p className="mx-auto mt-6 py-6 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                Hi, I&apos;m Vee{" "}
                <CiHeart
                    className="mb-1 inline-flex text-lg text-pink-main"
                    aria-hidden="true"
                />{" "}
                Welcome to my little nail space. I&apos;m a Toronto-based nail
                artist specializing in Gel-X, structured manicures, and detailed
                nail art. I focus on quality and longevity so your set not only
                looks beautiful, but lasts at least four weeks with proper care.
                Every appointment is one-on-one in my private home studio. I
                take my time, pay attention to the small details, and truly care
                about the final result. Take a look around and see if my work
                feels like you.
            </p>

            <aside className="mx-auto max-w-2xl rounded-3xl border border-border/60 bg-surface p-5 text-left shadow-sm sm:p-6">
                <div className="flex flex-col items-center gap-5 md:flex-row md:items-center md:gap-6">
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-border/60 bg-surface-2 sm:h-28 sm:w-28">
                        <Image
                            src="/home/hero/doupi.png"
                            alt="Doupi, Vee's dog"
                            fill
                            sizes="(max-width: 640px) 96px, 112px"
                            className="object-cover"
                        />
                    </div>

                    <div className="min-w-0 text-center md:text-left">
                        <p className="font-header text-lg font-semibold text-foreground">
                            Meet Doupi!
                        </p>

                        <p className="mt-2 text-sm leading-relaxed text-muted">
                            Doupi, my lovely little companion, lives in the home
                            studio{" "}
                            <CiHeart
                                className="mb-1 inline-flex text-lg text-pink-main"
                                aria-hidden="true"
                            />
                            . She&apos;s very friendly and always happy to say
                            hello and get a few pets, so please keep this in
                            mind if you have allergies.
                        </p>

                        <p className="mt-3 text-sm leading-relaxed text-muted">
                            View Doupi&apos;s gallery on{" "}
                            <ScrollLink
                                href="/gallery#doupi"
                                className="font-semibold text-link underline underline-offset-2 transition-colors hover:text-link-hover"
                            >
                                our gallery page
                            </ScrollLink>
                            .
                        </p>
                    </div>
                </div>
            </aside>
            <div className="my-6 h-px w-full bg-border/70" />
        </section>
    );
}
