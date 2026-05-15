import type { NextConfig } from "next";

const supabaseHost = (() => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  try {
    return url ? new URL(url).host : "rgsodmkoupaooikrzzgm.supabase.co";
  } catch {
    return "rgsodmkoupaooikrzzgm.supabase.co";
  }
})();

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: supabaseHost,
        pathname: "/storage/v1/object/public/creators/**",
      },
    ],
  },
};

export default nextConfig;
