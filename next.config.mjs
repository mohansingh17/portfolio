/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["https://portfolio-mohan.vercel.app", "https://portfolio-mohan.vercel.app/", "portfolio-enh3y2bny-chaudharymohan2012-gmailcom.vercel.app", "portfolio-enh3y2bny-chaudharymohan2012-gmailcom.vercel.app/", "portfolio-mohan.vercel.app", "portfolio-mohan.vercel.app/"], // Replace with your S3 domain
    },
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: "https",
    //             hostname: "**",
    //         },
    //     ],
    // },
};

export default nextConfig;
