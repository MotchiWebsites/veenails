import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Terms of Service for Vee's Nail Studio website and booking system.",
    alternates: {
        canonical: "/terms-of-service",
    },
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-white text-[#2b2528]">

            <section className="mx-auto max-w-4xl px-6 py-12 md:py-16">
                <div className="mb-8 flex justify-center">
                    <Image
                        src="/icon.png"
                        alt="Vee's Nail Studio logo"
                        width={150}
                        height={150}
                        className="rounded-full"
                        priority
                    />
                </div>

                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                        Terms of Service
                    </h1>
                    <p className="mt-4 text-sm text-muted md:text-base">
                        Terms for using the Vee&apos;s Nail Studio website,
                        booking website, account features, and appointment
                        services.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-[#f7deec] px-5 py-4 text-sm font-medium">
                    Effective date: May 27, 2026
                </div>

                <div className="legal-copy mt-6 space-y-7 text-sm leading-7 md:text-base">
                    <p>
                        These Terms of Service (&quot;Terms&quot;) govern your
                        use of the Vee&apos;s Nail Studio website, booking
                        website, account features, online booking tools,
                        appointment-related communications, and related services.
                        By using the website, creating an account, submitting a
                        booking request, confirming a deposit, or attending an
                        appointment, you agree to these Terms and any booking
                        policies presented to you during the booking process.
                    </p>

                    <p>
                        These Terms are intended to be practical and clear. They
                        are not a substitute for legal advice. If Vee&apos;s Nail
                        Studio&apos;s operations change, these Terms should be
                        reviewed and updated.
                    </p>

                    <section>
                        <h2>1. About Vee&apos;s Nail Studio</h2>
                        <p>
                            Vee&apos;s Nail Studio provides nail services and
                            related booking features. The website and booking
                            system are used to display pricing, policies,
                            availability, booking requests, deposit instructions,
                            appointment status, and account history.
                        </p>
                    </section>

                    <section>
                        <h2>2. Account Registration</h2>
                        <ul>
                            <li>
                                You may need an account to book appointments or
                                view booking history.
                            </li>
                            <li>
                                You agree to provide accurate, current, and
                                complete information.
                            </li>
                            <li>
                                You are responsible for keeping your login
                                credentials secure.
                            </li>
                            <li>
                                We may suspend or restrict account access if we
                                believe the account is being misused or used in a
                                way that affects bookings, security, or other
                                clients.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. Booking Process</h2>
                        <p>
                            The booking system may show available appointment
                            slots, service options, design tiers, removals,
                            estimated pricing, booking policies, deposit
                            instructions, and appointment status. A booking is
                            not confirmed until it is approved by Vee&apos;s Nail
                            Studio.
                        </p>
                        <ul>
                            <li>
                                A selected slot may be held temporarily, usually
                                for 20 minutes, while you complete the booking
                                process.
                            </li>
                            <li>
                                If the booking is not completed within the hold
                                period, the slot may be released.
                            </li>
                            <li>
                                After you mark a deposit as sent, the appointment
                                may show as requested until the deposit is
                                reviewed.
                            </li>
                            <li>
                                Vee&apos;s Nail Studio may approve, reject,
                                cancel, reschedule, or request clarification for
                                bookings where necessary.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Deposits</h2>
                        <p>
                            A non-refundable deposit of CAD $15 is required to
                            secure an appointment unless otherwise stated. The
                            deposit is applied toward your final total. A booking
                            is not confirmed until the deposit is received and
                            approved by Vee&apos;s Nail Studio.
                        </p>
                        <p>
                            If a client marks a deposit as sent but Vee&apos;s
                            Nail Studio does not receive it, the booking may be
                            rejected and the slot may be released. If the studio
                            cancels or rejects a booking after receiving a
                            deposit, the studio may decide whether the deposit is
                            refunded, carried as account credit, or handled
                            another way, depending on the circumstances and
                            applicable policies.
                        </p>
                    </section>

                    <section>
                        <h2>5. Pricing, Estimates, and Adjustments</h2>
                        <p>
                            Prices displayed online are intended to help clients
                            choose the correct service, length, design tier, and
                            add-ons. Final pricing may vary based on design
                            complexity, nail condition, removals, added services,
                            repairs, changes requested during the appointment, or
                            services actually performed.
                        </p>
                        <p>
                            If your requested service changes during the
                            appointment, the admin/artist may update your booking
                            line items and total before final payment. Examples
                            include changing from Tier 2 to Tier 3 after
                            reviewing design inspiration, adding a removal,
                            switching service type, or adding repairs.
                        </p>
                        <p>
                            A 3% online booking/service fee may apply to bookings
                            made through the online booking system. Depending on
                            the final setup, this fee may be added on top of the
                            booking total or included in the displayed booking
                            amount.
                        </p>
                    </section>

                    <section>
                        <h2>6. Payment</h2>
                        <p>
                            Accepted payment methods may include cash and
                            e-transfer, with cash preferred where stated by the
                            studio. Final payment must be completed before the
                            client leaves the appointment unless the studio
                            agrees otherwise. The admin may mark the service as
                            paid after receiving payment.
                        </p>
                    </section>

                    <section>
                        <h2>7. Cancellations, Rescheduling, and No-Shows</h2>
                        <ul>
                            <li>
                                You may request cancellation or rescheduling
                                through the booking system or approved contact
                                method.
                            </li>
                            <li>
                                Cancellation or rescheduling with less than 24
                                hours notice may result in forfeiture of the
                                deposit and may require a new deposit to book
                                again.
                            </li>
                            <li>
                                If you reschedule at least 24 hours in advance,
                                your deposit may be transferred to the new
                                appointment, subject to studio approval.
                            </li>
                            <li>
                                Clients who fail to attend without prior notice
                                may be marked as no-show, forfeit the deposit,
                                and may be refused future bookings.
                            </li>
                            <li>
                                Admin decisions on refunds, account credits, or
                                forfeited deposits may depend on the timing,
                                reason, and circumstances of the cancellation.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>8. Late Arrivals</h2>
                        <p>
                            Vee&apos;s Nail Studio provides a 15-minute grace
                            period. If you are late, your design may be
                            simplified so the appointment can finish on time. If
                            you are 20 or more minutes late without notice, your
                            appointment may be cancelled and the deposit may be
                            forfeited.
                        </p>
                    </section>

                    <section>
                        <h2>9. Service Time and Quality</h2>
                        <p>
                            Nail sets may take approximately 2.5 to 4 hours to
                            complete. Clients should plan their day accordingly
                            and should not rush the artist, as Vee&apos;s Nail
                            Studio focuses on quality and retention.
                        </p>
                    </section>

                    <section>
                        <h2>10. Removals and Refills</h2>
                        <p>
                            Vee&apos;s Nail Studio does not work on top of
                            existing enhancements from another salon or artist.
                            Removals are only performed for nails originally done
                            by Vee&apos;s Nail Studio unless otherwise agreed.
                            Refills are only available for structured manicures
                            and not for Gel-X services unless the studio states
                            otherwise.
                        </p>
                    </section>

                    <section>
                        <h2>11. Health, Allergies, and Studio Environment</h2>
                        <p>
                            You are responsible for informing Vee&apos;s Nail
                            Studio before booking if you have allergies,
                            sensitivities, medical concerns, injuries, skin or
                            nail conditions, or other issues that may affect the
                            service. Vee&apos;s Nail Studio may refuse, modify,
                            or stop a service if it believes doing so is
                            necessary for safety, hygiene, or service quality.
                        </p>
                        <p>
                            Doupi, the studio dog, may be present during
                            appointments. If you have allergies, a fear of dogs,
                            or would prefer a dog-free visit, please contact the
                            studio before booking so the studio can discuss
                            whether accommodation is possible.
                        </p>
                    </section>

                    <section>
                        <h2>12. Guests and Preparation</h2>
                        <p>
                            If you plan to bring a guest, please notify the
                            studio in advance. Only one guest is allowed per
                            appointment unless approved. Guests may be required
                            to wait outside or in a lobby area. Clients should
                            arrive with clean, bare nails unless a
                            soak-off/removal service has been booked.
                        </p>
                    </section>

                    <section>
                        <h2>13. Nail Repairs and Refunds</h2>
                        <p>
                            Free repairs may be offered within one week for small
                            issues such as fallen charms, at the studio&apos;s
                            discretion. Breaks, lifting, or damage after one week
                            may require a repair fee. Vee&apos;s Nail Studio does
                            not offer refunds for completed services except
                            where required by law or expressly agreed by the
                            studio.
                        </p>
                    </section>

                    <section>
                        <h2>14. Design Inspiration and Third-Party Messaging</h2>
                        <p>
                            Clients may be asked to send design inspiration
                            through Instagram or another approved contact method.
                            Third-party platforms are not controlled by
                            Vee&apos;s Nail Studio and may have their own terms,
                            privacy policies, and data practices. Sending design
                            inspiration does not guarantee that an exact design
                            can be recreated.
                        </p>
                    </section>

                    <section>
                        <h2>15. Acceptable Use</h2>
                        <p>
                            You agree not to misuse the website, booking system,
                            account features, payment confirmations, or
                            communication tools. This includes submitting false
                            payment confirmations, interfering with availability,
                            attempting unauthorized access, harassing staff, or
                            using the system for unlawful or abusive purposes.
                        </p>
                    </section>

                    <section>
                        <h2>16. Website Availability</h2>
                        <p>
                            The website and booking system may not always be
                            available. Features may be changed, paused, updated,
                            or discontinued. We do not guarantee uninterrupted or
                            error-free operation, though we aim to keep the
                            booking system reliable and secure.
                        </p>
                    </section>

                    <section>
                        <h2>17. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, Vee&apos;s
                            Nail Studio is not liable for indirect, incidental,
                            special, consequential, or punitive damages arising
                            from use of the website, booking system, appointment
                            scheduling, third-party services, or communications.
                            Nothing in these Terms limits rights that cannot be
                            limited under applicable law.
                        </p>
                    </section>

                    <section>
                        <h2>18. Privacy</h2>
                        <p>
                            Use of the website and booking system is also
                            governed by the Vee&apos;s Nail Studio Privacy
                            Policy. The Privacy Policy explains how personal
                            information is collected, used, protected, and
                            shared.
                        </p>
                    </section>

                    <section>
                        <h2>19. Changes to These Terms</h2>
                        <p>
                            We may update these Terms from time to time. The
                            updated version will be posted on the website with a
                            new effective date. Continued use of the website or
                            booking system after changes are posted means you
                            accept the updated Terms, where permitted by law.
                        </p>
                    </section>

                    <section>
                        <h2>20. Governing Law</h2>
                        <p>
                            These Terms are governed by the laws of the Province
                            of Ontario and the federal laws of Canada applicable
                            in Ontario, without regard to conflict of law rules.
                            Any dispute will be handled in Ontario unless
                            applicable law requires otherwise.
                        </p>
                    </section>

                    <section>
                        <h2>21. Contact</h2>
                        <p>
                            For questions about these Terms, contact Vee&apos;s
                            Nail Studio through the contact method listed on
                            https://veenailstudio.ca or by email at
                            admin@motchi.ca. Booking changes, cancellation
                            requests, and design inspiration should be sent
                            through the booking system or the contact method
                            identified in your booking emails.
                        </p>
                    </section>

                    <div className="rounded-xl border border-[#f1dce7] bg-[#fff5fa] p-4 text-sm">
                        <p>
                            PDF version:{" "}
                            <a
                                className="font-semibold text-[#d86f99] underline"
                                href="/legal/terms-of-service.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Download Terms of Service PDF
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
