import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    devIndicators: false,
    // eslint: {
    //     ignoreDuringBuilds: true,
    // }, typescript: {
    //     ignoreBuildErrors: true,
    // },


    // output: 'export', // Ստատիկ կայք է ստեղծվելու
    // // Եթե նախագիծդ արդեն ունի basePath, ավելացրու
    // basePath: '/NextJS-CV-Profile', // փոխիր քո ռեպոյի անունով
    // Image optimization-ը անջատելու համար (եթե օգտագործում ես next/image)
    // images: {
    //     unoptimized: true,
    // },
};

export default nextConfig;
