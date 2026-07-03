import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,

    allowedDevOrigins: ["10.0.0.239", "10.0.0.56"],

    async redirects() {
        return [
            {
                source: "/legal/privacy-policy.pdf",
                destination: "/privacy-policy",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
