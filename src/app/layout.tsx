import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
    variable: "--font-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
    display: "swap",
});

const fraunces = Fraunces({
    variable: "--font-display",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Vee's Nail Studio",
        template: "%s | Vee's Nail Studio",
    },
    description:
        "Vee's Nail Studio is run by a certified nail artist in downtown Toronto. Book gel nails, custom nail art, and modern manicure services for a relaxed, one-of-a-kind nail experience.",
    applicationName: "Vee's Nail Studio",
    appleWebApp: {
        title: "Vee's Nails",
        capable: true,
        statusBarStyle: "default",
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://veenailstudio.ca'),
    alternates: {
        canonical: "/",
    }
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable}`}
            data-scroll-behavior="smooth"
        >
            <body className="min-h-dvh bg-background text-foreground antialiased">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
