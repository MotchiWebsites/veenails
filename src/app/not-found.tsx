import Link from "next/link";

import ButtonLink from "@/components/ui/ButtonLink";

import { FiHome, FiImage, FiDollarSign } from "react-icons/fi";
import { IoIosWarning } from "react-icons/io";

export default function NotFound() {
    const bookingURL =
        process.env.NEXT_PUBLIC_BOOKING_URL ||
        "https://booking.veenailstudio.ca";

    return (
        <main className="min-h-screen bg-background px-6 py-20 text-foreground">
            <section className="mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center">
                <div className="w-full rounded-3xl border border-border/50 bg-surface p-8 text-center shadow-sm sm:p-12">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-surface-2 text-pink-main shadow-sm">
                        <IoIosWarning className="h-7 w-7" />
                    </div>

                    <p className="mt-6 text-sm font-semibold tracking-wide text-muted">
                        404 | Page Not Found
                    </p>

                    <h1 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight">
                        Looks like this page doesn&apos;t exist :&#40;
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                        The page you&apos;re looking for may have been moved,
                        renamed, or does not exist. You can head back home, view
                        pricing, browse the gallery, or book your next
                        appointment.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <ButtonLink href="/">
                            <FiHome className="h-4 w-4" />
                            Back Home
                        </ButtonLink>

                        <ButtonLink
                            href={bookingURL}
                            external
                            variant="secondary"
                        >
                            Book Appointment
                        </ButtonLink>
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        <Link
                            href="/pricing"
                            className="group rounded-2xl border border-border/50 bg-background p-5 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 text-pink-main">
                                    <FiDollarSign className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">
                                        Services & Pricing
                                    </p>
                                    <p className="mt-1 text-xs text-muted">
                                        View services, design tiers, and booking
                                        notes.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link
                            href="/gallery"
                            className="group rounded-2xl border border-border/50 bg-background p-5 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 text-pink-main">
                                    <FiImage className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">
                                        Gallery
                                    </p>
                                    <p className="mt-1 text-xs text-muted">
                                        Browse featured sets, retention, and
                                        Doupi.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
