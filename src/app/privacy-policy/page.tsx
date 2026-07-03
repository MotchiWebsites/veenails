import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Privacy Policy for Vee's Nail Studio website and booking system.",
    alternates: {
        canonical: "/privacy-policy",
    },
};

export default function PrivacyPolicyPage() {
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
                        Privacy Policy
                    </h1>
                    <p className="mt-4 text-sm text-muted md:text-base">
                        How we collect, use, protect, and share information for
                        the Vee&apos;s Nail Studio website and booking system.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-[#f7deec] px-5 py-4 text-sm font-medium">
                    Effective date: May 27, 2026
                </div>

                <div className="legal-copy mt-6 space-y-7 text-sm leading-7 md:text-base">
                    <p>
                        This Privacy Policy explains how Vee&apos;s Nail Studio
                        (&quot;Vee&apos;s&quot;, &quot;we&quot;,
                        &quot;us&quot;, or &quot;our&quot;) collects, uses,
                        discloses, stores, and protects personal information when
                        you use our website, booking website, appointment
                        services, email communications, and related online
                        features.
                    </p>

                    <p>
                        This document is intended to be clear and practical. It
                        is not a substitute for legal advice. If Vee&apos;s Nail
                        Studio&apos;s operations change, this policy should be
                        reviewed and updated.
                    </p>

                    <section>
                        <h2>1. Scope</h2>
                        <p>
                            This Policy applies to the main website
                            (https://veenailstudio.ca), the booking website
                            (https://booking.veenailstudio.ca), client accounts,
                            online booking flows, booking-related emails, and
                            related communications. It does not control
                            third-party platforms such as Instagram, Google,
                            Supabase, Brevo, or any payment/e-transfer provider,
                            which have their own privacy practices.
                        </p>
                    </section>

                    <section>
                        <h2>2. Information We Collect</h2>

                        <h3>Account and contact information</h3>
                        <p>
                            Name, email address, phone number, username, account
                            login information, and optional profile details.
                        </p>

                        <h3>Booking and appointment information</h3>
                        <p>
                            Appointment date and time, selected services, pricing
                            options, design tier, removal requests, appointment
                            notes, cancellation requests, booking status, and
                            client history.
                        </p>

                        <h3>Deposit and payment-related information</h3>
                        <p>
                            Deposit amount, payment method, whether an e-transfer
                            was marked as sent or received, refund/credit status,
                            final amount due, and payment notes. We do not
                            intentionally collect full banking credentials
                            through the website.
                        </p>

                        <h3>Authentication information</h3>
                        <p>
                            If you sign in with Google or another identity
                            provider, we may receive your email address, name,
                            profile image, provider identifier, and related basic
                            authentication details.
                        </p>

                        <h3>Technical information</h3>
                        <p>
                            IP address, device/browser information, basic logs,
                            timestamps, security events, and similar information
                            used to operate, secure, and improve the booking
                            system.
                        </p>

                        <h3>Design inspiration</h3>
                        <p>
                            If you send nail design inspiration through Instagram
                            or another messaging channel, that content is handled
                            through that third-party platform and may also be
                            reviewed by Vee&apos;s Nail Studio for appointment
                            planning.
                        </p>
                    </section>

                    <section>
                        <h2>3. How We Use Information</h2>
                        <ul>
                            <li>Create and manage client accounts.</li>
                            <li>
                                Process booking requests, appointment holds,
                                confirmations, cancellations, rescheduling,
                                deposits, credits, and refunds.
                            </li>
                            <li>
                                Show booking history and appointment details to
                                clients and authorized admins.
                            </li>
                            <li>
                                Send account, authentication, booking, reminder,
                                cancellation, and administrative emails.
                            </li>
                            <li>
                                Maintain service quality, security, fraud
                                prevention, audit logs, and operational records.
                            </li>
                            <li>
                                Calculate website/booking fees and operational
                                summaries for internal billing and accounting
                                purposes.
                            </li>
                            <li>
                                Comply with legal, tax, accounting, security,
                                and dispute-resolution obligations.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. No Sale of Data and No AI Training</h2>
                        <p>
                            We do not sell or rent client personal information.
                            We do not use client personal information, booking
                            details, design inspiration, messages, or appointment
                            history to train external artificial intelligence or
                            machine learning models.
                        </p>
                        <p>
                            We may use service providers that process data on our
                            behalf to operate the website, booking system,
                            authentication, email delivery, hosting, storage, and
                            security. Those providers are not permitted by us to
                            use client information for unrelated purposes.
                        </p>
                    </section>

                    <section>
                        <h2>5. Consent and Choices</h2>
                        <p>
                            By creating an account, booking an appointment,
                            accepting policies, sending a deposit confirmation,
                            or communicating with us, you consent to the
                            collection and use of information needed to provide
                            those services. You can choose not to provide certain
                            information, but that may prevent us from creating an
                            account, confirming a booking, or providing services.
                        </p>
                    </section>

                    <section>
                        <h2>6. Disclosure of Information</h2>
                        <p>
                            We may disclose information only as needed for the
                            purposes described in this Policy, including to:
                        </p>
                        <ul>
                            <li>
                                Authorized Vee&apos;s Nail Studio staff/admins
                                who need access to manage bookings and services.
                            </li>
                            <li>
                                Technology providers such as database, hosting,
                                authentication, storage, and email providers.
                            </li>
                            <li>
                                Identity providers if you choose OAuth/social
                                sign-in, such as Google.
                            </li>
                            <li>
                                Professional advisors, accountants, or legal
                                representatives if needed.
                            </li>
                            <li>
                                Authorities or third parties where required by
                                law, to protect rights, or to respond to lawful
                                requests.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>7. Third-Party Services</h2>
                        <p>
                            The booking system may rely on third-party services
                            such as Supabase for authentication, database, and
                            storage; Brevo or other providers for email delivery;
                            Google for OAuth sign-in; and Instagram/Meta if you
                            send design inspiration through Instagram. Your use
                            of those third-party services may be governed by
                            their own terms and privacy policies.
                        </p>
                    </section>

                    <section>
                        <h2>8. Security</h2>
                        <p>
                            We use reasonable administrative, technical, and
                            organizational safeguards designed to protect
                            personal information. These may include account
                            authentication, role-based access controls, row-level
                            security, audit logging, encrypted connections, and
                            limiting admin access to authorized users. No method
                            of transmission or storage is completely secure, so
                            we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2>9. Retention</h2>
                        <p>
                            We keep personal information only as long as
                            reasonably necessary for booking, service, legal,
                            accounting, dispute-resolution, security, and
                            operational purposes. Booking history, payment
                            records, policy acceptances, and audit logs may be
                            kept for longer periods where needed for
                            recordkeeping, business operations, or legal
                            compliance.
                        </p>
                    </section>

                    <section>
                        <h2>10. Access, Correction, and Deletion Requests</h2>
                        <p>
                            You may request access to, correction of, or deletion
                            of your personal information by contacting us at
                            admin@motchi.ca or through the contact method listed
                            on our website. We may need to verify your identity
                            before processing a request. Some information may
                            need to be retained where required for legal,
                            accounting, dispute-resolution, security, or
                            operational reasons.
                        </p>
                    </section>

                    <section>
                        <h2>11. Children</h2>
                        <p>
                            Our online booking system is not intended for
                            children to create accounts without appropriate
                            consent. If we learn that we have collected
                            information from a child without appropriate consent,
                            we will take reasonable steps to delete or restrict
                            that information where required.
                        </p>
                    </section>

                    <section>
                        <h2>12. International Processing</h2>
                        <p>
                            Some service providers may process or store
                            information outside Ontario or Canada. Where this
                            occurs, information may be subject to the laws of the
                            jurisdiction where it is processed. We use service
                            providers to operate the website, booking system,
                            authentication, email, and related services.
                        </p>
                    </section>

                    <section>
                        <h2>13. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time.
                            The updated version will be posted on our website
                            with a new effective date. You will be notified
                            through your preferred method of contact should any
                            changes be made to our policies. Continued use of the
                            website or booking system after changes are posted
                            means you accept the updated Policy, where permitted
                            by law.
                        </p>
                    </section>

                    <section>
                        <h2>14. Contact</h2>
                        <p>
                            For privacy questions, account requests, or concerns,
                            contact Vee&apos;s Nail Studio through the contact
                            method listed on https://veenailstudio.ca or by
                            email at admin@motchi.ca. This email address may be
                            used for automated booking messages and may not be
                            monitored continuously, so urgent booking changes
                            should be sent through the contact method identified
                            in your booking emails or on the website.
                        </p>
                    </section>

                </div>
            </section>
        </main>
    );
}
