import PageHeader from "@/components/ui/PageHeader";
import ScrollLink from "@/components/ui/ScrollLink";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

export default function HeroSection({ id = "" }: { id?: string }) {
    return (
        <section
            id={id}
            className="bg-background px-6 pt-12 text-center md:pt-24"
        >
            <div className="mx-auto max-w-3xl">
                <PageHeader
                    intro="Soft sets, detailed designs, and a cozy experience"
                    title="Vee's Nail Studio"
                    redirectURL="/pricing"
                    redirectPage="Services & Pricing"
                />

                <div className="mt-6">
                    Hi, I&apos;m Vee{" "}
                    <CiHeart className="inline-flex mb-1 text-2xl text-pink-500" />{" "}
                    Welcome to my little nail space. I&apos;m a Toronto-based nail
                    artist specializing in Gel-X, structured manicure, and
                    detailed nail art. I focus on quality and longevity so your
                    set not only looks beautiful, but lasts at least 4 weeks
                    with proper care. Every appointment is one-on-one in my
                    private home studio. I take my time, pay attention to the
                    small details, and truly care about the final result. take a
                    look around and see if my work feels like you.
                </div>

                <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-border/60 bg-surface p-4 text-left shadow-sm">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 xl:gap-6">
                        <div className="my-auto relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-surface-2 md:h-28 md:w-28 border border-border">
                            <Image
                                src="/home/hero/doupi.png"
                                alt="Doupi, artist's dog"
                                fill
                                sizes="460px"
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-base lg:text-lg font-header font-semibold text-foreground text-center">
                                Meet Doupi!
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-muted">
                                Doupi, my lovely little compnaion, lives in the
                                home studio{" "}
                                <CiHeart className="inline-flex mb-1 text-lg text-pink-500" />
                                . She&apos;s very friendly and always happy to
                                say hello (and get a few pets), so please keep
                                this in mind if you have any allergies.
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-muted">
                                View a Doupi gallery on{" "}
                                <ScrollLink
                                    href="/gallery#doupi"
                                    className="text-link font-bold underline hover:text-link-hover"
                                >
                                    our gallery page
                                </ScrollLink>
                                !
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <Image
                        src="/logo.png"
                        alt="Vee's Nail Studio Logo"
                        width={120}
                        height={120}
                        className="opacity-80"
                    />
                </div>
            </div>
        </section>
    );
}
